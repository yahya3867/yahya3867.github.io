"""Build the outlined ym. mark and matching browser/app icons.
Requires Pillow and fontTools; uses the Windows Georgia Italic font.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen

root = Path(__file__).resolve().parents[1]
assets = root / 'public'
font_path = Path('C:/Windows/Fonts/georgiai.ttf')
font = TTFont(font_path)
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()
paths = []
x = 0
bounds = []
for char in 'ym.':
    glyph = glyphs[cmap[ord(char)]]
    pen = SVGPathPen(glyphs)
    glyph.draw(pen)
    box = BoundsPen(glyphs)
    glyph.draw(box)
    a, b, c, d = box.bounds
    bounds.append((x + a, b, x + c, d))
    paths.append(f'<path transform="translate({x} 0)" d="{pen.getCommands()}"/>')
    x += glyph.width - 75
left = min(b[0] for b in bounds)
bottom = min(b[1] for b in bounds)
right = max(b[2] for b in bounds)
top = max(b[3] for b in bounds)
width, height = right-left, top-bottom
side = max(width, height) * 1.14
ox = (side-width)/2-left
oy = (side-height)/2+top
svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {side} {side}"><g fill="#1d1d1b" transform="translate({ox} {oy}) scale(1 -1)">{"".join(paths)}</g></svg>\n'
(assets / 'brand-mark.svg').write_text(svg)
(assets / 'favicon.svg').write_text(svg)
# Rasterize the same font/spacing at high resolution before downsampling.
image = Image.new('RGBA', (4096, 2048))
draw = ImageDraw.Draw(image)
face = ImageFont.truetype(str(font_path), 1000)
cursor = 100
for char in 'ym.':
    draw.text((cursor, 200), char, font=face, fill='#1d1d1b')
    cursor += draw.textlength(char, font=face) - 75 * 1000 / font['head'].unitsPerEm
image = image.crop(image.getbbox())
side_px = round(max(image.size)*1.14)
master = Image.new('RGBA',(side_px,side_px))
master.alpha_composite(image,((side_px-image.width)//2,(side_px-image.height)//2))
for filename, size in [('favicon-16x16.png',16),('favicon-32x32.png',32),('apple-touch-icon.png',180),('logo192.png',192),('logo512.png',512)]:
    icon = master.resize((size,size),Image.Resampling.LANCZOS)
    if size >= 180:
        bg = Image.new('RGBA',icon.size,'white')
        bg.alpha_composite(icon)
        icon = bg.convert('RGB')
    icon.save(assets / filename)
master.save(assets / 'favicon.ico',sizes=[(16,16),(24,24),(32,32),(48,48),(64,64)])
