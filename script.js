// Theme toggle
const root = document.body;
const btn = document.getElementById('themeToggle');
btn?.addEventListener('click', () => {
  const light = root.classList.toggle('theme-light');
  if(light){ btn.textContent = '☾'; } else { btn.textContent = '☀︎'; }
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Tilt effect
document.querySelectorAll('.tilt').forEach((el)=>{
  const r = 12;
  el.addEventListener('mousemove', (e)=>{
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const rx = ((y / rect.height) - .5) * -r;
    const ry = ((x / rect.width) - .5) * r;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  el.addEventListener('mouseleave', ()=>{ el.style.transform = 'rotateX(0) rotateY(0)' });
});

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Copy URL
document.getElementById('copyUrl')?.addEventListener('click', async ()=>{
  try{
    await navigator.clipboard.writeText(window.location.href);
    const el = document.getElementById('copied');
    if(el){ el.hidden = false; setTimeout(()=> el.hidden = true, 1800); }
  }catch(e){ alert('Copy failed.'); }
});
