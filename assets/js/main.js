(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var R=[[['Flour',2,'cup',250],['Baking powder',2,'tsp',8],['Sugar',2,'tbsp',25],['Salt',.5,'tsp',3],['Buttermilk',1.75,'cup',420],['Eggs',2,'',0],['Melted butter',6,'tbsp',85]],
[['Flour',2,'cup',250],['Instant yeast',1.5,'tsp',5],['Sugar',2,'tbsp',25],['Salt',.5,'tsp',3],['Warm milk',1.75,'cup',420],['Eggs, separated',2,'',0],['Melted butter',8,'tbsp',115],['Vanilla',1,'tsp',5]],
[['Flour',1.5,'cup',190],['Cornstarch',.5,'cup',65],['Baking powder',2,'tsp',8],['Sugar',1,'tbsp',12],['Salt',.5,'tsp',3],['Milk',1.75,'cup',420],['Eggs',2,'',0],['Oil',.33,'cup',75]]];
var NT=['Rest the batter for 10 minutes while the iron heats.','Rest for 1 hour at room temperature, or overnight in the fridge. Fold in whipped whites just before cooking.','Mix only until no dry flour remains. Small lumps are fine.'];
var st=0,un='c';function fr(x){var w=Math.floor(x+1e-6),f=x-w,F=[[0,''],[.25,'&frac14;'],[.33,'&#8531;'],[.5,'&frac12;'],[.67,'&#8532;'],[.75,'&frac34;'],[1,'']];var b=F[0];F.forEach(function(p){if(Math.abs(p[0]-f)<Math.abs(b[0]-f))b=p;});if(b[0]===1){w++;b=F[0];}return (w?w:'')+(b[1]?(w?' ':'')+b[1]:'')||'0';}
function bt(){var n=+$('bt-n').value,k=n/8;$('bt-v').textContent=n;$('bt-l').innerHTML=R[st].map(function(r,i){var q;if(r[2]===''){q=Math.max(1,Math.round(r[1]*k))+(r[0].indexOf('Egg')===0?'':'');}else if(un==='g'&&r[3]){q=Math.round(r[3]*k)+' g';}else{var v=r[1]*k,u=r[2];if(u==='tbsp'&&v>=4){v=v/16;u='cup';}if(u==='tsp'&&v>=3){v=v/3;u='tbsp';}q=fr(v)+' '+u;}return '<li style="animation-delay:'+i*.04+'s"><span>'+r[0]+'</span><b>'+q+'</b></li>';}).join('');$('bt-note').textContent=NT[st];}
if($('bt-n')){$('bt-n').addEventListener('input',bt);$('bt-m').addEventListener('click',function(){$('bt-n').value=+$('bt-n').value-1;bt();});$('bt-p').addEventListener('click',function(){$('bt-n').value=+$('bt-n').value+1;bt();});
 var sb=[].slice.call(document.querySelectorAll('#bt-s button'));sb.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){st=+b.dataset.v;sb.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});bt();});});
 var ub=[].slice.call(document.querySelectorAll('.wf-units button'));ub.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){un=b.dataset.u;ub.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});bt();});});bt();}
var IR=[[180,[150,180,225],'&frac12; cup'],[190,[210,240,300],'&frac34; cup'],[195,[180,210,255],'1 cup'],[0,[150,180,210],'&frac12; cup']],IN=['Thin irons cook fast. Lightly oil the plates before the first waffle only.','Fill the deep grid almost to the edges; the batter spreads as it rises.','Flip as soon as the batter goes in so it spreads into both plates evenly.','Heat both sides on medium for 5 minutes and flip the iron halfway through cooking.'];
var dn=1,T=0,left=0,iv=null;function mm(s){return Math.floor(s/60)+':'+('0'+s%60).slice(-2);}
function ir(){var t=+$('ir-t').value,c=IR[t];T=c[1][dn];$('ir-h').textContent=c[0]?(c[0]+'°C / '+Math.round(c[0]*1.8+32)+'°F'):'Medium flame';$('ir-tm').textContent=mm(T);$('ir-b').innerHTML=c[2];$('ir-n').textContent=IN[t]+' Done when the steam almost stops.';document.querySelector('.wf-iron').setAttribute('data-lvl',dn);if(!iv){left=T;$('ir-c').textContent=mm(T);$('ir-s').textContent='ready to start';$('ir-p').style.strokeDashoffset=327;}}
function stop(){clearInterval(iv);iv=null;document.querySelector('.wf-iron').classList.remove('cook');$('ir-go').textContent='Start timer';}
if($('ir-t')){$('ir-t').addEventListener('change',function(){stop();ir();});var db=[].slice.call(document.querySelectorAll('#ir-d button'));db.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){dn=+b.dataset.v;db.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});stop();ir();});});
 $('ir-go').addEventListener('click',function(){if(iv){stop();$('ir-s').textContent='paused';return;}if(left<=0)left=T;document.querySelector('.wf-iron').classList.add('cook');$('ir-go').textContent='Pause';$('ir-s').textContent='cooking';iv=setInterval(function(){left--;$('ir-c').textContent=mm(Math.max(0,left));$('ir-p').style.strokeDashoffset=327*(left/T);if(left<=0){stop();$('ir-s').textContent='check your waffle!';}},1000);});
 $('ir-rs').addEventListener('click',function(){stop();left=T;ir();});ir();}
})();
