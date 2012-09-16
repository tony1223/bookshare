
define("global",["jquery"],
	function($){
		var values = {};
		$(".global").each(function(){
			values[this.name] = this.value;
		})
		var ret = $({});
		ret.values = values;
		return ret;
	}
);
