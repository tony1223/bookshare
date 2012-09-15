var Infos ={
	Color:{
		self:"#00FF00",
		ordered:"#0000FF",
		empty:"#ff0000"
	}
};

require(["jquery","global","jquery.masonry.min"],
	function($,global,FBUtil,login,list){
	$(function(){
		$('.books').masonry({
		  itemSelector: '.book',
		  columnWidth: 300
		});

		$(".book").hover(function(){
			$(this).find(".descContainer").show();
		},function(){
			$(this).find(".descContainer").fadeOut();
		});
	});
});
