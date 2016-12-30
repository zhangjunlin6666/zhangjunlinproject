
/*第一部分ajax请求*/
define(["jquery"],function(){
	return function(){
		var arr1,arr2,date,arr,num;
		var arr3=new Array();
		function ajax(k){
			var m=parseInt(k/2)+1;/*将li的下标转换为URL的路径*/
			var xhr=new XMLHttpRequest();
				xhr.open("get","http://localhost:4000/d"+m);
				xhr.send(null);
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4){
						if(xhr.status==200||xhr.status==304){
							var data=JSON.parse(xhr.responseText);
							 date=data["shop_data"];/*date是一个有对象组成的数组*/
							// console.log(date);
							 arr=["shop_ico","shop_name","main","addr_detail","shop_visit","level"];
							 if(k%2==0){/*判断数据是从第几项开始的,因为提供的数据一页有十项,而页面一页只需要五项*/
							 	a=5;b=10;arr3=[];					 					 	
							 }else{
							 	a=0;b=5;arr3=[];
							 }
							for(var i=a;i<b;i++){
								 	arr1=[];
								for(var j=0;j<arr.length;j++){
										arr2=[];
										arr1.push(date[i][arr[j]]);/*页面其它的数据*/
										arr2.push(date[i]["map_longitude"]);/*坐标经度*/
										arr2.push(date[i]["map_latitude"]);/*坐标纬度*/
								}
								arr3.push(arr2);
								// console.log(arr1)
								var div=document.createElement("div");
										div.className="enterstore";
										document.querySelector(".store").appendChild(div);
								var a=document.createElement("a");
								var img=document.createElement("img");
										img.setAttribute("src",arr1[0]);
										a.appendChild(img);
										div.appendChild(a);
								var div1=document.createElement("div");
										div1.className="introduce";
								var p1=document.createElement("p");	
								var span1=document.createElement("span");					
									// span1.appendChild(a1);						
										span1.innerHTML="<a href='#'>"+arr1[1]+"</a>"+"店铺等级："+arr1[5];
										p1.appendChild(span1);
								var span2=document.createElement("span");
										span2.innerHTML="先行赔付";
										p1.appendChild(span2);
										div1.appendChild(p1);
								var p2=document.createElement("p");
								var span3=document.createElement("span");
										span3.innerHTML="主营："+arr1[2];
										p2.appendChild(span3);
								var span4=document.createElement("span");
										span4.innerHTML="同城帮认证";
										p2.appendChild(span4);	
										div1.appendChild(p2);
								var p3=document.createElement("p");
								var span5=document.createElement("span");
										span5.innerHTML="地址："+arr1[3];
										p3.appendChild(span5);
								var span6=document.createElement("span");
										span6.innerHTML="人气："+arr1[4]+"次浏览";
										p3.appendChild(span6);	
										div1.appendChild(p3);
								var div2=document.createElement("div");
										div2.innerHTML="进入店铺";
										div2.className="enter";
										div.appendChild(div1);
										div.appendChild(div2);
		
							}
							console.log(arr3);
						}
					}
				}
		}
		ajax(1)
		$("#paging>ul").on("click","li",function(){
			num=$(this).index();
			$(this).css({
				background:"#fc6621",
				color:"white",
				fontWeight:"bold"
			}).siblings("li").css({
				background:"white",
				color:"black",
				fontWeight:"normal"
			});
			$(".enterstore").remove();
			ajax(num);
		});
/*ajax结束*/


	$("#map").click(function(){
			var div1=$("<div/>").css({
					width:"100%",
					height:$(document).height(),
					position:"absolute",
					top:0,
					background:"rgba(0,0,0,0.5)"
			}).attr("class","wai").appendTo($("body"));
		
			var div2=$("<div/>").css({
					background:"white",
					width:800,
					height:500,
					marginTop:-250,
					marginLeft:-400,
					position:"absolute",
					left:"50%",
					top:"50%",
			}).appendTo(div1);
		
			var div3=$("<div/>").css({
					width:800,
					textIndent:"10px",
					height:"40px",
					display:"flex",
					justifyContent: "space-between",
					alignItems:"center",	
					borderBottom:"1px solid #ddd",
					color:"#ddd",
			}).html("地图模式").appendTo(div2);
			var p=$("<p/>").html("+").attr("class","exits").css({
					fontSize:"25px",
					fontWeight:"bold",
					textAlign:"center",
					lineHeight:"40px",
					cursor:"pointer",
					height:"40px",
					width:40,
			}).appendTo(div3);
			var div4=$("<div/>").css({
					width:800,
					height:410,
			}).attr("id","getmap").appendTo(div2);
		
			var div5=$("<div/>").css({
					width:800,
					height:49,
			}).appendTo(div2);
		
			var ul=$("<ul/>").css({
					listStyle:"none",
					width:"40%",
					marginLeft:"30%",
					marginTop:5,
					display:"flex",
					justifyContent: "space-around",
					alignItems:"center"
			}).appendTo(div5);	
			for(var i=0;i<6;i++){
				$("<li/>").html(i+1).css({
						width:40,
						height:"40px",
						border:"1px solid #ddd",
						lineHeight:"40px",
						textAlign:"center",
						cursor:"pointer"
				}).appendTo(ul);	
			};
			$(".wai li").eq(0).css({/*设置第一个li的颜色*/
					background:"#fc6621",
					color:"white",
					fontWeight:"bold"
			});
			$(".wai li").eq(num).css({/*让点击的li的颜色和地图中li的颜色一致*/
					background:"#fc6621",
					color:"white",
					fontWeight:"bold"
			}).siblings("li").css({
					background:"white",
					color:"black",
					fontWeight:"normal"
			});
			$(".wai li").click(function(){
				$(this).css({
						background:"#fc6621",
						color:"white",
						fontWeight:"bold"
				}).siblings("li").css({
						background:"white",
						color:"black",
						fontWeight:"normal"
				});
				ditu($(this).index());
			})
		
		/*地图程序*/
			function ditu(n){
			   var map = new AMap.Map('getmap', {/*创建地图对象*/
				    resizeEnable: true,
				    zoom:11,
				    center: [116.397428, 39.90923]       
			    });
			   	 // map.setMapStyle("fresh");
			    AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],/*地图控件*/
			    function(){
			        map.addControl(new AMap.ToolBar());
			 
			        map.addControl(new AMap.Scale());
			 
			        map.addControl(new AMap.OverView({isOpen:true}));
				});
		
		
			    var icon = new AMap.Icon({/*设置图片大小，自定义标记的图标*/
			        image : 'img/gps.png',//24px*24px
			        //icon可缺省，缺省时为默认的蓝色水滴图标，
			        size : new AMap.Size(36,36),
			        imageSize:(36,36),
				});
				
				var infoWindow = new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)});
				for(var i = 0,marker; i < arr3.length; i++){/*给每个标记点添加图标*/
				   marker= new AMap.Marker({
				        icon:icon,
				        position:arr3[i],
					    	title:date[i]["shop_name"],
				        map:map,		        
				   });	
				   marker.content="<p class='mapp1'>"+date[i]["shop_name"]+"</p><div class='mapdiv'><img class='mapimg' src="+date[i]['shop_ico']+"><p class='mapp2'>地址："+date[i]['addr_detail']+"</p></div><a href='#' class='mapa'>进入店铺</a>"
				   marker.on('click',markerClick);
		           marker.emit('click',{target:marker});
					 }
				  function markerClick(e){
			        infoWindow.setContent(e.target.content);
			        infoWindow.open(map, e.target.getPosition());
			    }
			    map.setFitView();		
			   	$(".exits").click(function(){/*点击叉叉让地图消失*/
							$(".wai").remove();
					})
		   }
		   ditu(0);
		})
	}
})
