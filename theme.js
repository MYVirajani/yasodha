/* EDIT HERE: all text on the page comes from this object. */
const DATA={
email:"yasodhavirajani@gmail.com",
photo:"profile.png",cv:"#",loc:"Galle, Sri Lanka",
links:[["GitHub","https://github.com/MYVirajani","github"],["LinkedIn","https://www.linkedin.com/in/yasodha-virajani-19217b287/","linkedin"]],
bio:["Computer Engineering graduate with a strong foundation in AI-based application development. I have built predictive models and added intelligent features to software, with hands-on work in LLMs, RAG pipelines and computer vision. I enjoy using AI to solve real-world problems and keep learning the latest techniques."],
skills:[["Programming languages",["Python","C","C++","JavaScript","Dart"]],
["AI and ML",["CNN","RNN","Transformers","RAG","Fine-tuning","Prompt engineering"]],
["Frameworks and libraries",["TensorFlow","Scikit-learn","Hugging Face","LLaMA Factory","OpenCV","LangChain","FastAPI","Flask","Pandas","NumPy","Matplotlib","Seaborn","Streamlit"]],
["Web and mobile",["React.js","Next.js","Node.js","Express.js","REST APIs","Flutter"]],
["Databases",["MySQL","MongoDB","PostgreSQL","Firebase"]],
["DevOps and tools",["Docker","Git","GitHub","Jupyter","Google Colab","n8n","Figma","Jira"]]],
exp:[{t:"AI Intern",o:"Decode Labs",d:"Jun 2026 to Jul 2026",b:["Completed a structured series of AI/ML projects spanning NLP, deep learning and computer vision."]},
{t:"Mobile Application Development Intern",o:"APIS Technologies",d:"Jul 2024 to Jan 2025",b:["Designed and implemented UI/UX for mobile applications, improving the user experience.","Developed and maintained Flutter apps with clean, efficient and reusable code.","Applied software engineering principles while working with teams on functionality, usability and design."]}],
edu:[{t:"B.Sc. (Hons.) in Engineering, Computer Engineering",o:"Department of Electrical and Information Engineering, University of Ruhuna",d:"2021 to 2026 | GPA 3.41 / 4.00, Second Class Upper Division",b:["Core focus: Artificial Intelligence, Machine Learning and Software Engineering.","The full degree program was taught and assessed in English medium."]},
{t:"G.C.E. Advanced Level Examination",o:"G/Ananda Central College, Elpitiya",d:"2017 to 2019",b:["Combined Mathematics, Chemistry and Physics, results AAB."]}],
pubs:[{t:"Intelligent Exam Evaluation System with AI-Based Analytics",v:"International Research Conference on Emerging Concepts and Research in Integrated Sustainable Adaptation (ECRISA)",d:"Jan 2026"},
{t:"Automated Grading of Diagram and Graph-Based Answers Using Vision-Based Large Language Models",v:"Artificial Intelligence in Multidisciplinary Applications (AIMDA) Conference",d:"Feb 2026"},
{t:"A Multimodal AI Framework for Automated Grading of Digital and Text-Based Handwritten Exams",v:"Vice Chancellor's Awards and Academic Sessions, University of Ruhuna",d:"Mar 2026"}],
projs:[
{t:"Intelligent Exam Evaluation System",c:"LLM and RAG",p:"Final year project. Researched and built the RAG pipeline and fine-tuned model integration that grades handwritten and digital exam scripts, including the frontend.",k:["Python","PostgreSQL","Prompt engineering","LLMs","RAG","TrOCR"]},
{t:"Smart Researcher",c:"Agentic AI",p:"A full-stack agentic system that plans, searches the web, reads sources and writes cited research reports, with real-time streaming to the frontend.",k:["Next.js","TypeScript","FastAPI","Python","LangGraph"]},
{t:"Handwritten Text Recognition System",c:"Computer vision",p:"Model pipeline and frontend for a web app that turns handwritten images and PDFs into digital text.",k:["Python","OpenCV","TrOCR","Image processing","React.js"]},
{t:"Object Detection App",c:"Computer vision",p:"Full-stack mobile app for object detection with camera or gallery selection and Flutter result visualization.",k:["YOLOv8","FastAPI","OpenCV","Flutter","BLoC"]},
{t:"Background Music Generator",c:"Deep learning",p:"An LSTM trained on classical piano MIDI data generates note sequences, converted to playable audio in a Streamlit app.",k:["TensorFlow","Keras","LSTM","music21","FluidSynth","Streamlit"]},
{t:"Brain Tumor Detection",c:"Deep learning",p:"A CNN that classifies brain MRI images.",k:["Python","TensorFlow","Keras","CNN","Pandas","Seaborn"]},
{t:"Household Energy Consumption Prediction",c:"Machine learning",p:"Predicts household energy use with Linear Regression and KNN models.",k:["Scikit-learn","Pandas","NumPy","Seaborn"]},
{t:"Online Local Crop Marketplace and Delivery System",c:"Web",p:"Led as project manager and frontend developer on a web platform connecting farmers, sellers and deliverymen.",k:["MongoDB","Express","React.js","Node.js"]}],
awds:[{t:"IEEE Sri Lanka Section FYP Arena 2025, Finalist",y:"Dec 2025",d:"Our final year project, Intelligent Exam Evaluation System with AI-Powered Analytics, competed in the Information Technology and Computer Science Track. The event was held on 14 December 2025 with the Faculty of Engineering, University of Ruhuna, alongside its Silver Jubilee Exhibition (REXTRO)."},
{t:"HaXtreme 2.0 Inter-University Coding Competition, 12th place",y:"Oct 2023",d:"Competed as part of Team Algosprint in the contest organized by the Computer Society and ComSoc of the IEEE Student Branch, University of Ruhuna, on 25 October 2023."}]};

