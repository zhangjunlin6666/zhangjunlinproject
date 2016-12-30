define(['jquery'],function(){
	return function(){
		$(".cp").click(function(){
			$(this).css({
				color:"#2ece02",
				borderBottom:"5px solid #2ece02"
			}).siblings(".cp").css({
				color:"black",
				borderBottom:"none"
			});
			$(".cut").eq($(this).index()).css("display","block").siblings(".cut").css("display","none")
		})
	}
})