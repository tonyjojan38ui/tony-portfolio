// Mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if(menuBtn && nav){
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Copy URL
const copyBtn = document.getElementById('copyUrl');
if(copyBtn){
  copyBtn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(window.location.href);
      const el = document.getElementById('copied');
      if(el){ el.hidden = false; setTimeout(()=> el.hidden = true, 1800); }
    }catch(e){ alert('Copy failed'); }
  });
}

// Year
const y = document.getElementById('year');
if(y){ y.textContent = new Date().getFullYear(); }
