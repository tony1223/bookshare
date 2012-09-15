
var $ = require("jQuery");
module.exports = function(dao){
	var dateformat = require('dateformat')
	function dateformatHelper(str){
		return dateformat(str,"yyyy/mm/dd HH:MM:ss");
	}
	/*
	 * GET home page.
	 */
	this.index = function(req, res){
	    /* Select 'contact' collection */
	    dao.getBooks(function(collection,books){
	    	res.render("index",{
	    		title:"SoftJob 賞書活動票選網頁!",
	    		books:books,
	    		truncate:function(str){
	    			if (str == null) return "";
	    			if (str.length > 16){
	    				return str.substring(0,14) +"..." ;
	    			}else{
	    				return str;
	    			}
	    		}
	    	});
	    });
	}; 

	this.show = function(req, res){	
		dao.getBook(req.param.id,function(collection,book){
	    	res.render("show",{
	    		title:"SoftJob 賞書活動票選網頁 - "+ book.name  +" by "+ book.author,
	    		book:book
	    	});
	    });
	}; 


	return this;	
};