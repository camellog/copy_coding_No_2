const video = document.getElementById('video-area');


const menu = document.getElementById('menu');
const header = document.getElementById('header');
menu.addEventListener('click', function () {
  header.classList.toggle('open')
})



$('.slick-area').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});
