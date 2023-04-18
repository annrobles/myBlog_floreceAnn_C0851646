
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

document.getElementById("web-developer").addEventListener("click", navigateToAboutSection);
document.getElementById("mobile-developer").addEventListener("click", navigateToAboutSection);

function navigateToAboutSection() {
  const allElements = document.querySelectorAll('section');
  
  allElements.forEach((element) => {
    element.classList.remove('active');
  });

  var element = document.getElementById("about");
  element.classList.add("active");

  activeLink = 1;
}