$(document).ready(function(){

	//����� �޴�
	$('.more').click(function(){
		$('.head .m_menu .m_gnb').animate({right:0},500);
	});

	$('.g_top button').click(function(){
		$('.head .m_menu .m_gnb').animate({right:'-100%'},500);
	});

	
	//����� ��Ӵٿ� �޴�
	$('.depth2').hide();
	$('.head .m_menu .m_gnb .g_bot li').click(function(){
		$(this).children('strong').toggleClass('on');
		$(this).children('ul').slideToggle(300);
		$('.head .m_menu .m_gnb .g_bot li').not(this).children('ul').slideUp(300);
		$('.head .m_menu .m_gnb .g_bot li').not(this).children('strong').removeClass('on');
	});


	//�ٱ���������
	$('.head .lang ul').mouseenter(function(){
		$('.head .lang ul li').eq(1).children('a').css('display','block');
	});
	$('.head .lang ul').mouseleave(function(){
		$('.head .lang ul li').eq(1).children('a').css('display','none');
	});

	//LNB
	$('.menu ul li').mouseenter(function(){
		if($(window).width() > 1024){
			$(this).parent('ul').parent('.menu').parent('.head').parent('#header').animate({height:'224px'},300);
		}
	});
	$('#header').mouseleave(function(){
		if($(window).width() > 1024){
			$(this).animate({height:'90px'},300);
		}
	});


	//Ǫ�� �йи�����Ʈ
	$('.family button').mouseenter(function(){
		$(this).siblings('ul').show();
	});
	$('.family').mouseleave(function(){
		$(this).children('ul').hide();
	});


	//location
	$('.dep').mouseenter(function(){
		$(this).children('ul').slideDown(200);
	});
	$('.dep').mouseleave(function(){
		$(this).children('ul').slideUp(200);
	});
	$('.dep').click(function(){
		$(this).children('ul').slideToggle(200);
	});


	
});
