$(function(){

// bootstrap tooltip
$('[data-toggle="tooltip"]').tooltip();

// 捲軸移動效果
var winH = $(window).height();
$(window).scroll(function(){
	var winTop = $(this).scrollTop();
	$('.box').each(function(){
		var boxTop = $(this).offset().top;
		if(winTop + winH*2/3 > boxTop){
			$(this).addClass('open');
		}
	});
});

// #about 判斷是否先出現
var headerH = $('#header').outerHeight();
if(winH > headerH){
	$('#about').addClass('open');
}

// 手風琴
$('.job-title').on('click',function(){
	$(this).closest('li').toggleClass('open');
});

});
