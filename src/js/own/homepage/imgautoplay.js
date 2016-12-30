/*第一部分轮播*/
define(["jquery"],function(){
	return function(){
		var i=0;
		function move(){
			$(".autoplay").delay(1500);
			i++;
			$(".autoplay").animate({
				marginLeft:-100*i+"%"
			},2000,"linear",function(){
				if(i>4){
					i=0;
					$(".autoplay").css("marginLeft",0)
				}
				$(".list>li").eq(i).css("background","black").siblings().css("background","#c6bdbd");
				move();
			})
		}
		move();
		/*点击原点时*/
		$(".list>li").click(function(){
			$(".autoplay").stop();
			$(".autoplay").stop();
			i=$(this).index();
			$(this).css("background","black").siblings().css("background","#c6bdbd");
			$(".autoplay").animate({
				marginLeft:-100*i+"%"
			},500,"linear",function(){
				move();
			})
		})
	}
})
