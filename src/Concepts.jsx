import { useEffect, useId, useRef, useState } from 'react';
import './Concepts.css';

function useReducedMotion() {
 const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{const query=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduced(query.matches);query.addEventListener('change',change);return()=>query.removeEventListener('change',change);},[]);
 return reduced;
}
function useVisible(ref) {
 const [visible,setVisible]=useState(true);
 useEffect(()=>{let inView=true;const update=()=>setVisible(inView&&!document.hidden);const observer=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;update();});observer.observe(ref.current);document.addEventListener('visibilitychange',update);return()=>{observer.disconnect();document.removeEventListener('visibilitychange',update);};},[ref]);
 return visible;
}
const NODES=['Inference','Geospatial','Digital twin','Data pipeline'];

export function ServerRack(){
 const [selected,setSelected]=useState(0);
 const ref=useRef(null),visible=useVisible(ref),reduced=useReducedMotion();
 const id=useId().replace(/:/g,'');
 function select(index){setSelected(index);}
 return <div ref={ref} className="concept-demo">
  <div className="concept-art rack-art">
   <svg viewBox="0 0 600 420" aria-label="Interactive four-node server rack. Select a server to highlight it.">
    <defs><filter id={`${id}-shadow`}><feGaussianBlur stdDeviation="9"/></filter></defs>
    <ellipse cx="310" cy="372" rx="126" ry="18" fill="#a9ac9d" opacity=".17" filter={`url(#${id}-shadow)`}/>
    <g stroke="#b9bdb1" strokeWidth="1" strokeLinejoin="round">
     <path d="m190 101 78-37 163 56-78 39Z" fill="#fdfdfb"/><path d="m353 159 78-39v222l-78 39Z" fill="#e6e8df"/>
     <path d="m190 101 163 58v222l-163-58Z" fill="#f4f5ef"/>
     <path d="m198 114 147 52v203l-147-52Z" fill="#e4e7dc"/>
     <path d="m207 121 129 46v193l-129-46Z" fill="#f9faf6"/>
     {Array.from({length:15},(_,i)=><path key={i} d={`m${368+i*3.2} ${162-i*1.6}v127`} stroke="#d2d6c9"/>)}
     <path d="m368 319 48-24v31l-48 24Z" fill="#f4f5ef"/>
     <g transform="matrix(1 .355 0 1 208 128)">
      {NODES.map((name,i)=><g key={name} role="button" tabIndex={0} aria-label={`Select ${name} server`} aria-pressed={selected===i} className={`rack-node ${selected===i?'selected':''}`} onClick={()=>select(i)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(i);}}}>
       <rect x="0" y={i*44} width="127" height="37" rx="3" fill={selected===i?'#f0f3e8':'#fff'} stroke={selected===i?'#899578':'#c4c9ba'} strokeWidth={selected===i?'1.5':'1'}/>
       {[0,1].map(j=><rect key={j} x={9+j*32} y={8+i*44} width="26" height="21" rx="1" fill="#f8f9f4" stroke="#d9ddcf"/>)}
       {Array.from({length:5},(_,n)=><path key={n} d={`M12 ${12+i*44+n*3}h20m12 0h20`} stroke="#c8cdbe" strokeWidth=".7"/>)}
       <circle cx="82" cy={14+i*44} r="3" fill="#91a17e" stroke="none" className={visible&&!reduced?'rack-led':''} style={{animationDelay:`${i*.3}s`}}/>
       <circle cx="94" cy={14+i*44} r="2" fill="#c9cfbc" stroke="none"/>
       <text x="78" y={28+i*44} fill="#737c68" stroke="none" fontFamily="monospace" fontSize="5.5">{`0${i+1} / OK`}</text>
       <path d={`M111 ${11+i*44}v15m4-15v15`} stroke="#d0d5c7"/>
      </g>)}
     </g>
     <path d="m224 328 93 33" stroke="#b9c0ad" strokeWidth="2"/>
     <path d="M420 328q42 35-17 44t-48 10" fill="none" stroke="#bdc4b1" strokeWidth="2"/>
    </g>
   </svg>
  </div>
 </div>;
}

