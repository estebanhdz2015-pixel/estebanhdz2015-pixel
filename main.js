// Carrusel hero
const slides=document.querySelectorAll('.slide');
let index=0;
setInterval(()=>{
  slides[index].classList.remove('active');
  index=(index+1)%slides.length;
  slides[index].classList.add('active');
},6000);

// Estrellas neón
const starsContainer=document.getElementById('stars');
for(let i=0;i<120;i++){
  const s=document.createElement('div');
  s.classList.add('star');
  s.style.top=Math.random()*100+'%';
  s.style.left=Math.random()*100+'%';
  s.style.animationDuration=2+Math.random()*3+'s';
  starsContainer.appendChild(s);
}

// Animaciones al hacer scroll
const fadeElements=document.querySelectorAll('.fade-in');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});
fadeElements.forEach(el=>observer.observe(el));
