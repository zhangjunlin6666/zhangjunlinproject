require.config({
	baseUrl:"js",
	paths:{
		jquery:"app/jquery-1.11.1.min",
		stAjax:"own/store/storeAjax",
		stlist:"own/store/storelist",
		stnode:"own/store/storenode",
		strtntop:"own/store/storereturntop",
		stsearch:"own/store/storesearch",
		sttab:"own/store/storetab"
	}
});
require(["stAjax","stlist","stnode","strtntop","stsearch","sttab"],function(sa,sl,sn,sr,ss,st){
	sa();
	sl();
	sn();
	sr();
	ss();
	st();
});
