// Fixed-camera orthographic geometry. All scene dimensions are in world units.
const azimuth = 56 * Math.PI / 180;
const elevation = Math.PI / 6;
const sinA = Math.sin(azimuth), cosA = Math.cos(azimuth);
const sinE = Math.sin(elevation), cosE = Math.cos(elevation);
const scale = 1.28;
export function project([x, y, z]) {
 return [280 + (x * sinA - y * cosA) * scale, 246 + ((x * cosA + y * sinA) * sinE - z * cosE) * scale];
}
const fmt = n => Number(n.toFixed(2));
export function path(points, close = false) {
 return points.map(([x, y], i) => `${i ? 'L' : 'M'}${fmt(x)} ${fmt(y)}`).join('') + (close ? 'Z' : '');
}
export function line(points) { return path(points.map(project)); }
export function rounded(x, y, width, depth, radius = 2) {
 const r = Math.min(radius, width / 2, depth / 2);
 return [[x + width - r, y + r, -90], [x + width - r, y + depth - r, 0], [x + r, y + depth - r, 90], [x + r, y + r, 180]].flatMap(([cx, cy, start]) => Array.from({length:7}, (_, i) => {
  const a = (start + i * 15) * Math.PI / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
 }));
}
export function solid(x, y, width, depth, bottom, height, radius = 2) {
 const points = rounded(x, y, width, depth, radius);
 const top = points.map(([a,b]) => project([a,b,bottom+height]));
 const base = points.map(([a,b]) => project([a,b,bottom]));
 const sides = [];
 points.forEach(([a,b], i) => {
  const j = (i + 1) % points.length;
  const [c,d] = points[j];
  const nx = d-b, ny = a-c;
  if (nx * cosA + ny * sinA <= 0) return;
  const light = (nx * sinA - ny * cosA) / (Math.hypot(nx,ny) || 1);
  sides.push({d:path([top[i],top[j],base[j],base[i]],true), shade:light > .45 ? '#dcdcd9' : light > -.1 ? '#e5e5e2' : '#ededea'});
 });
 return {top:path(top,true),sides};
}
// Maps local screen coordinates (x, negative z) into the projected front face.
export function frontMatrix(y) {
 const [x0,y0] = project([0,y,0]);
 return `matrix(${sinA*scale} ${cosA*sinE*scale} 0 ${cosE*scale} ${x0} ${y0})`;
}
export function sideMatrix(x) {
 const [x0,y0] = project([x,0,0]);
 return `matrix(${-cosA*scale} ${sinA*sinE*scale} 0 ${cosE*scale} ${x0} ${y0})`;
}
export function topPath(x,y,width,depth,z,r=1) { return path(rounded(x,y,width,depth,r).map(([a,b])=>project([a,b,z])),true); }
export const keyRows = [
 [['`',1],['1',1],['2',1],['3',1],['4',1],['5',1],['6',1],['7',1],['8',1],['9',1],['0',1],['-',1],['=',1],['Backspace',2]],
 [['Tab',1.5],['q',1],['w',1],['e',1],['r',1],['t',1],['y',1],['u',1],['i',1],['o',1],['p',1],['[',1],[']',1],['\\',1.5]],
 [['CapsLock',1.75],['a',1],['s',1],['d',1],['f',1],['g',1],['h',1],['j',1],['k',1],['l',1],[';',1],["'",1],['Enter',2.25]],
 [['Shift',2.25],['z',1],['x',1],['c',1],['v',1],['b',1],['n',1],['m',1],[',',1],['.',1],['/',1],['ShiftRight',2.75]],
 [['Alt',1.5],['Meta',1.5],[' ',9],['NumpadEnter',1.5],['AltRight',1.5]],
];
export const keys = keyRows.flatMap((row,r) => {
 let x = -69;
 return row.map(([key,width]) => {
  const item = {key,x:x+.7,y:88.5+r*9.2+.7,width:9.2*width-1.4,height:5.6-r*.4};
  x += width*9.2;
  return item;
 });
});
export const shiftedKeys = Object.fromEntries([... '~!@#$%^&*()_+{}|:"<>?'].map((key,i)=>[key,[...'`1234567890-=[]\\;\',./'][i]]));
export const pressVector = [0, 2.2*cosE*scale];
