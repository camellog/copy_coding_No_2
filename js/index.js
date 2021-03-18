const hamburger = document.getElementsByClassName('hamburger');
const header    = document.getElementById('header');

hamburger[0].addEventListener('click', function () {
  header.classList.toggle('open');
});

