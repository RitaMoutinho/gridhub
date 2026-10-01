const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const storeKey='gridhub-v2';
const races=[
 {id:'melbourne',name:'Melbourne',round:'03/23',circuit:'Albert Park Circuit',dates:'14–16 de março',days:['SEX • 14 MAR','SÁB • 15 MAR','DOM • 16 MAR']},
 {id:'xangai',name:'Xangai',round:'04/23',circuit:'Shanghai International Circuit',dates:'21–23 de março',days:['SEX • 21 MAR','SÁB • 22 MAR','DOM • 23 MAR']},
 {id:'miami',name:'Miami',round:'05/23',circuit:'Miami International Autodrome',dates:'04–06 de abril',days:['SEX • 04 ABR','SÁB • 05 ABR','DOM • 06 ABR']}
];
const seed={
 currentRace:'melbourne',
 tasks:[
  {id:1,race:'melbourne',title:'Publicar bastidores do FP1',day:'Sexta',owner:'Maria',category:'Conteúdo',time:'11:40',done:true},
  {id:2,race:'melbourne',title:'Aprovação do Reels com PULSE',day:'Sexta',owner:'Bia',category:'Patrocínio',time:'13:00',done:true},
  {id:3,race:'melbourne',title:'Briefing de imprensa com a pilota',day:'Sexta',owner:'Caio',category:'Imprensa',time:'14:30',done:false},
  {id:4,race:'melbourne',title:'Carrossel técnico pós-FP2',day:'Sexta',owner:'Maria',category:'Conteúdo',time:'17:20',done:false},
  {id:5,race:'melbourne',title:'Entrega NEXA: logo + menção',day:'Sábado',owner:'Bia',category:'Patrocínio',time:'10:00',done:false},
  {id:6,race:'melbourne',title:'Reels reação pós-classificação',day:'Sábado',owner:'Maria',category:'Conteúdo',time:'17:10',done:false},
  {id:7,race:'melbourne',title:'Meet & greet Fan Zone',day:'Domingo',owner:'Lucas',category:'Evento',time:'09:30',done:false},
  {id:8,race:'melbourne',title:'Post de grid + partners',day:'Domingo',owner:'Maria',category:'Patrocínio',time:'11:00',done:false},
  {id:9,race:'melbourne',title:'Conteúdo de chegada ao circuito',day:'Sexta',owner:'Lucas',category:'Conteúdo',time:'08:00',done:true},
  {id:10,race:'melbourne',title:'Fotos oficiais dos parceiros',day:'Sexta',owner:'Bia',category:'Patrocínio',time:'09:20',done:true},
  {id:11,race:'melbourne',title:'Resumo do media day',day:'Sexta',owner:'Caio',category:'Imprensa',time:'18:20',done:true},
  {id:12,race:'melbourne',title:'Stories de aquecimento',day:'Sábado',owner:'Maria',category:'Conteúdo',time:'08:45',done:true},
  {id:13,race:'melbourne',title:'Entrega HELIX no box',day:'Sábado',owner:'Bia',category:'Patrocínio',time:'12:30',done:true},
  {id:14,race:'melbourne',title:'Clipping pós-quali',day:'Sábado',owner:'Caio',category:'Imprensa',time:'19:00',done:true},
  {id:15,race:'melbourne',title:'Briefing domingo',day:'Domingo',owner:'Maria',category:'Conteúdo',time:'07:45',done:true},
  {id:16,race:'melbourne',title:'Vídeo de preparação do carro',day:'Domingo',owner:'Lucas',category:'Conteúdo',time:'09:00',done:true},
  {id:17,race:'melbourne',title:'Foto VIP ORION',day:'Domingo',owner:'Bia',category:'Evento',time:'10:20',done:true},
  {id:18,race:'melbourne',title:'Post resultado da corrida',day:'Domingo',owner:'Maria',category:'Conteúdo',time:'16:30',done:false},
  {id:19,race:'xangai',title:'Checklist de embarque de equipamento',day:'Sexta',owner:'Lucas',category:'Evento',time:'07:30',done:true},
  {id:20,race:'xangai',title:'Teaser de chegada à Ásia',day:'Sexta',owner:'Maria',category:'Conteúdo',time:'10:15',done:true},
  {id:21,race:'xangai',title:'Reunião de alinhamento com ORION',day:'Sexta',owner:'Bia',category:'Patrocínio',time:'15:00',done:false},
  {id:22,race:'xangai',title:'Entrevista coletiva pós-FP2',day:'Sábado',owner:'Caio',category:'Imprensa',time:'16:40',done:false},
  {id:23,race:'xangai',title:'Reels de qualifying',day:'Sábado',owner:'Maria',category:'Conteúdo',time:'18:00',done:false},
  {id:24,race:'xangai',title:'Post de resultado + patrocinadores',day:'Domingo',owner:'Maria',category:'Patrocínio',time:'12:30',done:false},
  {id:25,race:'miami',title:'Planejamento de ativação de marca',day:'Sexta',owner:'Bia',category:'Patrocínio',time:'09:00',done:false},
  {id:26,race:'miami',title:'Cobertura de chegada ao autódromo',day:'Sexta',owner:'Lucas',category:'Conteúdo',time:'11:30',done:false},
  {id:27,race:'miami',title:'Briefing com imprensa local',day:'Sábado',owner:'Caio',category:'Imprensa',time:'13:15',done:false},
  {id:28,race:'miami',title:'Live de bastidores no treino',day:'Sábado',owner:'Maria',category:'Conteúdo',time:'15:45',done:false},
  {id:29,race:'miami',title:'Meet & greet com fãs',day:'Domingo',owner:'Lucas',category:'Evento',time:'10:00',done:false},
  {id:30,race:'miami',title:'Recap da corrida para patrocinadores',day:'Domingo',owner:'Bia',category:'Patrocínio',time:'17:30',done:false}
 ],
 sponsors:[
  {id:1,name:'PULSE',tier:'Principal',value:380000,done:10,total:12,color:'pulse'},
  {id:2,name:'NEXA',tier:'Oficial',value:290000,done:8,total:9,color:'nexa'},
  {id:3,name:'ORION',tier:'Parceiro técnico',value:220000,done:7,total:9,color:'orion'},
  {id:4,name:'HELIX',tier:'Oficial',value:190000,done:7,total:8,color:'helix'}
 ],
 content:[
  {id:1,race:'melbourne',title:'Chegada ao paddock',channel:'Instagram',time:'08:05',status:'Aprovado',day:0},
  {id:2,race:'melbourne',title:'Bastidores do FP1',channel:'TikTok',time:'11:40',status:'Aprovado',day:0},
  {id:3,race:'melbourne',title:'Entrevista técnica pós-FP2',channel:'YouTube',time:'17:30',status:'Em produção',day:0},
  {id:4,race:'melbourne',title:'Release: resumo da sexta',channel:'Imprensa',time:'18:15',status:'Aguardando aprovação',day:0},
  {id:5,race:'melbourne',title:'Stories antes do quali',channel:'Instagram',time:'09:10',status:'Planejado',day:1},
  {id:6,race:'melbourne',title:'Reação da pilota pós-quali',channel:'TikTok',time:'17:10',status:'Planejado',day:1},
  {id:7,race:'melbourne',title:'Grid reveal + parceiros',channel:'Instagram',time:'11:00',status:'Planejado',day:2},
  {id:8,race:'melbourne',title:'Race recap',channel:'YouTube',time:'18:30',status:'Planejado',day:2},
  {id:9,race:'xangai',title:'Teaser de chegada à Ásia',channel:'Instagram',time:'09:00',status:'Aprovado',day:0},
  {id:10,race:'xangai',title:'Bastidores do FP1 em Xangai',channel:'TikTok',time:'12:10',status:'Em produção',day:0},
  {id:11,race:'xangai',title:'Reels de qualifying',channel:'TikTok',time:'18:00',status:'Planejado',day:1},
  {id:12,race:'xangai',title:'Post de resultado',channel:'Instagram',time:'13:00',status:'Planejado',day:2},
  {id:13,race:'miami',title:'Cobertura de chegada',channel:'Instagram',time:'11:30',status:'Planejado',day:0},
  {id:14,race:'miami',title:'Live de bastidores',channel:'YouTube',time:'15:45',status:'Planejado',day:1},
  {id:15,race:'miami',title:'Recap da corrida',channel:'Instagram',time:'17:30',status:'Planejado',day:2}
 ],
 assets:[
  {id:1,name:'melbourne_fp1_hero.jpg',type:'Foto',tag:'Melbourne'},
  {id:2,name:'garage_broll_04.mp4',type:'Vídeo',tag:'Bastidores'},
  {id:3,name:'volt_racing_logo.svg',type:'Logo',tag:'Brand'},
  {id:4,name:'pulse_guidelines.pdf',type:'Documento',tag:'Sponsor'},
  {id:5,name:'driver_portrait_02.jpg',type:'Foto',tag:'Pilota'},
  {id:6,name:'qualifying_reaction.mp4',type:'Vídeo',tag:'Social'},
  {id:7,name:'nexa_logo_white.svg',type:'Logo',tag:'Sponsor'},
  {id:8,name:'press_release_template.docx',type:'Documento',tag:'Imprensa'}
 ]
};
let state=loadState();
let plannerDay=0;
let plannerFilter='all';
let assetFilter='all';
let activeView='dashboard';
let pendingThumb=null;

