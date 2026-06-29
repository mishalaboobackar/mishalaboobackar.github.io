// Nav toggle
document.addEventListener('click',e=>{
  if(e.target.closest('.burger')){document.querySelector('.nav-links').classList.toggle('open');}
  else if(!e.target.closest('.nav-links')){const n=document.querySelector('.nav-links');if(n)n.classList.remove('open');}
});

// Scroll reveal
const io=new IntersectionObserver((es)=>{es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Animated counters
function animate(el){
  const target=parseFloat(el.dataset.count); const dec=(el.dataset.dec|0);
  const pre=el.dataset.pre||''; const suf=el.dataset.suf||''; const dur=1100; let s=null;
  function step(t){if(!s)s=t;const p=Math.min((t-s)/dur,1);const e=1-Math.pow(1-p,3);
    const v=target*e; el.textContent=pre+v.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;
    if(p<1)requestAnimationFrame(step);}
  requestAnimationFrame(step);
}
const cio=new IntersectionObserver((es)=>{es.forEach(en=>{if(en.isIntersecting){animate(en.target);cio.unobserve(en.target);}})},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

// active nav link by filename
(()=>{const p=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active');});})();
