import { memo, useEffect, useId, useRef, useState } from 'react';
import { project, path, line, rounded, solid, frontMatrix, sideMatrix, topPath, keys, shiftedKeys, pressVector } from './computerGeometry';
import './DeskComputer.css';

function Solid({x,y,w,d,z=0,h=4,r=2,children}) {
 const shape = solid(x,y,w,d,z,h,r);
 return <g className="pc-solid">{shape.sides.map((side,i)=><path key={i} d={side.d} fill={side.shade} stroke={side.shade} strokeWidth=".4"/>)}<path d={shape.top} fill="#fff"/>
 <path d={shape.top} className="pc-edge"/>{shape.sides.filter((_,i)=>i===0||i===shape.sides.length-1).map((side,i)=><path key={i} d={side.d} className="pc-edge pc-faint"/>)}{children}</g>;
}
function Screw({point}) {
 const [x,y]=project(point);
 return <g><ellipse cx={x} cy={y} rx="2.3" ry="1.3" className="pc-edge"/><path d={`M${x-1} ${y}h2`} className="pc-edge"/></g>;
}
const KeyboardKey = memo(function KeyboardKey({item}) {
 return <g className="pc-key" data-key={item.key}>
  <Solid x={item.x} y={item.y} w={item.width} d={7.8} z={8.6} h={item.height} r={1.4}/>
  <path d={topPath(item.x+1.6,item.y+1.6,item.width-3.2,4.6,8.6+item.height,.8)} className="pc-edge pc-faint"/>
 </g>;
});
const Scene = memo(function Scene({id}) {
 const coil=Array.from({length:420},(_,i)=>{
  const t=i/419,angle=t*17*Math.PI*2;
  return [80+3.2*Math.cos(angle),44+40*t,3.6+3.2*Math.sin(angle)];
 });
 const mouseCord=Array.from({length:48},(_,i)=>{
  const t=i/47,u=1-t,p=[[72,12,12.5],[116,14,1],[111,59,1],[111,104,3]];
  return [0,1,2].map(c=>u*u*u*p[0][c]+3*u*u*t*p[1][c]+3*u*t*t*p[2][c]+t*t*t*p[3][c]);
 });
 return <>
  <defs><filter id={`${id}-shadow`} x="-35%" y="-100%" width="170%" height="300%"><feGaussianBlur stdDeviation="7"/></filter>
   <clipPath id={`${id}-screen`}><rect x="-40" y="-150" width="80" height="73" rx="8"/></clipPath>
  </defs>
  <path d={topPath(-100,-84,238,242,-8,10)} fill="#9a9a94" opacity=".22" filter={`url(#${id}-shadow)`}/>
  {[[-78,-62],[116,-62],[-78,136],[116,136]].map(([x,y])=><Solid key={`${x},${y}`} x={x-5} y={y-5} w={10} d={10} z={-15} h={5} r={5}/>)}
  <Solid x={-100} y={-84} w={238} d={242} z={-10} h={10} r={10}/>
  <path d={topPath(-95,-79,228,232,.1,7)} className="pc-edge"/>
  {[[-90,-74],[128,-74],[-90,148],[128,148]].map(([x,y])=><Screw key={`${x},${y}`} point={[x,y,.3]}/>)}
  <Solid x={-59} y={-59} w={118} d={112} z={0} h={5} r={6}/>
  <Solid x={-62} y={-62} w={124} d={118} z={5} h={165} r={8}/>
  <path d={topPath(-42,-55,84,11,170.2,5)} className="pc-edge"/>
  <path d={topPath(-39.8,-52.8,79.6,6.6,170.3,3)} className="pc-edge pc-faint"/>
  {Array.from({length:7},(_,i)=><path key={i} d={topPath(-34,-34.7+i*3.4,68,1.4,170.3,.7)} className="pc-edge pc-faint"/>)}
  <g transform={sideMatrix(62.1)}>
   {Array.from({length:14},(_,i)=><rect key={i} x={-51+i*3.2} y="-156" width=".8" height="34" rx=".4" fill="#d4d4d6"/>)}
   {Array.from({length:10},(_,i)=><rect key={i} x={-51+i*3.2} y="-30" width=".8" height="10" rx=".4" fill="#d4d4d6"/>)}
   <rect x="-53" y="-28" width="12" height="16" rx="1" fill="#e5e5e2" stroke="#b4b4b8" strokeWidth=".6"/>
   <g data-rocker="on"><path d="m-51-26 8 2v5l-8-1Z" fill="#fdfdfd" stroke="#8a8a8f" strokeWidth=".6"/><path d="M-51-19h8v5h-8Z" fill="#dcdcd9"/></g>
   <g data-rocker="off" style={{display:'none'}}><path d="M-51-26h8v5h-8Z" fill="#dcdcd9"/><path d="m-51-20 8-1v5l-8 2Z" fill="#fff" stroke="#8a8a8f" strokeWidth=".6"/></g>
   <rect data-action="power" x="-57" y="-32" width="20" height="24" fill="transparent" className="pc-hotspot"/>
  </g>
  <g transform={frontMatrix(56.2)}>
   <rect x="-58" y="-166" width="116" height="157" rx="5" className="pc-edge pc-faint"/>
   <rect x="-48" y="-158" width="96" height="90" rx="6" fill="#e5e5e2" stroke="#b4b4b8" strokeWidth=".6"/>
   <rect x="-46" y="-156" width="92" height="86" rx="6" fill="#fff"/>
   <rect x="-40" y="-150" width="80" height="73" rx="8" fill="#eeeeeb" stroke="#b4b4b8" strokeWidth=".6" data-part="glass"/>
   <g clipPath={`url(#${id}-screen)`}>
    <g data-part="crt">
     {Array.from({length:45},(_,i)=><path key={i} d={`M-40 ${-149+i*1.6}h80`} className="pc-edge pc-faint" opacity=".7"/>)}
     <image href="/brand-mark.svg" x="-12" y="-140" width="24" height="24" opacity=".48"/>
     <text data-part="text" x="-32" y="-91" className="pc-screen-text">&gt; hello, world</text>
     <rect data-part="cursor" x="9" y="-95.2" width="3" height="5" fill="#1d1d1b" className="pc-cursor"/>
    </g>
    <path data-part="beam" d="M-36-113.5h72" stroke="#1d1d1b" strokeWidth="1.3" opacity="0"/>
    <circle data-part="dot" cx="0" cy="-113.5" r="1.4" fill="#1d1d1b" opacity="0"/>
   </g>
   <path d="M-34-134q1-9 9-10" className="pc-edge"/>
   <rect x="8" y="-50.5" width="38" height="5.5" rx="2" fill="#dcdcd9" stroke="#b4b4b8" strokeWidth=".6"/>
   <path d="M9-47h36" className="pc-edge"/>
   {Array.from({length:9},(_,i)=><rect key={i} x={-47+i*3} y="-54" width="1.4" height="12" rx=".7" fill="#dcdcd9"/>)}
   <circle data-part="led" cx="-46" cy="-36" r=".8" fill="#55554f"/>
  </g>
  {[28,8].map(y=><g key={y}>
   <Solid x={61.6} y={y-1} w={1.4} d={10} z={8} h={9} r={1}/>
   <Solid x={63} y={y} w={4.4} d={8} z={9} h={7} r={1}/>
   <Solid x={67.4} y={y+2} w={5} d={4} z={10.5} h={4} r={1.6}/>
  </g>)}
  <path d={line([[72.4,32,12.5],[76,34,11.4],[79,37.5,8],[81.6,41,5.2],[83.2,44,3.6]])} className="pc-edge pc-cord"/>
  <path d={line(coil)} className="pc-edge pc-cord"/>
  <path d={line([[83.2,84,3.6],[82.6,87,3.8],[82.4,91.4,4.4],[80,92,4.5]])} className="pc-edge pc-cord"/>
  <path d={line(mouseCord)} className="pc-edge pc-cord"/>
  <Solid x={-76} y={84} w={152} d={58} z={1.6} h={7} r={4}/>
  <path d={topPath(-70.4,87.1,140.8,48.8,8.7,2)} className="pc-edge"/>
  {keys.map(item=><KeyboardKey item={item} key={item.key}/>)}
  <Solid x={76} y={90} w={4} d={4} z={2.5} h={4} r={1.5}/>
  <path d={topPath(100,104,22,38,1,10)} fill="#9a9a94" opacity=".18" filter={`url(#${id}-shadow)`}/>
  <Solid x={100} y={104} w={22} d={38} z={0} h={1.6} r={10}/>
  <Solid x={101.2} y={105.2} w={19.6} d={35.6} z={1.6} h={5.4} r={8.8}/>
  <path d={line([[101.2,119,7.1],[120.8,119,7.1]])+line([[111,105.2,7.1],[111,119,7.1]])} className="pc-edge"/>
  <Solid x={109.6} y={109} w={2.8} d={7} z={7} h={.9} r={1.3}/>
 </>;
});

