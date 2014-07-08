$(function(){
	var all_pages = '#tabArea';
	

$(document).off('pagebeforeshow',all_pages).on('pagebeforeshow', all_pages, function myCallback (){
	
  var _thisid = this.id; //this is the loading page id can be used to load scripts or write js/functions conditionally
  $.getScript('scripts/jquery.js');
  $.getScript('scripts/turn.js');
  $.getScript('scripts/jquery.fullscreen.js');
  $.getScript('scripts/jquery.address-1.6.min.js');
  $.getScript('scripts/wait.js');
  $.getScript('scripts/onload.js');
 })
 $('body').off('click','#checkbox').on('click','#checkbox',function(){
 	
		if($('#checkbox').attr("value")=="block"){
				$(".hiddenFields").toggle();
			}
});

});