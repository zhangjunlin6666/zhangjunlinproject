define(['jquery'],function(){
	return function(){
		var baseURL="http://localhost:4000/news";
		$.get(baseURL,fn);
		function fn(data){
			var date=data["product"];
	//		console.log(date);
			var arr=["product_img","product_name","service_desc1","product_price"]
			date.forEach(function(ele,index,arr1){
				var arr1=[];
				for(var i=0;i<arr.length;i++){
					arr1.push(date[index][arr[i]]);
				}
				var div=$("<div/>").addClass("matter").appendTo($(".news"));
				var div1=$("<div/>").addClass("servermatter").appendTo(div);
				var span1=$("<span/>").html("￥"+arr1[3]).appendTo(div);
				var img=$("<img/>").attr("src",arr1[0]).appendTo(div1);
				var div2=$("<div/>").appendTo(div1);
				var a=$("<a/>").attr("href","#").html(arr1[1]).appendTo(div2);
				var span2=$("<span/>").html(arr1[2]).appendTo(div2);
				var div3=$("<div/>").addClass("promptlybuy").html("立即购买").appendTo(div);
				
			})
		}
}
})