function loadState(){try{const raw=localStorage.getItem(storeKey);const parsed=raw?JSON.parse(raw):null;return parsed&&parsed.currentRace?parsed:structuredClone(seed)}catch{return structuredClone(seed)}}
function saveState(){localStorage.setItem(storeKey,JSON.stringify(state))}
function money(n){return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(n)}
function slug(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,'-')}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),1800)}
function currentRace(){return races.find(r=>r.id===state.currentRace)||races[0]}

const demoGate=$('#demoGate');
$('#enterDemo').addEventListener('click',()=>demoGate.classList.add('hide'));

function initRaceControls(){
 const options=races.map(r=>`<option value="${r.id}">${r.name}</option>`).join('');
 $('#raceSwitcher').innerHTML=options;$('#raceSwitcher').value=state.currentRace;
 $('#taskRaceField').innerHTML=options;
 $('#raceSwitcher').addEventListener('change',e=>setRace(e.target.value));
}
function setRace(id){state.currentRace=id;plannerDay=0;saveState();updateRaceUI()}
function updateRaceUI(){
 const r=currentRace();
 $('#homeRaceName').textContent=r.name;
 $('#heroRound').textContent=`RACE WEEK ${r.round.split('/')[0]}`;
 $('#heroRaceName').textContent=r.name;
 $('#heroCircuit').textContent=`${r.circuit} \u2022 ${r.dates}`;
 $('#heroRaceNumber').textContent=r.round.split('/')[0];
 $('#weekendEyebrow').textContent=`GP DE ${r.name.toUpperCase()}`;
 $('#weekendDateTag').textContent=r.days[0];
 $('#raceSwitcher').value=r.id;
 $('#reportFeatureTitle').textContent=`Relatório de marketing do GP de ${r.name}`;
 $('#reportFeatureRound').textContent=`RACE WEEK ${r.round.split('/')[0]}`;
 renderTasks();renderPlanner();
}
function openTaskModal(){$('#taskRaceField').value=state.currentRace;openModal('#taskModal')}
function showView(name){activeView=name;$$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));$$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===name));$('#sidebar').classList.remove('open');$('#scrim').classList.remove('show');window.scrollTo({top:0,behavior:'smooth'});if(name==='analytics')requestAnimationFrame(renderCharts)}
$$('[data-view]').forEach(el=>el.addEventListener('click',()=>showView(el.dataset.view)));