const rad=Math.PI/180;
export function globePoint(lon,lat,yaw,pitch){
 const a=(lon+yaw)*rad,b=lat*rad,p=pitch*rad;
 const x=Math.cos(b)*Math.sin(a),y=Math.sin(b),z=Math.cos(b)*Math.cos(a);
 return [x,y*Math.cos(p)-z*Math.sin(p),y*Math.sin(p)+z*Math.cos(p)];
}
function globeLine(points,yaw,pitch){let d='',pen=false;for(const [lon,lat] of points){const [x,y,z]=globePoint(lon,lat,yaw,pitch);if(z<0){pen=false;continue;}d+=`${pen?'L':'M'}${300+x*139} ${175-y*139}`;pen=true;}return d;}
function landPath(points,yaw,pitch){
 const poly=points.map(([lon,lat])=>globePoint(lon,lat,yaw,pitch)),out=[];
 for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length];if(a[2]>=0)out.push(a);if((a[2]>=0)!==(b[2]>=0)){const t=a[2]/(a[2]-b[2]),v=a.map((n,j)=>n+(b[j]-n)*t),length=Math.hypot(...v);out.push(v.map(n=>n/length));}}
 return out.length<3?'':out.map(([x,y],i)=>`${i?'L':'M'}${300+x*139} ${175-y*139}`).join('')+'Z';
}
const LAND=[
 [[-168,65],[-140,70],[-125,55],[-125,40],[-110,26],[-98,18],[-84,10],[-78,24],[-80,32],[-66,46],[-60,53],[-80,62],[-110,72]],
 [[-81,12],[-66,10],[-50,0],[-35,-8],[-48,-27],[-67,-55],[-75,-40],[-81,-5]],
 [[-17,35],[8,37],[35,30],[51,12],[42,-10],[30,-34],[17,-35],[8,-20],[-2,5],[-17,15]],
 [[-10,36],[-10,58],[10,71],[40,68],[65,76],[110,72],[170,60],[145,45],[130,32],[108,20],[103,1],[80,8],[70,24],[45,30],[30,42],[12,45]],
 [[112,-11],[136,-11],[154,-27],[146,-39],[116,-35]], [[-54,59],[-42,60],[-20,80],[-48,83],[-62,72]],
];
const PLACES=[
 {name:'Fairfax, Virginia',lon:-77.3,lat:38.85,label:'Research & study',description:'George Mason University and the NSF Spatiotemporal Innovation Center.',href:'https://www.gmu.edu/'},
 {name:'Sudan',lon:30.2,lat:15.5,label:'Conflict analysis',description:'Research on crisis-news classification, conflict monitoring, and geographic information extraction.',href:'/publications'},
 {name:'Global systems',lon:18,lat:5,label:'Digital twins',description:'Research on digital twins as decision infrastructure and geospatial intelligence.',href:'/publications'},
];
const LATITUDES=Array.from({length:5},(_,i)=>Array.from({length:181},(_,j)=>[-180+j*2,-60+i*30]));
const LONGITUDES=Array.from({length:12},(_,i)=>Array.from({length:91},(_,j)=>[-180+i*30,-90+j*2]));
export function ResearchGlobe(){
 const [rotation,setRotation]=useState({yaw:35,pitch:-12}),[spinning,setSpinning]=useState(false),[selected,setSelected]=useState(0),[dragging,setDragging]=useState(false);
 const ref=useRef(null),drag=useRef(null),visible=useVisible(ref),reduced=useReducedMotion();
 useEffect(()=>{if(!spinning||!visible||reduced)return;let frame,last=0;function step(now){const dt=last?Math.min((now-last)/1000,.05):0;last=now;setRotation(r=>({...r,yaw:r.yaw+dt*7}));frame=requestAnimationFrame(step);}frame=requestAnimationFrame(step);return()=>cancelAnimationFrame(frame);},[spinning,visible,reduced]);
 function focusPlace(i){setSelected(i);setSpinning(false);setRotation({yaw:-PLACES[i].lon,pitch:PLACES[i].lat*.6});}
 function move(event){if(!drag.current)return;const dx=event.clientX-drag.current.x,dy=event.clientY-drag.current.y;setRotation({yaw:drag.current.yaw+dx*.5,pitch:Math.max(-65,Math.min(65,drag.current.pitch+dy*.35))});}
 const place=PLACES[selected];
 return <div ref={ref} className="concept-demo">
  <svg className={`concept-art globe-art ${dragging?'dragging':''}`} viewBox="0 0 600 365" role="group" aria-label="Rotatable research globe. Drag to rotate, or use the arrow keys." tabIndex={0} onPointerDown={e=>{if(e.target.closest('[data-marker]'))return;e.currentTarget.setPointerCapture(e.pointerId);setSpinning(false);setDragging(true);drag.current={x:e.clientX,y:e.clientY,...rotation};}} onPointerMove={move} onPointerUp={()=>{drag.current=null;setDragging(false);}} onPointerCancel={()=>{drag.current=null;setDragging(false);}} onKeyDown={e=>{const deltas={ArrowLeft:[-10,0],ArrowRight:[10,0],ArrowUp:[0,-10],ArrowDown:[0,10]};if(deltas[e.key]){e.preventDefault();setSpinning(false);const [x,y]=deltas[e.key];setRotation(r=>({yaw:r.yaw+x,pitch:Math.max(-65,Math.min(65,r.pitch+y))}));}}}>
   <ellipse cx="300" cy="338" rx="105" ry="9" fill="#e7e9df" opacity=".6"/>
   <circle cx="300" cy="175" r="139" fill="#fafbf7" stroke="#c2c8b7"/>
   {LAND.map((poly,i)=><path key={i} d={landPath(poly,rotation.yaw,rotation.pitch)} fill="#e9eddf" stroke="#d7ddca" strokeWidth=".65"/>)}
   {[...LATITUDES,...LONGITUDES].map((points,i)=><path key={i} d={globeLine(points,rotation.yaw,rotation.pitch)} fill="none" stroke="#c4cdb8" strokeWidth=".65"/>)}
   {PLACES.map((p,i)=>{const [x,y,z]=globePoint(p.lon,p.lat,rotation.yaw,rotation.pitch);return z>=0&&<g key={p.name} transform={`translate(${300+x*139} ${175-y*139})`} role="button" tabIndex={0} data-marker="true" aria-label={`Explore ${p.name}`} onClick={()=>focusPlace(i)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();focusPlace(i);}}} className="globe-marker"><circle r="15" fill="transparent"/><circle r={selected===i?7:4} fill={selected===i?'#839570':'#a2ae93'} stroke="white" strokeWidth="2"/>{selected===i&&<circle r="12" fill="none" stroke="#9eac8c" strokeWidth=".7"/>}</g>;})}
  </svg>
  <div className="concept-controls">{PLACES.map((p,i)=><button key={p.name} aria-pressed={selected===i} onClick={()=>focusPlace(i)}>{p.name}</button>)}</div>
  <div className="globe-detail" aria-live="polite"><span className="concept-eyebrow">{place.label}</span><h2>{place.name}</h2><p>{place.description}</p><a href={place.href}>{selected===0?'Visit George Mason':'Explore publications'} ↗</a></div>
  <div className="concept-controls"><button disabled={reduced} onClick={()=>setSpinning(v=>!v)}>{spinning?'Pause rotation':'Auto-rotate'}</button><button onClick={()=>{setRotation({yaw:35,pitch:-12});setSpinning(false);setSelected(0);}}>Reset view</button></div>
  <p className="concept-caption">Drag or use arrow keys to rotate. Select a location to explore. Stylized geography.</p>
 </div>;
}

