$(function(){
	var wh = $(window).height();
	$('article').css('height', wh);
	$('#bg1').addClass('on');

	 var lastScroll = 0;
     $(window).scroll(function(event){
          var scroll = $(this).scrollTop();
          if (scroll > 300){
          //�̺�Ʈ�� �����ų ��ũ�� ����
               $("#bg2").addClass("on");
          }
          if (scroll > 1000){
          //�̺�Ʈ�� �����ų ��ũ�� ����
               $("#bg3").addClass("on");
          }
          
          lastScroll = scroll;
     });

	$("#bg3 ul li").slice(0, 3).show(); // ���� 10�� ����
	$("#load").click(function(e){ // Load More�� ���� Ŭ�� �̺�Ʈe
		e.preventDefault();
		$("#bg3 ul li:hidden").slice(0, 3).show(); // ���� ������ ���� 10���� �����Ͽ� ǥ��
		if($("#bg3 ul li:hidden").length == 0){ // ������ DIV�� �ִ��� üũ
			$("#load").hide();
		}
	});


	$('header .menu').click(function(){
		$(this).toggleClass('on');
		$('header .menuList').toggleClass('on');
	});

});
$(document).keydown(function(event) {
	  if (event.keyCode == '33') {
		$('html,body').stop().animate({scrollTop:0},500);	
		$('.bg').removeClass('on');
		$('#bg1').addClass('on');
	  }
	  else if (event.keyCode == '34') {
		$("html,body").stop().animate({scrollTop:$(document).height()},800);		
		$('.bg').removeClass('on');
		$('#bg4').addClass('on');		
	  }

	  $("section").scroll(function(){
        var scrollTop = $(this).scrollTop();
        var innerHeight = $(this).innerHeight();
        var scrollHeight = $(this).prop('scrollHeight');

        if (scrollTop + innerHeight >= scrollHeight) {
			alert('11');
        } else {
			alert('22');
        }
	});

});

$(window).load(function(){
	$("html, body").animate({ scrollTop: 0 },10); 
});
