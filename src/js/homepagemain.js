require.config({
	baseUrl:"js",
	paths:{
		jquery:"app/jquery-1.11.1.min",
		iap:"own/homepage/imgautoplay",
		adh:"own/homepage/asidehover",
		srh:"own/homepage/search",
		rtop:"own/homepage/returntop",	
		homeajax:"own/homepage/homepageajax",
	}
});
require(["iap","adh","srh","rtop","homeajax"],function(a,b,c,d,e){
	a();
	b();
	c();
	d();
	e();
})