export const FLIGHT_POINTS=[[75,255],[150,186],[260,130],[390,150],[475,209],[524,266]];
export function flightPosition(t){
 const span=Math.min(FLIGHT_POINTS.length-2,Math.floor(t*(FLIGHT_POINTS.length-1))),u=Math.min(1,t*(FLIGHT_POINTS.length-1)-span);
 const p0=FLIGHT_POINTS[Math.max(0,span-1)],p1=FLIGHT_POINTS[span],p2=FLIGHT_POINTS[span+1],p3=FLIGHT_POINTS[Math.min(FLIGHT_POINTS.length-1,span+2)];
 return [0,1].map(i=>.5*((2*p1[i])+(-p0[i]+p2[i])*u+(2*p0[i]-5*p1[i]+4*p2[i]-p3[i])*u*u+(-p0[i]+3*p1[i]-3*p2[i]+p3[i])*u*u*u));
}
const GATE_TIMES=[.2,.4,.6,.8];
function DroneShape({flying}){return <g className={flying?'drone-flying':''}>
 <g stroke="#bdc5b1" fill="#f8faf2" strokeLinejoin="round"><path d="M-27-9 27 10M-27 10 27-9" stroke="#d5dccb" strokeWidth="7"/><path d="m-13-8 13-6 14 7L0 1Z"/><path d="m-13-8 13 9v13l-13-9Z" fill="#e9eddf"/><path d="m0 1 14-8V5L0 14Z" fill="#dce3d1"/>
 {[[-28,-10],[28,-10],[-28,10],[28,10]].map(([x,y],i)=><g key={i} transform={`translate(${x} ${y})`}><ellipse rx="15" ry="5" fill="#f5f8ed"/><g className="drone-prop"><path d="M-12 0H12" stroke="#a2b18e" strokeWidth="2"/><path d="M0-3v6" stroke="#a2b18e" strokeWidth="1"/></g><circle r="2" fill="#9bad85"/></g>)}
 <path d="m-9 8-3 12 10 4m11-15 3 11-10 4" fill="none"/><circle cx="-6" cy="7" r="3" fill="#8c9f76"/></g>
 </g>;}
