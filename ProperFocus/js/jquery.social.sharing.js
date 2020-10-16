var share = {
	showPopup : function(url){
		var width = 600;
		var height = 400;
		var poswidth = window.screen.width / 2 - width / 2;
		var posheight = window.screen.height / 2 - height / 2;
		window.open(url, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=yes,height=' + height + ',width=' + width + ',left=' + poswidth + ',top=' + posheight);
	}
}

var url = location.origin+location.pathname;
var title = $('title').text();
$('.btn-transparent-facebook').on('click',function(){
	share.showPopup('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url));
});

$('.btn-transparent-twitter').on('click',function(){
	share.showPopup('https://twitter.com/intent/tweet/?text='+title+'&url='+url+'&via='+location.origin);
});

var popover_timeout = null;
$('.btn-transparent-link').on('click',function(){
	//copy info
	var copied = $('title').text()+" "+window.location.href;
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(copied).select();
	document.execCommand("copy");
	$temp.remove();
	//copy info

	// popover
	var that = $(this);
	var time_to_hide = 3000;//3sec
	that.popover('show');
	that.data("bs.popover").inState.click=false;

  ////cancel the previous popover_timeout.
	if (popover_timeout) {
    clearTimeout(popover_timeout);
    popover_timeout = null;
  }
  ////cancel the previous popover_timeout.
  popover_timeout = setTimeout(function(){
  	that.popover('hide');
  }, time_to_hide);
	// popover
});