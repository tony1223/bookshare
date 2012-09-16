
var $ = require("jQuery");
module.exports = function(dao){
	var dateformat = require('dateformat')
	function dateformatHelper(str){
		return dateformat(str,"yyyy/mm/dd HH:MM:ss");
	}

	this.home = function(req, res){
		res.render("home",{});
	}; 
	/*
	 * GET home page.
	 */
	this.index = function(req, res){
	    /* Select 'contact' collection */
	    dao.getBooks(function(err,books){
	    	res.render("index",{
	    		title:"SoftJob 賞書活動票選網頁!",
	    		books:books,
	    		truncate:function(str){
	    			var k = arguments ;
	    			var result = [];
	    			for(var i = 0 ; i < arguments.length;++i){
	    				result.push($.trim(arguments[i] == null ?"":arguments[i]));
	    			}
	    			var length = 30;
	    			str = result.join("");
	    			if (str.length > length){
	    				return str.substring(0,length-2) +"..." ;
	    			}else{
	    				return str;
	    			}
	    		}
	    	});
	    });
	}; 

	this.show = function(req, res){	
		dao.getBook(req.params.id,function(collection,book){
			if (book.length == 0){
				res.send("book not found::"+req.params.id);
				return false;
			}
	    	res.render("show",{
	    		title:"SoftJob 賞書活動票選網頁 - "+ book.name  +" by "+ book.author,
	    		book:book[0],
	    		ln:function(str){
	    			return str.replace(/\n/gi,"<br />");
	    		}
	    	});
	    });
	}; 


	return this;	
};