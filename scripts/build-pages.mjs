import { mkdir, readFile, writeFile } from 'node:fs/promises';

// Real HTML entry points allow direct visits and refreshes on GitHub Pages.
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const pages = { concepts: 'Interactive concepts', publications: 'Publications', projects: 'Projects', awards: 'Awards', recent: 'Recent', contact: 'Get in touch' };
for (const [slug, title] of Object.entries(pages)) {
 const directory = new URL(`../dist/${slug}/`, import.meta.url);
 await mkdir(directory, { recursive: true });
 await writeFile(new URL('index.html', directory), html.replace('<title>Yahya Masri</title>', `<title>${title} | Yahya Masri</title>`));
}
await writeFile(new URL('../dist/404.html', import.meta.url), html.replace('<title>Yahya Masri</title>', '<title>Page not found | Yahya Masri</title>'));
