
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach(function(link, i) {
  link.addEventListener('click', function() {
    if (activeLink !== i) {
      links[activeLink].classList.remove('active');
      link.classList.add('active');
      sections[activeLink].classList.remove('active');

      setTimeout(function() {
        activeLink = i;
        sections[i].classList.add('active');
      }, 1000);
    }
  });
});