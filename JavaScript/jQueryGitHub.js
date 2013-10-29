$(document).ready(function(){
   $("#octocat").mouseenter(function(){
	  $(this).animate({
		   height: '+=20px',
		   width: '+=20px'
	 }); 
   });
    $("#octocat").mouseleave(function(){
	  $(this).animate({
		   height: '-=20px',
		   width: '-=20px'
	 }); 
	
   });
});