export function DroneFlight(){
 const [progress,setProgress]=useState(0),[running,setRunning]=useState(false),[speed,setSpeed]=useState(1);
 const time=useRef(0),ref=useRef(null),visible=useVisible(ref),reduced=useReducedMotion();
 useEffect(()=>{if(!running||!visible||reduced)return;let frame,last=0;function step(now){if(last)time.current=Math.min(1,time.current+Math.min((now-last)/1000,.05)*speed/12);last=now;setProgress(time.current);if(time.current>=1){setRunning(false);return;}frame=requestAnimationFrame(step);}frame=requestAnimationFrame(step);return()=>cancelAnimationFrame(frame);},[running,visible,speed,reduced]);
 const passed=GATE_TIMES.filter(t=>progress>=t).length,finished=progress>=1;
 const [x,y]=flightPosition(progress),[nx,ny]=flightPosition(Math.min(1,progress+.01));
 const tilt=finished?0:Math.max(-12,Math.min(12,(ny-y)*3));
 const route=Array.from({length:101},(_,i)=>flightPosition(i/100));
 function reset(){time.current=0;setProgress(0);setRunning(false);}
 function start(){if(finished){time.current=0;setProgress(0);}setRunning(v=>!v);}
 function advance(){const next=GATE_TIMES.find(t=>t>progress+.001)??1;time.current=next;setProgress(next);setRunning(false);}
 return <div ref={ref} className="concept-demo">
  <svg className="concept-art flight-art" viewBox="0 0 600 365" role="img" aria-label={`Simulated autonomous drone flight. ${passed} of 4 gates passed.`}>
   <path d="M45 290 280 69 560 280 315 344Z" fill="#fbfcf8" stroke="#e3e7da"/>
   {Array.from({length:5},(_,i)=><path key={i} d={`M${90+i*45} ${247-i*42} ${360+i*40} ${321-i*32}M${90+i*48} ${300+i*8} ${323+i*43} ${104+i*34}`} fill="none" stroke="#ecefe5" strokeWidth=".6"/>)}
   <path d={route.map(([a,b],i)=>`${i?'L':'M'}${a} ${b}`).join('')} fill="none" stroke="#cbd5be" strokeDasharray="3 6"/>
   {GATE_TIMES.map((t,i)=>{const [gx,gy]=flightPosition(t);return <g key={t} stroke={progress>=t?'#95a77e':'#c3cdb6'} fill="none" strokeWidth="2"><path d={`M${gx-25} ${gy+39}v-81l50 13v81`} /><path d={`M${gx-19} ${gy+39}v-73l38 10v72`} strokeWidth=".65"/><path d={`M${gx-30} ${gy+40}h14m31 12h14`} strokeWidth="1"/><text x={gx-24} y={gy-50} fill="#a1ab94" stroke="none" fontFamily="monospace" fontSize="8">0{i+1}</text>{progress>=t&&<path d={`m${gx-3} ${gy-47} 3 3 6-7`} strokeWidth="1.4"/>}</g>;})}
   <ellipse cx={x} cy={y+47} rx="26" ry="7" fill="#d9dfcf" opacity=".45"/>
   <g transform={`translate(${x} ${y}) rotate(${tilt})`}><DroneShape flying={running&&visible&&!reduced}/></g>
   <g fill="#a8b39a" fontFamily="monospace" fontSize="8"><text x="47" y="325">TAKEOFF</text><text x="492" y="325">LANDING</text></g>
  </svg>
  <div className="flight-readout"><span>Gates <strong>{passed} / 4</strong></span><span>Flight <strong>{(progress*12).toFixed(1)} s</strong></span><span>Status <strong>{finished?'Landed':running?'Flying':progress?'Paused':'Ready'}</strong></span></div>
  <div className="flight-progress" role="progressbar" aria-label="Flight completion" aria-valuenow={Math.round(progress*100)} aria-valuemin={0} aria-valuemax={100}><span style={{width:`${progress*100}%`}}/></div>
  <div className="concept-controls">{reduced?<button onClick={advance} disabled={finished}>Advance to next gate</button>:<button onClick={start}>{finished?'Fly again':running?'Pause flight':progress?'Resume flight':'Start flight'}</button>}<button onClick={reset}>Reset flight</button><label className="speed-label">Speed <select value={speed} onChange={e=>setSpeed(Number(e.target.value))}><option value={.5}>0.5×</option><option value={1}>1×</option><option value={2}>2×</option></select></label></div>
  <p className="demo-status" role="status">{finished?'Flight complete. All four gates passed; drone landed.':`${passed} of 4 gates passed.${reduced?' Reduced motion: advance through the course one gate at a time.':''}`}</p>
  <p className="concept-caption">An illustrative flight path, not a live drone controller.</p>
 </div>;
}

