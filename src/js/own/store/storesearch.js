define(['jquery'],function(){
	return function(){
			$("#telnum").click(function(){
			$(this).hide();
			$("#telphone").html("电话： <font color='#ff0000'>18001135513</font><span style='color:#2ece02'> 联系我时，请说是在360同城帮上看到的，谢谢！</span>")
		});
		$("#seek").mousedown(function(){
			$(".pay>div>input").css({
				background:"red",
			});
		});
		$("#seek").mouseup(function(){
			$(".pay>div>input").css({
				background:"white",
				transition:"all 0.2s linear"
			});
		});
	}
})