export default function DeskComputer() {
 const root=useRef(null),input=useRef(null),controller=useRef(null);
 const [powered,setPowered]=useState(true);
 const id=useId().replace(/:/g,'');
 useEffect(()=>{
  const host=root.current,field=input.current,svg=host.querySelector('svg');
  const find=part=>svg.querySelector(`[data-part="${part}"]`);
  const text=find('text'),cursor=find('cursor'),crt=find('crt'),beam=find('beam'),dot=find('dot');
  const keyElements=new Map([...svg.querySelectorAll('[data-key]')].map(e=>[e.dataset.key,e]));
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const phrases=['language models','digital twins','hello, world'];
  let value='',on=true,demo=!motion.matches,visible=true,frame=0,last=0,powerTime=2,disposed=false;
  let phrase=0,index=0,erasing=false,wait=1.2,shift=false,caps=false;
  const active=new Map();
  function paint(){
   text.textContent='> '+value;
   cursor.setAttribute('x',String(-32+text.getComputedTextLength()+.4));
   field.value=demo?'':value;
  }
  function wake(){if(!frame&&visible&&!disposed&&!document.hidden)frame=requestAnimationFrame(tick);}
  function press(key,hold=.1){
   const mapped=shiftedKeys[key]||key.toLowerCase();
   const actual=keyElements.has(key)?key:mapped;
   if(keyElements.has(actual))active.set(actual,{held:hold,depth:active.get(actual)?.depth||0});
   if(key!==key.toLowerCase()||shiftedKeys[key])active.set('Shift',{held:.15,depth:0});
   wake();
  }
  function add(char){if(!on)return;press(char);if(value.length<20)value+=char;paint();}
  function stopDemo(){if(demo){demo=false;value='';paint();}}
  function power(next){
   if(on===next)return;
   on=next;powerTime=motion.matches?2:0;setPowered(next);
   svg.querySelector('[data-rocker="on"]').style.display=next?'':'none';
   svg.querySelector('[data-rocker="off"]').style.display=next?'none':'';
   find('led').style.opacity=next?'1':'.15';
   wake();
  }
  function powerPaint(){
   const t=powerTime,ease=t=>1-Math.pow(1-Math.min(1,Math.max(0,t)),3);
   let x=1,y=1,b=0,d=0;
   if(on){if(t<.14){x=ease(t/.14);y=.012;b=1;}else if(t<.36){y=.012+.988*ease((t-.14)/.22);b=1-ease((t-.14)/.22);}}
   else if(t<.1){y=1-.988*ease(t/.1);b=ease(t/.1);}else if(t<.26){y=.012;x=1-ease((t-.1)/.16);b=1;}else{x=0;y=0;d=Math.max(0,1-(t-.26)/.5);}
   crt.setAttribute('transform',`translate(0 -113.5) scale(${x} ${y}) translate(0 113.5)`);
   beam.setAttribute('transform',`translate(0 -113.5) scale(${Math.max(.001,x)} 1) translate(0 113.5)`);
   beam.setAttribute('opacity',b);dot.setAttribute('opacity',d);
   find('glass').setAttribute('fill',on||t<.26?'#eeeeeb':'#dcdcd9');
  }
  function tick(now){
   frame=0;if(disposed||!visible||document.hidden)return;
   const dt=last?Math.min((now-last)/1000,1/30):1/60;last=now;
   if(demo){wait-=dt;if(wait<=0){const current=phrases[phrase];if(!erasing){if(index<current.length){add(current[index++]);wait=.09+Math.random()*.11;}else{erasing=true;wait=2.2;}}else if(value.length){press('Backspace');value=value.slice(0,-1);paint();wait=.055;}else if(phrase<phrases.length-1){phrase++;index=0;erasing=false;wait=.7;}else{demo=false;value='hello, world';paint();}}}
   powerTime+=dt;powerPaint();
   for(const [key,state] of active){
    state.held=Math.max(0,state.held-dt);const target=state.held>0?1:0;
    state.depth=motion.matches?target:state.depth+(target-state.depth)*(1-Math.exp(-dt/(target?.025:.07)));
    if(Math.abs(target-state.depth)<.005)state.depth=target;
    const element=keyElements.get(key);element.setAttribute('transform',`translate(${pressVector[0]*state.depth} ${pressVector[1]*state.depth})`);element.toggleAttribute('data-down',state.depth>.3);
    if(!state.held&&!state.depth)active.delete(key);
   }
   if(demo||active.size||powerTime<.85)wake();else last=0;
  }
  function handleInput(){
   const next=field.value;
   const wasDemo=demo;stopDemo();
   if(!on){field.value=value;return;}
   if(!wasDemo&&next.startsWith(value)){for(const char of next.slice(value.length))add(char);}
   else if(!wasDemo&&value.startsWith(next)){press('Backspace');value=next;paint();}
   else {value='';for(const char of next.slice(0,20))add(char);paint();}
  }
  function keydown(event){
   if(event.metaKey||event.ctrlKey||event.altKey)return;
   if(event.key==='Escape'){event.preventDefault();stopDemo();power(!on);}
   else if(event.key==='Enter'){event.preventDefault();stopDemo();if(on){press('Enter');value='';paint();}}
   else if(event.key==='Shift')press(event.code==='ShiftRight'?'ShiftRight':'Shift',.15);
   else if(event.key==='Backspace'&&demo){event.preventDefault();stopDemo();press('Backspace');}
  }
  function click(event){
   const key=event.target.closest('[data-key]')?.dataset.key;
   stopDemo();
   if(event.target.closest('[data-action="power"]'))power(!on);
   else if(key&&on){
    if(key.length===1){
     const shifted=shift?Object.keys(shiftedKeys).find(symbol=>shiftedKeys[symbol]===key):null;
     add(shifted||((shift!==caps)?key.toUpperCase():key));shift=false;
    }
    else if(key==='Backspace'){press(key);value=value.slice(0,-1);paint();}
    else if(key==='Enter'||key==='NumpadEnter'){press(key);value='';paint();}
    else {press(key);if(key.startsWith('Shift'))shift=!shift;if(key==='CapsLock')caps=!caps;}
   }
   field.focus({preventScroll:true});
  }
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;last=0;if(visible)wake();else{cancelAnimationFrame(frame);frame=0;}},{rootMargin:'120px'});
  observer.observe(host);
  function visibility(){last=0;if(document.hidden){cancelAnimationFrame(frame);frame=0;}else wake();}
  function reduce(){host.classList.toggle('pc-reduce-motion',motion.matches);if(motion.matches){demo=false;value='hello, world';powerTime=2;paint();powerPaint();}wake();}
  field.addEventListener('input',handleInput);field.addEventListener('keydown',keydown);svg.addEventListener('click',click);
  document.addEventListener('visibilitychange',visibility);motion.addEventListener('change',reduce);
  controller.current={toggle(){stopDemo();power(!on);field.focus({preventScroll:true});}};
  host.classList.toggle('pc-reduce-motion',motion.matches);
  value=motion.matches?'hello, world':'';paint();powerPaint();wake();
  return ()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();field.removeEventListener('input',handleInput);field.removeEventListener('keydown',keydown);svg.removeEventListener('click',click);document.removeEventListener('visibilitychange',visibility);motion.removeEventListener('change',reduce);controller.current=null;};
 },[]);
 return <figure className="desk" ref={root}>
  <div className="desk-fit">
   <svg viewBox="40 10 450 420" className="desk-svg" role="img" aria-label="An interactive isometric retro computer with a working keyboard, coiled cable, mouse, and power switch."><Scene id={id}/></svg>
   <input ref={input} className="desk-input" aria-label="Type on the computer. Escape toggles power; Enter clears the screen." maxLength={20} inputMode="text" enterKeyHint="enter" autoComplete="off" autoCapitalize="off" autoCorrect="off" spellCheck={false}/>
   <button className="pc-power-accessible" type="button" aria-label={powered?'Turn computer off':'Turn computer on'} aria-pressed={powered} onClick={()=>controller.current?.toggle()}>Power</button>
  </div>
  <span className="pc-sr" role="status" aria-live="polite">Computer {powered?'on':'off'}.</span>
 </figure>;
}
