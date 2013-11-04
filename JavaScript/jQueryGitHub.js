$(document).ready(function(){
   $("#octocat").hover(function(){
	  $(this).stop(true, false).animate({ width: '165px', height: '240px'});
	  },
	function(){
	  $(this).stop(true, false).animate({ width: '145px', height: '210px'});
	  $(this).css('width', ' ');
	  $(this).css('height', ' ');
	  });
   });