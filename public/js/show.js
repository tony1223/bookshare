require(["jquery","global","fb","jquery.masonry.min"],
	function($,global,FBUtil){
		$(function(){
			var showId = global.values.showId,
				pttcomments = global.values.pttcomments || 0;
			if(showId){
				FBUtil.after(function(FB){
					FB.api({
					    method: 'fql.query',
					    query: 'SELECT url,like_count FROM link_stat WHERE url="http://softjob.tonyq.org/bookshare/show/'+showId+'" limit 0,1'
						
					},function(response){
						if(response != null && response[0] != null){
							var count = parseInt(response[0].like_count,10) + parseInt(pttcomments,10);
							$(".countContainer .value").text( count +" 推");
							$(".countContainer").show();
						}
					});
				});
			}
		});
});