function openSidebar(){if(innerWidth>920)return;$('#sidebar').classList.add('open');$('#scrim').classList.add('show')}
$('#mobileMenu').addEventListener('click',openSidebar);
$('#scrim').addEventListener('click',()=>{$('#sidebar').classList.remove('open');$('#notificationPanel').classList.remove('open');$('#scrim').classList.remove('show')});

function openNotifications(){const p=$('#notificationPanel');p.classList.add('open');$('#scrim').classList.add('show');p.setAttribute('aria-hidden','false')}
function closeNotifications(){const p=$('#notificationPanel');p.classList.remove('open');$('#scrim').classList.remove('show');p.setAttribute('aria-hidden','true')}
$('#notifBtn').addEventListener('click',openNotifications);$('#closeNotifications').addEventListener('click',closeNotifications);

function openModal(id){const m=$(id);m.classList.add('open');m.setAttribute('aria-hidden','false')}
function closeModals(){$$('.modal').forEach(m=>{m.classList.remove('open');m.setAttribute('aria-hidden','true')})}
$$('[data-close-modal]').forEach(b=>b.addEventListener('click',closeModals));$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModals()}));
$('#quickCreate').addEventListener('click',openTaskModal);$('#dashboardTaskBtn').addEventListener('click',openTaskModal);$('#addTaskBtn').addEventListener('click',openTaskModal);$('#addSponsorBtn').addEventListener('click',()=>openModal('#sponsorModal'));$('#addContentBtn').addEventListener('click',()=>openModal('#contentModal'));$('#uploadAssetBtn').addEventListener('click',()=>openModal('#assetModal'));

