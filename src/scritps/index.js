
require('./lib/swiper-3.3.1.min.js');

var indexStr = require ('./tpl/index.string');
document.body.innerHTML += indexStr;

   
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 2000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
   
  })       








