/*第三部分搜索框和tab切换*/
define(["jquery"],function(){
return function(){
				$(".cp").on("click",function(){
					$(this).css({
						background:"white",
						border:"1px solid #d6d6d6"
					}).siblings(".cp").css({
						background:"#f7f7f7",
						border:"none"
					})
					if($(this).index()==0){
						$(this).css("borderLeft","none");
					}
				})

			$("#seek").mousedown(function(){
				$("#prompt").css("display","none");
				$(".serach input").attr("placeholder","输入您的位置查找附近的商家").css({
					background:"red",
				});
			})
			$("#seek").mouseup(function(){
				$("#prompt").css("display","block");
				$(".serach input").attr({
					placeholder:"",
					// autofocus:"autofocus"
				});
				$(".serach input").css({
					background:"white",
					transition:"all 0.2s linear"
				});
			});
			$(".serach input").blur(function(){
				$("#prompt").css("display","none");
				$(".serach input").attr("placeholder","输入您的位置查找附近的商家");
			});
	}
})