function taskClass(c){return c==='Conteúdo'?'content':c==='Patrocínio'?'sponsor':c==='Imprensa'?'press':'event'}
function renderTasks(){
 const raceTasks=state.tasks.filter(t=>t.race===state.currentRace);
 const upcoming=raceTasks.filter(t=>!t.done).slice(0,5);$('#dashboardTaskList').innerHTML=upcoming.map(t=>`<div class="task-row"><button class="task-check" data-complete-task="${t.id}" aria-label="Concluir tarefa"></button><div><strong>${t.title}</strong><small>${t.day} • ${t.owner}</small></div><span class="pill ${taskClass(t.category)}">${t.category}</span><span class="time">${t.time}</span></div>`).join('')||'<p class="empty">Tudo em dia nesta etapa.</p>';
 const days=['Sexta','Sábado','Domingo'];$('#weekendBoard').innerHTML=days.map(day=>{const items=raceTasks.filter(t=>t.day===day);return `<section class="kanban-col"><div class="kanban-head"><strong>${day.toUpperCase()}</strong><span>${items.length}</span></div><div class="kanban-list">${items.map(t=>`<article class="kanban-card ${t.done?'done':''}"><div class="top"><span class="pill ${taskClass(t.category)}">${t.category}</span><small>${t.time}</small></div><strong>${t.title}</strong><div class="kanban-meta"><div class="owner"><span class="owner-avatar">${t.owner.slice(0,2).toUpperCase()}</span>${t.owner}</div><button class="complete-task ${t.done?'done':''}" data-complete-task="${t.id}" aria-label="${t.done?'Reabrir':'Concluir'}"><svg><use href="#i-check"/></svg></button></div></article>`).join('')}</div></section>`}).join('');
 const done=raceTasks.filter(t=>t.done).length,total=raceTasks.length||1,pct=Math.round(done/total*100);$('#heroTasksDone').textContent=done;$('#heroTasksTotal').textContent=raceTasks.length;$('#heroProgress').style.width=`${pct}%`;$('#weekendPct').textContent=`${pct}%`;$('#weekendRing').style.background=`conic-gradient(var(--blue) 0 ${pct}%,#e7edf5 ${pct}% 100%)`;$('#weekendBadge').textContent=raceTasks.filter(t=>!t.done).length;
 $$('[data-complete-task]').forEach(btn=>btn.addEventListener('click',()=>{const t=state.tasks.find(x=>x.id===+btn.dataset.completeTask);t.done=!t.done;saveState();renderTasks();toast(t.done?'Tarefa concluída.':'Tarefa reaberta.')}));
}

