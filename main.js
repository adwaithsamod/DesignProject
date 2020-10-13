const container=document.querySelector('.container');
const navlinks=document.querySelector('.nav-links');
const links=document.querySelectorAll('.navlinks li');
container.addEventListener('click', () => {
  navlinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

