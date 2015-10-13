console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var deleteButton = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';

//adding a new post div aka submission but first checking if the form is empty
  $('#new-blog-post').submit(function (e) {
    e.preventDefault();
	  if($('#post-content').val().length>0){
	  	var postContent = $("#post-content").val();
	  	var newPost = '<li class="list-group-item alert">'+postContent+ deleteButton+'</li>';
	  	$('#posts').prepend(newPost);
	  	// clearing form on submit
	  	$( '#new-blog-post' ).each(function(){
    		this.reset();});
	  	updateCounter();
		}

	});
 var updateCounter = function(){
  	$('#counter').html($("ul li").length);
  	};
updateCounter();
});
