/* Builds every section from the files in /data. Edit your content there, not here. */
const $=id=>document.getElementById(id),S=window.SITE;
const img=(src,alt)=>src?`<img class="thumb" src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`:"";
const tags=a=>`<div class="tags">${a.map(k=>`<span class="tag">${k}</span>`).join("")}</div>`;
const more=(u,t)=>u?`<a class="lnk" href="${u}" target="_blank" rel="noopener">${t}</a>`:"";
const ICONS={pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',github:'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'};
const ic=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||""}</svg>`;

/* profile card */
const P=S.profile;
$("avatar").innerHTML=P.photo?`<img src="${P.photo}" alt="${P.name}">`:`<div>${P.name.split(" ").map(w=>w[0]).join("").slice(0,2)}</div>`;
$("name").textContent=P.name;
$("info").innerHTML=`<li>${ic("pin")}${P.location}</li><li>${ic("mail")}<a href="mailto:${P.email}">${P.email}</a></li>`+P.links.map(l=>`<li>${ic(l.icon)}<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a></li>`).join("");
$("cv").href=P.cv;

/* about and skills */
$("bio").innerHTML=S.about.bio.map(t=>`<p>${t}</p>`).join("");
$("skl").innerHTML=S.about.skills.map(g=>`<div class="skgroup"><h4>${g.group}</h4>${tags(g.items)}</div>`).join("");

/* experience and education */
const tl=a=>a.map(e=>`<div class="item"><h3>${e.title}</h3><div class="meta">${e.org} | ${e.date}</div><ul>${e.bullets.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("");
$("exp").innerHTML=tl(S.experience);
$("edu").innerHTML=tl(S.education);

/* publications and achievements (image and link are optional) */
$("pubs").innerHTML=S.publications.map(p=>`<article class="card">${img(p.image,p.title)}<span class="pill">${p.date}</span><h3>${p.title}</h3><p>${p.venue}</p>${more(p.link,"View paper")}</article>`).join("");
$("awds").innerHTML=S.achievements.map(a=>`<article class="card">${img(a.image,a.title)}<span class="pill">${a.date}</span><h3>${a.title}</h3><p>${a.description}</p></article>`).join("");

/* projects with category filter */
const cats=["All",...new Set(S.projects.map(p=>p.category))];
$("filters").innerHTML=cats.map((c,i)=>`<button type="button" data-c="${c}" aria-pressed="${i==0}">${c}</button>`).join("");
function drawProjects(c){$("projs").innerHTML=S.projects.filter(p=>c=="All"||p.category==c).map(p=>`<article class="card">${img(p.image,p.title)}<h3>${p.title}</h3><p>${p.description}</p>${tags(p.tech)}${more(p.link,"View project")}</article>`).join("")}
drawProjects("All");
$("filters").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;[...$("filters").children].forEach(x=>x.setAttribute("aria-pressed",x==b));drawProjects(b.dataset.c)});
$("yr").textContent=new Date().getFullYear();
