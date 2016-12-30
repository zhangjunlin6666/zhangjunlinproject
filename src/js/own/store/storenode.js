define(['jquery'],function(){
	return function(){
		/*用script标签进行跨域访问*/
		var val,base,data22,lgh,div10;
			$("#serachtxt").on("input",function(){	
				var script=$("<script/>").addClass("spt").appendTo($("body"));/*创建script标签*/
					val=$("#serachtxt").val();
					base="http://suggest.bang.360.cn/suggest?word="+val+"&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852";
					/*设置script的src属性进行标签的跨域访问*/
					script.attr("src",base);
				 	window.suggest=function(data){/*请求响应后返回的数据*/
						data22=data["result"];
						/*返回的是一个对象,获取对象属性result的属性值,也是一个对象*/
						div10=$("<div/>").css({
							position:"absolute",
							top:$(".problem>div").height()+$(".problem>div").offset().top,
							left:$(".problem>div").offset().left,
							width:$("#serachtxt").width(),
							border:"1px solid #ddd",
							zIndex:100,
							background:"white",
						}).addClass("div11").appendTo($("body"));
						for(var i=0;i<data22.length;i++){
							var p=$("<p/>").css({
								height:"30px",
								textIndent:"10px",
								lineHeight:"30px",
								width:"100%",
								borderBottom:"1px solid #ddd",
							}).html(data22[i]["word"]).appendTo(div10);
						}
					};
					
					$("#serachtxt").on("change",function(){
						$(".div11").remove();
					})
				var spt=document.querySelectorAll(".spt");
				if(spt.length>1){/*判断删除多余的script标签*/
					$(".spt").remove();
				}	
			})
	}
})

