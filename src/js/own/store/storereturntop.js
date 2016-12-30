define(['jquery'],function(){
	return function(){
		$(document).scroll(function(){
			if($(document).scrollTop()>0){
				$(".return").show()
			}else{
				$(".return").hide()
			}
		})
		$(".return").click(function(){
			$(document).scrollTop(0);
		})	
	}
})