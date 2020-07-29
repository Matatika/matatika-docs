$(document).ready(function () {

  // menu icon behaviour
  $('.hamburger').click(function () {
    const content = document.querySelector('.main');
    const nav = document.querySelector('.site-nav');
    const searchBar = document.querySelector('.main-header');

    // scroll to the top
    window.scrollTo(0, 0);

    nav.classList.toggle('nav-open');
    nav.classList.toggle('offset');
    searchBar.classList.toggle('nav-open');
    content.classList.toggle('no-offset')

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      hamburgers.forEach(function (hamburger) {
        hamburger.classList.toggle("is-active");
      });
    }
  })

});
