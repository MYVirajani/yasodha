/* Light/dark toggle and the particle background. */
/* theme */
const root=document.documentElement,sys=matchMedia("(prefers-color-scheme: dark)");
document.getElementById("theme").addEventListener("click",()=>{const dark=root.dataset.theme?root.dataset.theme=="dark":sys.matches;const n=dark?"light":"dark";root.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}});
/* constellation background: glowing particles drift upward, link up when close, and move away from the pointer */
(function(){
const cv=document.getElementById("bg"),cx=cv.getContext("2d"),still=matchMedia("(prefers-reduced-motion: reduce)").matches;
const dpr=Math.min(devicePixelRatio||1,2),m={x:-999,y:-999},pts=[];let W=0,H=0;
const PAL={dark:["56,189,248","99,102,241","52,211,153"],light:["2,132,199","79,70,229","5,150,105"]};
const dark=()=>root.dataset.theme?root.dataset.theme=="dark":sys.matches;
const spawn=any=>({x:Math.random()*W,y:any?Math.random()*H:H+20,r:2+Math.random()*2.5,vx:(Math.random()-.5)*.4,vy:-(.15+Math.random()*.35),ph:Math.random()*6.28,sp:.005+Math.random()*.015,c:Math.floor(Math.random()*3),a:.45+Math.random()*.35});
function size(){W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
const n=Math.min(Math.round(W*H/16000),70);while(pts.length<n)pts.push(spawn(true));pts.length=n}
function frame(){
const d0=dark(),pal=PAL[d0?"dark":"light"],k=d0?1:.75;
cx.clearRect(0,0,W,H);
for(const p of pts){
p.ph+=p.sp;p.x+=p.vx+Math.sin(p.ph)*.25;p.y+=p.vy;
const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);
if(d<130&&d>0){const f=(130-d)/130*1.5;p.x+=dx/d*f;p.y+=dy/d*f}
if(p.y<-20||p.x<-30||p.x>W+30)Object.assign(p,spawn(false));
}
for(let i=0;i<pts.length;i++){const a=pts[i];
for(let j=i+1;j<pts.length;j++){const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
if(d<140){cx.shadowBlur=0;cx.strokeStyle=`rgba(${pal[0]},${(1-d/140)*.3})`;cx.lineWidth=1.1;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
cx.fillStyle=`rgba(${pal[a.c]},${a.a*k})`;cx.shadowColor=`rgba(${pal[a.c]},.8)`;cx.shadowBlur=a.r*2.5;
cx.beginPath();cx.arc(a.x,a.y,a.r,0,6.283);cx.fill()}
cx.shadowBlur=0;
if(!still)requestAnimationFrame(frame)}
addEventListener("pointermove",e=>{m.x=e.clientX;m.y=e.clientY});
addEventListener("resize",()=>{size();if(still)frame()});
document.getElementById("theme").addEventListener("click",()=>{if(still)frame()});
size();frame();
})();
