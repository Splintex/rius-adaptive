$(document).ready(function() {
	// toogle menu
	var menu_key = $(".js-menu-key");
	var menu_list = $(".js-menu-list");
	menu_key.bind("click", function(){
		menu_list.toggle();
	});
});