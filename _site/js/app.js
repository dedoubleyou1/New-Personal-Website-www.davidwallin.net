$('.gallery-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery:{
    enabled:true
  }
});

var $button = $('button');
var $menu = $('.nav-collapse ul');

$button.click(function(){
	console.log('test');
	$menu.toggleClass('uncollapsed');
})