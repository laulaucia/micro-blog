console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//post input area
var post = new Object({

});

var deleteButton = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';

//new post container "posts" area
//adding a new post div aka submission but first checking if the form is empty
  $('#new-blog-post').submit(function (e) {
    e.preventDefault();
  if($('#post-content').val().length>0){
  	var postContent = $("#post-content").val();
  	var newPost = '<li class="list-group-item alert">'+postContent+ deleteButton+'</li>';
  	$('#posts').prepend(newPost);
  }
//deleting posts

$('.close').on('click', function(){
	$('.list-group-item').html.empty;
	console.log(this);
});


//STRETCH goals
// add a counter for each post
//using local storage
});

});
