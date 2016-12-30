/*第四部分回到顶部部分*/
define(["jquery"],function(){
	return function(){
		$(".return").click(function(){
			$(document).scrollTop(0);
		})
		$(document).scroll(function(){
			if($(document).scrollTop()>0){
				$(".return").show()
			}else{
				$(".return").hide()
			}
		})
	}
})
