const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold:0.2 });

sections.forEach(section => observer.observe(section));

const links = document.querySelectorAll('nav a');
links.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior:'smooth' });
  });
});