function renderSponsors(){
 $('#sponsorGrid').innerHTML=state.sponsors.map(s=>{const pct=Math.round(s.done/s.total*100);return `<article class="sponsor-card"><div class="sponsor-top"><div class="sponsor-brand"><div class="logo-box logo-${s.color}">${s.name.slice(0,2)}</div><div><h3>${s.name}</h3><p>${s.tier}</p></div></div><span class="status-badge">ATIVO</span></div><div class="sponsor-value"><div><small>CONTRATO</small><strong>${money(s.value)}</strong></div><div><small>ENTREGAS</small><strong>${s.done}/${s.total}</strong></div><div><small>PROGRESSO</small><strong>${pct}%</strong></div></div><div class="delivery-head"><span>Execução contratual</span><b>${pct}%</b></div><div class="delivery-bar"><i style="width:${pct}%"></i></div></article>`}).join('');
 $('#sponsorMiniList').innerHTML=state.sponsors.map(s=>{const pct=Math.round(s.done/s.total*100);return `<div class="sponsor-mini"><div class="logo-box logo-${s.color}">${s.name.slice(0,2)}</div><div><strong>${s.name}</strong><small>${s.done} de ${s.total} entregas</small></div><b>${pct}%</b><div class="mini-progress"><i style="width:${pct}%"></i></div></div>`}).join('');
 const done=state.sponsors.reduce((a,s)=>a+s.done,0),total=state.sponsors.reduce((a,s)=>a+s.total,0),pct=Math.round(done/total*100);$('#deliveryPercent').textContent=`${pct}%`;$('#deliveryLabel').textContent=`${done} de ${total}`;$('#sponsorDeliveryKpi').textContent=`${pct}%`;$('#profileSponsors').textContent=state.sponsors.length;
}

function renderPlanner(){
 $('#plannerDate').textContent=currentRace().days[plannerDay].replace(' • ',', ');
 let items=state.content.filter(c=>c.race===state.currentRace&&c.day===plannerDay&&(plannerFilter==='all'||c.channel===plannerFilter));
 $('#plannerList').innerHTML=items.map(c=>`<article class="planner-item"><div class="planner-time">${c.time}</div><div class="channel-line ${c.channel.toLowerCase()}"></div><div class="planner-content"><strong>${c.title}</strong><small>${c.channel}</small></div><span class="planner-status ${slug(c.status)}">${c.status}</span></article>`).join('')||'<div class="panel">Nenhum conteúdo neste filtro.</div>';
}
$('#prevDay').addEventListener('click',()=>{plannerDay=Math.max(0,plannerDay-1);renderPlanner()});$('#nextDay').addEventListener('click',()=>{plannerDay=Math.min(2,plannerDay+1);renderPlanner()});$$('#plannerFilters button').forEach(b=>b.addEventListener('click',()=>{plannerFilter=b.dataset.filter;$$('#plannerFilters button').forEach(x=>x.classList.toggle('active',x===b));renderPlanner()}));

function renderAssets(){
 const q=$('#assetSearch').value.trim().toLowerCase();let items=state.assets.filter(a=>(assetFilter==='all'||a.type===assetFilter)&&(!q||`${a.name} ${a.tag}`.toLowerCase().includes(q)));
 $('#assetGrid').innerHTML=items.map(a=>{
  const previewClass=a.type==='Vídeo'?'video':a.type==='Logo'?'logo':a.type==='Documento'?'doc':'';
  const style=a.thumb?` style="background-image:url('${a.thumb}');background-size:cover;background-position:center"`:'';
  const label=a.thumb?'':(a.type==='Logo'?a.name.slice(0,2).toUpperCase():a.type==='Documento'?'DOC':'');
  return `<article class="asset-card"><div class="asset-preview ${previewClass}"${style}>${label}</div><div class="asset-info"><strong title="${a.name}">${a.name}</strong><small>${a.type}</small><div class="asset-tags"><span>${a.tag||'Geral'}</span><span>Volt Racing</span></div></div></article>`;
 }).join('')||'<div class="panel">Nenhum ativo encontrado.</div>';
}
$('#assetSearch').addEventListener('input',renderAssets);$$('#assetFilters button').forEach(b=>b.addEventListener('click',()=>{assetFilter=b.dataset.filter;$$('#assetFilters button').forEach(x=>x.classList.toggle('active',x===b));renderAssets()}));