const $=id=>document.getElementById(id),el=(h)=>{const d=document.createElement("div");d.innerHTML=h.trim();return d.firstChild};
$("bio").innerHTML=DATA.bio.map(t=>`<p>${t}</p>`).join("");
const I={pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',github:'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'};
const ic=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${I[n]}</svg>`;
$("avatar").innerHTML=DATA.photo?`<img src="${DATA.photo}" alt="Yasodha Virajani">`:"<div>YV</div>";
$("info").innerHTML=`<li>${ic("pin")}${DATA.loc}</li><li>${ic("mail")}<a href="mailto:${DATA.email}">${DATA.email}</a></li>`+DATA.links.map(l=>`<li>${ic(l[2])}<a href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a></li>`).join("");
$("cv").href=DATA.cv;
const tl=a=>a.map(e=>`<div class="item"><h3>${e.t}</h3><div class="meta">${e.o} | ${e.d}</div><ul>${e.b.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("");
$("exp").innerHTML=tl(DATA.exp);$("edu").innerHTML=tl(DATA.edu);
$("pubs").innerHTML=DATA.pubs.map(p=>`<article class="card"><span class="pill">${p.d}</span><h3>${p.t}</h3><p>${p.v}</p></article>`).join("");
$("skl").innerHTML=DATA.skills.map(s=>`<div class="skgroup"><h4>${s[0]}</h4><div class="tags">${s[1].map(k=>`<span class="tag">${k}</span>`).join("")}</div></div>`).join("");
$("awds").innerHTML=DATA.awds.map(a=>`<article class="card"><span class="pill">${a.y}</span><h3>${a.t}</h3><p>${a.d}</p></article>`).join("");
const cats=["All",...new Set(DATA.projs.map(p=>p.c))];
$("filters").innerHTML=cats.map((c,i)=>`<button type="button" data-c="${c}" aria-pressed="${i==0}">${c}</button>`).join("");
function drawProjs(c){$("projs").innerHTML=DATA.projs.filter(p=>c=="All"||p.c==c).map(p=>`<article class="card"><h3>${p.t}</h3><p>${p.p}</p><div class="tags">${p.k.map(k=>`<span class="tag">${k}</span>`).join("")}</div>${p.u?`<a class="lnk" href="${p.u}">View on GitHub</a>`:""}</article>`).join("")}
drawProjs("All");
$("filters").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
[...$("filters").children].forEach(x=>x.setAttribute("aria-pressed",x==b));drawProjs(b.dataset.c)});
$("yr").textContent=new Date().getFullYear();


/* theme */
const root=document.documentElement,sys=matchMedia("(prefers-color-scheme: dark)");
$("theme").addEventListener("click",()=>{const dark=root.dataset.theme?root.dataset.theme=="dark":sys.matches;const n=dark?"light":"dark";root.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}});
/* constellation background: glowing particles drift upward, link up when close, and move away from the pointer */
(function(){
const cv=$("bg"),cx=cv.getContext("2d"),still=matchMedia("(prefers-reduced-motion: reduce)").matches;
const dpr=Math.min(devicePixelRatio||1,2),m={x:-999,y:-999},pts=[];let W=0,H=0;
const PAL={dark:["56,189,248","157,140,255","255,143,163"],light:["2,132,199","91,70,224","216,69,106"]};
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
$("theme").addEventListener("click",()=>{if(still)frame()});
size();frame();
})();