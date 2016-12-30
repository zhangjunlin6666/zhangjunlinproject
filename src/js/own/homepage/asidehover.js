/*第二部分控制轮播图侧边鼠标划过时各div的位置和宽高*/
define(["jquery"],function(){
	return function(){
		var aw;
		var ah;
		var sk;
		var ipw;
		/*定义侧边导航栏的宽高和位置*/
			setInterval(function(){
				aw=$(".aside").width();
				ah=$(".aside").height();
				sk=$("#seek").width();
				ipw=$(".serach input").width();
				$("#prompt").css({
					right:sk,
					width:ipw
				})
				$(".phone").css({
					left:aw
				})
				$(".computer").css({
					left:aw,
					height:ah
				})
				$(".salephone").css({
					left:aw,
					height:ah
				})
				$(".buyphone").css({
					left:aw,
					height:ah
				})
			},30)	
	/*侧边栏移入移出事件*/
			$(".aside>p").on("mouseover",function(){
				$(".aside_paging").eq($(this).index()).css("display","block").siblings(".aside_paging").css("display","none");
				$(".aside_paging").on("mouseover",function(){
					$(this).css("display","block").siblings(".aside_paging").css("display","none");
				})
				$(".aside_paging").on("mouseout",function(){
					$(this).css("display","none");
				})
		
			})
			$(".aside>p").on("mouseout",function(){
				$(".aside_paging").eq($(this).index()).css("display","none");
			})	
	}
})
