const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),500));

const io=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.section>*:not(.section-label), .matter-grid article, .timeline>div, .steps>div').forEach(el=>{
 el.classList.add('reveal-on-scroll'); io.observe(el);
});

const style=document.createElement('style');
style.textContent=`.reveal-on-scroll{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s ease}.reveal-on-scroll.show{opacity:1;transform:none}`;
document.head.appendChild(style);

window.addEventListener('scroll',()=>{
 const y=window.scrollY;
 document.querySelector('.grid-bg')?.style.setProperty('transform',`translateY(${y*.12}px)`);
 document.querySelector('.qubit-scene')?.style.setProperty('transform',`translateY(calc(-50% + ${y*.04}px))`);
});
