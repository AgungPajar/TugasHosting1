let bintang = document.getElementById('stars');
let bulan = document.getElementById('moon');
let gunungBelakang = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let gunungDepan = document.getElementById('mountains_front');
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  gunungBelakang.style.top = value * 0.5 + 'px';
  gunungDepan.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
})