function inferAssetType(file){
 const ext=(file.name.split('.').pop()||'').toLowerCase();
 if(file.type.startsWith('image/'))return ext==='svg'?'Logo':'Foto';
 if(file.type.startsWith('video/'))return 'Vídeo';
 return 'Documento';
}
function makeThumb(file){
 return new Promise(resolve=>{
  if(!file.type.startsWith('image/')){resolve(null);return}
  const reader=new FileReader();
  reader.onload=()=>{
   const img=new Image();
   img.onload=()=>{
    const scale=Math.min(1,320/img.width);
    const c=document.createElement('canvas');c.width=img.width*scale;c.height=img.height*scale;
    c.getContext('2d').drawImage(img,0,0,c.width,c.height);
    resolve(c.toDataURL('image/jpeg',.75));
   };
   img.onerror=()=>resolve(null);
   img.src=reader.result;
  };
  reader.onerror=()=>resolve(null);
  reader.readAsDataURL(file);
 });
}
$('#assetFile').addEventListener('change',async e=>{
 const file=e.target.files[0];if(!file)return;
 $('#assetNameField').value=file.name;
 $('#assetTypeField').value=inferAssetType(file);
 $('#fileDropLabel').textContent=file.name;
 pendingThumb=await makeThumb(file);
});

function drawLineChart(canvas,values,labels,{percent=false}={}){const ctx=canvas.getContext('2d'),dpr=window.devicePixelRatio||1;const rect=canvas.getBoundingClientRect();canvas.width=Math.max(600,rect.width*dpr);canvas.height=Math.max(250,rect.height*dpr);ctx.scale(dpr,dpr);const w=canvas.width/dpr,h=canvas.height/dpr,p={l:44,r:18,t:20,b:34};ctx.clearRect(0,0,w,h);ctx.font='12px DM Sans';ctx.fillStyle='#98a2b3';ctx.strokeStyle='#e7edf4';ctx.lineWidth=1;const max=Math.max(...values)*1.18,min=Math.min(...values)*.82;for(let i=0;i<5;i++){const y=p.t+(h-p.t-p.b)*i/4;ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();const val=max-(max-min)*i/4;ctx.fillText(percent?`${val.toFixed(1)}%`:`${Math.round(val/1000)}K`,4,y+4)}const pts=values.map((v,i)=>({x:p.l+(w-p.l-p.r)*i/(values.length-1),y:p.t+(h-p.t-p.b)*(1-(v-min)/(max-min||1))}));const grad=ctx.createLinearGradient(0,p.t,0,h);grad.addColorStop(0,'rgba(47,103,255,.22)');grad.addColorStop(1,'rgba(47,103,255,0)');ctx.beginPath();ctx.moveTo(pts[0].x,h-p.b);pts.forEach(pt=>ctx.lineTo(pt.x,pt.y));ctx.lineTo(pts[pts.length-1].x,h-p.b);ctx.closePath();ctx.fillStyle=grad;ctx.fill();ctx.beginPath();pts.forEach((pt,i)=>i?ctx.lineTo(pt.x,pt.y):ctx.moveTo(pt.x,pt.y));ctx.strokeStyle='#2f67ff';ctx.lineWidth=3;ctx.stroke();pts.forEach((pt,i)=>{ctx.beginPath();ctx.arc(pt.x,pt.y,4,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=3;ctx.strokeStyle='#2f67ff';ctx.stroke();ctx.fillStyle='#667085';ctx.textAlign='center';ctx.fillText(labels[i],pt.x,h-10)});ctx.textAlign='start';canvas._chartPoints=pts.map((pt,i)=>({x:pt.x,y:pt.y,value:values[i],label:labels[i]}));canvas._percent=percent}
const chartData={reach:[410000,690000,980000,1320000,1840000,2360000,2840000],engagement:[5.8,6.3,6.8,7.1,7.4,8.1,8.7],followers:[3200,4100,5200,6400,7100,8300,9600]}, chartLabels=['R1','R2','R3','R4','R5','R6','R7'];
function renderCharts(){const d=$('#metricSelect').value;drawLineChart($('#performanceChart'),chartData[d],chartLabels,{percent:d==='engagement'});const a=$('#analyticsMetric').value;drawLineChart($('#analyticsChart'),chartData[a],chartLabels,{percent:a==='engagement'})}

function formatChartValue(v,percent){return percent?`${v.toFixed(1)}%`:new Intl.NumberFormat('pt-BR').format(Math.round(v))}
function attachChartTooltip(canvas){
 const tip=$('#chartTooltip');
 canvas.addEventListener('mousemove',e=>{
  const pts=canvas._chartPoints;if(!pts||!pts.length)return;
  const rect=canvas.getBoundingClientRect();const x=e.clientX-rect.left;
  let nearest=pts[0],dist=Infinity;
  pts.forEach(p=>{const d=Math.abs(p.x-x);if(d<dist){dist=d;nearest=p}});
  tip.innerHTML=`<strong>${formatChartValue(nearest.value,canvas._percent)}</strong><span>${nearest.label}</span>`;
  const left=Math.min(e.clientX+14,window.innerWidth-150);
  tip.style.left=`${left}px`;tip.style.top=`${e.clientY-14}px`;
  tip.classList.add('show');
 });
 canvas.addEventListener('mouseleave',()=>tip.classList.remove('show'));
}
attachChartTooltip($('#performanceChart'));attachChartTooltip($('#analyticsChart'));
$('#metricSelect').addEventListener('change',renderCharts);$('#analyticsMetric').addEventListener('change',renderCharts);window.addEventListener('resize',()=>{clearTimeout(renderCharts.t);renderCharts.t=setTimeout(renderCharts,120)});

function renderReports(){const rows=[['Relatório de marketing do GP de Jeddah','11 mar 2026','12 páginas'],['Entregas de patrocínio do GP do Bahrain','04 mar 2026','8 páginas'],['Resumo mensal de fevereiro','28 fev 2026','15 páginas']];$('#reportList').innerHTML=rows.map(r=>`<article class="report-row"><div class="report-icon"><svg><use href="#i-report"/></svg></div><div><strong>${r[0]}</strong><small>${r[1]} • ${r[2]}</small></div><button class="secondary-btn report-open">Abrir</button></article>`).join('');$$('.report-open').forEach(b=>b.addEventListener('click',generateReport))}
function generateReport(){const r=currentRace(),reach='2,84M',eng='8,7%',done=state.tasks.filter(t=>t.race===state.currentRace&&t.done).length,total=state.tasks.filter(t=>t.race===state.currentRace).length;$('#reportModalTitle').textContent=`Relatório de marketing do GP de ${r.name}`;$('#reportOutput').innerHTML=`<div class="report-stat"><small>ALCANCE TOTAL</small><strong>${reach}</strong></div><div class="report-stat"><small>ENGAJAMENTO</small><strong>${eng}</strong></div><div class="report-stat"><small>ENTREGAS DA ETAPA</small><strong>${done}/${total}</strong></div><div class="report-stat"><small>PATROCINADORES</small><strong>${state.sponsors.length} ativos</strong></div><div class="report-summary"><strong>Resumo executivo</strong><br>A etapa apresentou crescimento de alcance, boa resposta a conteúdos de bastidores e avanço consistente nas entregas comerciais. Prioridades: concluir as ativações NEXA, reforçar o conteúdo pós-classificação e consolidar o report de exposição das marcas.</div>`;openModal('#reportModal')}
$('#generateReportBtn').addEventListener('click',generateReport);$('#openLatestReport').addEventListener('click',generateReport);
$('#downloadReport').addEventListener('click',()=>{const r=currentRace();const text=`GRIDHUB\nRelatório de marketing do GP de ${r.name}\n\nAlcance: 2,84M\nEngajamento: 8,7%\nEntregas concluídas: ${state.tasks.filter(t=>t.race===state.currentRace&&t.done).length}/${state.tasks.filter(t=>t.race===state.currentRace).length}\nPatrocinadores ativos: ${state.sponsors.length}\n\nResumo: crescimento de alcance, bom desempenho de bastidores e prioridade para entregas comerciais pendentes.`;const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`marketing-report-${r.id}.txt`;a.click();URL.revokeObjectURL(a.href);toast('Resumo baixado.')});
$('#exportAnalytics').addEventListener('click',()=>{const rows=['Etapa,Alcance,Engajamento,Novos seguidores',...chartLabels.map((l,i)=>`${l},${chartData.reach[i]},${chartData.engagement[i]},${chartData.followers[i]}`)];const blob=new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='analytics-temporada.csv';a.click();URL.revokeObjectURL(a.href);toast('Analytics exportado em CSV.')});

$('#taskForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);state.tasks.push({id:Date.now(),race:fd.get('race')||state.currentRace,title:fd.get('title'),day:fd.get('day'),owner:fd.get('owner'),category:fd.get('category'),time:fd.get('time'),done:false});saveState();renderTasks();e.currentTarget.reset();closeModals();toast('Tarefa adicionada.')});
$('#sponsorForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget),colors=['pulse','nexa','orion','helix'];state.sponsors.push({id:Date.now(),name:fd.get('name').toUpperCase(),tier:fd.get('tier'),value:+fd.get('value'),done:0,total:+fd.get('deliveries'),color:colors[state.sponsors.length%colors.length]});saveState();renderSponsors();e.currentTarget.reset();closeModals();toast('Patrocinador cadastrado.')});
$('#contentForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);state.content.push({id:Date.now(),race:state.currentRace,title:fd.get('title'),channel:fd.get('channel'),time:fd.get('time'),status:fd.get('status'),day:plannerDay});saveState();renderPlanner();e.currentTarget.reset();closeModals();toast('Conteúdo adicionado ao planner.')});
$('#assetForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);state.assets.push({id:Date.now(),name:fd.get('name'),type:fd.get('type'),tag:fd.get('tag')||'Geral',thumb:pendingThumb});saveState();renderAssets();e.currentTarget.reset();$('#fileDropLabel').textContent='Clique para escolher fotos, vídeos ou documentos do seu computador';pendingThumb=null;closeModals();toast('Ativo adicionado à biblioteca.')});

$('#globalSearch').addEventListener('keydown',e=>{if(e.key==='Enter'){const q=e.currentTarget.value.trim().toLowerCase();if(!q)return;const sponsor=state.sponsors.find(s=>s.name.toLowerCase().includes(q));const asset=state.assets.find(a=>a.name.toLowerCase().includes(q));const task=state.tasks.find(t=>t.title.toLowerCase().includes(q));if(sponsor){showView('sponsors');toast(`Encontrado em patrocinadores: ${sponsor.name}`)}else if(asset){showView('assets');$('#assetSearch').value=q;renderAssets();toast('Arquivo encontrado na biblioteca.')}else if(task){if(task.race!==state.currentRace)setRace(task.race);showView('weekend');toast(`Tarefa encontrada: ${task.title}`)}else toast('Nenhum resultado encontrado.')}});

function renderAll(){initRaceControls();updateRaceUI();renderSponsors();renderAssets();renderReports();requestAnimationFrame(renderCharts)}
renderAll();
