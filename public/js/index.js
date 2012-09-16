require(["jquery","global","fb","jquery.isotope.min"],
	function($,global,FBUtil,login,list){
	$(function(){
		$('.books').isotope({
			masonry: {
	          columnWidth: 200
	        },
		  	itemSelector: '.book',
			sortBy: 'number',
			getSortData: {
	          number: function( $elem ) {
	            var number = $elem.data("pttcomments");
	            return parseInt( number, 10 ) * -1 ;
	          },
	          pushcount: function( $elem ) {
	            var number = $elem.data("pushcount");
	            return parseInt( number, 10 ) * -1 ;
	          }
	        }
		});

		$(".book").hover(function(){
			var $book = $(this);
			$book.find(".descContainer").show();
			$book.find(".countContainer").hide();
		},function(){
			var $book = $(this);
			$book.find(".descContainer").fadeOut();
			$book.find(".countContainer").fadeIn();
		});

		var result = [];
		$(".book").each(function(){
			var $book = $(this);
			var showId = $book.data("id"),
			pttcomments = $book.data("pttcomments") || 0;
			$book.data("pushcount",pttcomments);
			if(showId){
				result.push('"http://softjob.tonyq.org/bookshare/show/'+showId+'"');
			}	
		});
		FBUtil.after(function(FB){
			FB.api({
			    method: 'fql.query',
			    query: 'SELECT url,like_count FROM link_stat WHERE url in ('+result.join(",")+')'
				
			},function(response){
				if(response != null){
					$.each(response,function(ind,item){
						var $book = $("#book"+item.url.replace("http://softjob.tonyq.org/bookshare/show/",""));
						if($book.length){
							var showId = $book.data("id"),
							pttcomments = $book.data("pttcomments") || 0;
							var count = parseInt(item.like_count,10) + parseInt(pttcomments,10);
							$book.find(".countContainer .value").text( count +" 推");
							$book.find(".countContainer").show();			
							$book.data("pushcount",count);
						}
					});
					$('.books').isotope("updateSortData",$(".books .book"));
					$('.books').isotope({sortBy: 'pushcount'});
				}
			});
		});		
	
	});
});
