//鼠标覆盖关于我们事件
$(function() {
	$(".gywm").mouseover(function() {
		$(".gywm1").removeClass("yc")
	});
	$(".gywm").mouseout(function() {
		$(".gywm1").addClass("yc")
	});
})
$(function() {
	$(".fuwu").mouseover(function() {
		$(".ld").removeClass("yc")
	});
	$(".fuwu").mouseout(function() {
		$(".ld").addClass("yc")
	});
})

//swiper轮播图开始----------------
var swiper = new Swiper('.swiper-container', {
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
//swiper轮播图结束----------------

//点击ul里的li
$(function(){
	$(".daohang").children().click(function(){
		$(this).addClass("dj").siblings().removeClass("dj");
	})
	$(".daohang").children().eq(0).click(function(){
		$(".yy").children().eq(0).removeClass("yc").siblings().addClass("yc");
		$(".yy").removeClass("hhh");
	})
	$(".daohang").children().eq(1).click(function(){
		$(".yy").children().eq(1).removeClass("yc").siblings().addClass("yc");
		$(".yy").addClass("hhh");
	})
	$(".daohang").children().eq(2).click(function(){
		$(".yy").children().eq(2).removeClass("yc").siblings().addClass("yc");
		$(".yy").addClass("hhh");
	})
	$(".daohang").children().eq(3).click(function(){
		$(".yy").children().eq(3).removeClass("yc").siblings().addClass("yc");
		$(".yy").addClass("hhh");
	})
	$(".daohang").children().eq(4).click(function(){
		$(".yy").children().eq(4).removeClass("yc").siblings().addClass("yc");
		$(".yy").addClass("hhh");
	})
	$(".daohang").children().eq(5).click(function(){
		$(".yy").children().eq(5).removeClass("yc").siblings().addClass("yc");
		$(".yy").addClass("hhh");
	})
	$(".daohang").children().eq(6).click(function(){
		$(".yy").children().eq(6).removeClass("yc").siblings().addClass("yc");
		$(".yy").addClass("hhh");
	})
})

