$(document).ready(function(){
	//���޴� �����̵�
	var swiper = new Swiper('.swiper-container3', {
	   effect: 'fade',
	   loop:true,
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	  },
	   simulateTouch:false,
	});

});