const OPTIONS=[{name:'Server rack',note:'Select a server to highlight it.',Component:ServerRack},{name:'Research globe',note:'Rotate the globe and explore the places connected to my research.',Component:ResearchGlobe},{name:'Autonomous drone',note:'Launch, pause, and replay a flight through four gates.',Component:DroneFlight}];
export default function Concepts(){
 const [active,setActive]=useState(()=>Math.max(0,['rack','globe','drone'].indexOf(new URLSearchParams(window.location.search).get('view')))),tabs=useRef([]);
 function navigate(e){let next=active;if(e.key==='ArrowRight')next=(active+1)%3;else if(e.key==='ArrowLeft')next=(active+2)%3;else if(e.key==='Home')next=0;else if(e.key==='End')next=2;else return;e.preventDefault();setActive(next);tabs.current[next]?.focus();}
 const {Component,note}=OPTIONS[active];
 return <section className="block concepts" id="concepts"><h1 className="block-title">Three little worlds</h1><p className="concept-intro">Interactive alternatives for the homepage. Try each one.</p>
 <div className="concept-tabs" role="tablist" aria-label="Homepage illustration concepts">{OPTIONS.map((option,i)=><button ref={el=>tabs.current[i]=el} key={option.name} id={`concept-tab-${i}`} role="tab" aria-selected={active===i} aria-controls={`concept-panel-${i}`} tabIndex={active===i?0:-1} onKeyDown={navigate} onClick={()=>setActive(i)}><span>0{i+1}</span>{option.name}</button>)}</div>
 <div key={active} role="tabpanel" id={`concept-panel-${active}`} aria-labelledby={`concept-tab-${active}`}><p className="concept-description">{note}</p><Component/></div>
 </section>;
}
