var db = require("./db");

db.open(function(err) { 
  if(err) throw err;
});
module.exports = {
	_db:db,
	insertBook:function(obj){
		/* name,type,buytime,buyplace,link,img,howtoget,why,think,worth,suggest */

	},
	getBook:function(id,cb){
		return cb(null,
			{
				seqNo:1,
				author:"TonyQ",
				pttLink:"http://www.ptt.cc/bbs/Soft_Job/M.1344096070.A.FAF.html",
				postDate:"2012/8/5 00:01",
				pttcomments:6,

				name :"JavaScript 優良部份",
				type :"翻譯書",
				buytime:"2009/10 (?)",
				buyplace:"博客來",
				link :"http://www.books.com.tw/exep/prod/booksfile.php?item=0010410726",
				img :"http://im1.book.com.tw/exep/lib/image.php?image=http://addons.books.com.tw/G/001/6/0010410726.jpg&width=200&height=280&quality=80",
				howtoget :"購買",
				why :"從朋友那邊看到，翻了幾頁覺得值得買就自己買了。",
				think :"         以前對 good practice 跟\n bad practice 的分界不太瞭解，\n         \n看完這本書後最大的收穫是，其實不是每個語言特性都值得用到底，          很多容易造成麻煩的語言特性是根本不應該去碰的。           對一些過去曾經碰過得問題也覺得有回味的感覺，         會覺得如果早幾年看到這本書就好了。           他本身並不是基礎教學型的，但是他是\"防雷\"型的書，         讀了這本書可以增加自己對 JS 的\"品味\" ，知道什麼情況下容易出問題。          相當推薦給會一直接觸的 JS user 作為進階讀物。\n",
				worth :"Yes",
				suggest:"*****"
			}
		);
	},
	getBooks:function(cb){
		return cb(null,[
			{
				seqNo:1,
				author:"TonyQ",
				pttLink:"http://www.ptt.cc/bbs/Soft_Job/M.1344096070.A.FAF.html",
				postDate:"2012/8/5 00:01",
				pttcomments:6,

				name :"JavaScript 優良部份",
				type :"翻譯書",
				buytime:"2009/10 (?)",
				buyplace:"博客來",
				link :"http://www.books.com.tw/exep/prod/booksfile.php?item=0010410726",
				img :"http://im1.book.com.tw/exep/lib/image.php?image=http://addons.books.com.tw/G/001/6/0010410726.jpg&width=200&height=280&quality=80",
				howtoget :"購買",
				why :"從朋友那邊看到，翻了幾頁覺得值得買就自己買了。",
				think :"         以前對 good practice 跟 bad practice 的分界不太瞭解，         看完這本書後最大的收穫是，其實不是每個語言特性都值得用到底，          很多容易造成麻煩的語言特性是根本不應該去碰的。           對一些過去曾經碰過得問題也覺得有回味的感覺，         會覺得如果早幾年看到這本書就好了。           他本身並不是基礎教學型的，但是他是\"防雷\"型的書，         讀了這本書可以增加自己對 JS 的\"品味\" ，知道什麼情況下容易出問題。          相當推薦給會一直接觸的 JS user 作為進階讀物。\n",
				worth :"Yes",
				suggest:"*****"
			},
			{
				seqNo:2,
				author:"iceonly",
				pttLink:"http://www.ptt.cc/bbs/Soft_Job/M.1344128534.A.311.html",
				postDate:"2012/8/5 09:02",
				pttcomments:2,

				name :"SCJP Java 6專業認證手冊",
				type :"翻譯書",
				buytime:"2009/10 (?)",
				buyplace:"諾貝爾書局",
				link :"http://www.kingstone.com.tw/book/book_page.asp?kmcode=2014713104410",
				img :"http://img.kingstone.com.tw/Book/images/Product/20147/2014713104410/2014713104410b.jpg",
				howtoget :"購買",
				why :"當初想考證照，買完猛虎覺得寫得很爛就去買另一本書了",
				think :"這本書與其說是考證照用的參考書不如說是一本通用的java教課書。\n該作者同時也是head first java的作者，這本書也有他的影子，\n不但敘述淺顯易懂又夠詳盡(當然只到證照範圍內，不過也夠了)，\n對於一些常犯的錯誤也會特別提出來，至少修正了很多我以前犯的毛病。\n就算光就概念教學的部份也勝過之前在大學時讀的教課書。\n\n要說缺點的部份就是這本畢竟只有提到SCJP的考試範圍，\n因此沒有Thinking in Java來的廣和深，也沒有像它一樣有比較複雜的範例。\n(當然大量的snippets還是有的)\n如果Thinking in Java對你來講太難又想搞好觀念的話就值得讀一下這本。\n\n--當然如果你要考證照的話更應該讀這本，猛虎請當成題庫謝謝--\n",
				worth :"Yes",
				suggest:"****"
			}
		]);
	},
	insertDefaultBook : function(){
		var books = [
			{
				author:"TonyQ",
				pttLink:"http://www.ptt.cc/bbs/Soft_Job/M.1344096070.A.FAF.html",
				postDate:"2012/8/5 00:01",
				pttcomments:6,

				name :"JavaScript 優良部份",
				type :"翻譯書",
				buytime:"2009/10 (?)",
				buyplace:"博客來",
				link :"http://www.books.com.tw/exep/prod/booksfile.php?item=0010410726",
				img :"http://im1.book.com.tw/exep/lib/image.php?image=http://addons.books.com.tw/G/001/6/0010410726.jpg&width=200&height=280&quality=80",
				howtoget :"購買",
				why :"從朋友那邊看到，翻了幾頁覺得值得買就自己買了。",
				think :"         以前對 good practice 跟 bad practice 的分界不太瞭解，         看完這本書後最大的收穫是，其實不是每個語言特性都值得用到底，          很多容易造成麻煩的語言特性是根本不應該去碰的。           對一些過去曾經碰過得問題也覺得有回味的感覺，         會覺得如果早幾年看到這本書就好了。           他本身並不是基礎教學型的，但是他是\"防雷\"型的書，         讀了這本書可以增加自己對 JS 的\"品味\" ，知道什麼情況下容易出問題。          相當推薦給會一直接觸的 JS user 作為進階讀物。\n",
				worth :"Yes",
				suggest:"*****"
			},
			{
				author:"iceonly",
				pttLink:"http://www.ptt.cc/bbs/Soft_Job/M.1344128534.A.311.html",
				postDate:"2012/8/5 09:02",
				pttcomments:2,

				name :"SCJP Java 6專業認證手冊",
				type :"翻譯書",
				buytime:"2009/10 (?)",
				buyplace:"諾貝爾書局",
				link :"http://www.kingstone.com.tw/book/book_page.asp?kmcode=2014713104410",
				img :"http://img.kingstone.com.tw/Book/images/Product/20147/2014713104410/2014713104410b.jpg",
				howtoget :"購買",
				why :"當初想考證照，買完猛虎覺得寫得很爛就去買另一本書了",
				think :"這本書與其說是考證照用的參考書不如說是一本通用的java教課書。\n該作者同時也是head first java的作者，這本書也有他的影子，\n不但敘述淺顯易懂又夠詳盡(當然只到證照範圍內，不過也夠了)，\n對於一些常犯的錯誤也會特別提出來，至少修正了很多我以前犯的毛病。\n就算光就概念教學的部份也勝過之前在大學時讀的教課書。\n\n要說缺點的部份就是這本畢竟只有提到SCJP的考試範圍，\n因此沒有Thinking in Java來的廣和深，也沒有像它一樣有比較複雜的範例。\n(當然大量的snippets還是有的)\n如果Thinking in Java對你來講太難又想搞好觀念的話就值得讀一下這本。\n\n--當然如果你要考證照的話更應該讀這本，猛虎請當成題庫謝謝--\n",
				worth :"Yes",
				suggest:"****"
			}
		];
	}
}

var books ={
	author:"",
	pttLink:"",
	postDate:"",
	comments:0,

	name :"",
	type :"",
	buytime:"",
	buyplace:"",
	link :"",
	img :"",
	howtoget :"",
	why :"",
	think :"",
	worth :"",
	suggest:""
};

/* usage */
//db.open(function(err) {
//	if (err) throw err;
//    /* Select 'contact' collection */
//    db.collection('joiners', function(err, collection) {
//        callback(db,collection);
//    });
//});
