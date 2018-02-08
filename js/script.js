// quick fix for Cloud9 warning:
/* global $ */

// Class 1:
// Customize the mySong variable with information about your favorite song.
// Complete displaySong function to append a single song to the list on the page.
// Make sure the displaySong function is called when the page loads.

// Class 2:
// Complete displayList function to append all the songs to the list on the page.
// Make sure the displayList function is called when the page loads.
// Complete clearList function to remove everything inside the list on the page (optional).

// Class 3:
// Complete the addSong function to:
//	  take inputs from the input boxes,
//    push the new song to the playlist array,
// 	  and display the new song in the list on the page.
// Make sure the addSong function is triggered when a user clicks the Add Song button.

//**************************** YOUR CODE BELOW *******************************
//*********** CHECK YOUR WORK EARLY AND OFTEN WITH console.log()!! ***********

// Data
var mySong = {
	"title": "Don't Worry Be Happy",
	"artist": "Bobby McFerrin",
	"imageURL": "https://images-na.ssl-images-amazon.com/images/I/51cB3PoKceL._AC_US500_FMwebp_QL65_.jpg",
	"playURL": "https://open.spotify.com/track/4v52HuhZqVV0eNpP6vzH5I",

}

var myPlayList = [
	{
		"title": "Mozart's House",
		"artist": "Clean Bandit ft. Love Ssega",
		"imageURL": "https://i.scdn.co/image/f311bae0ebf733fb22e9569037cf44b68e641710",
		"playURL": "https://open.spotify.com/album/52okycllbZsjP4tKJ0goBA",
	},
	{
		"title": "Seven Nation Army",
		"artist": "White Stripes",
		"imageURL": "https://images-na.ssl-images-amazon.com/images/I/51yynBRMVbL._AC_US500_QL65_.jpg",
		"playURL": "https://open.spotify.com/album/4StIitBi8mj72prw8U4lod",
	},
	{
		"title": "Move Your Feet",
		"artist": "Junior Senior",
		"imageURL": "https://images-na.ssl-images-amazon.com/images/I/51hGF-ePp1L._AC_US500_FMwebp_QL65_.jpg",
		"playURL": "https://open.spotify.com/track/7cGfrVoC7G03XeXn7yflx5",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	// everything inside this function happens as soon as the page loads!
	$("button").click(function(){
	
	// for ( var sentence =0; sentence <4; sentence=sentence +1) { 
           
	// var input = $("input").val(); 
	
	// }
	
    var object =addSong();
	// console.log(input)
	
	

displaySong(mySong);
displayList(myPlayList);
	});




// displaySong uses the properties in the songObject to create an HTML element for a single song
//	  and appends the element to the playlist on the page
function displaySong(songObject){

$("body").append("<div id= 'display'> </div>");
 $("#display").append('<p>'+songObject.title+'</p>');
    $("#display").append('<p>'+songObject.artist+'</p>');
    $("#display").append('<a href='+songObject.playURL + '>Play link'+'</a>');
    $("#display").append(' <p> <img src='+songObject.imageURL+'> </p>');
    

}

// displayList takes in an array of song objects, and it uses the information from each song object
//    to create an HTML element and append it to the playlist on the page
function displayList(songsArray){

//var newsong[?].type this is just an example ... notes
for (var i = 0; i < myPlayList.length; i++){
	
	$("body").append("<div id= 'display'> </div>");
    $("#display").append("<p>" +myPlayList[i].title +"<p>");
    $("#display").append("<p>" +myPlayList[i].artist +"<p>");
    $("#display").append("<p><a href=" +myPlayList[i].playURL +">Song link<a></p>");
    $("#display").append("<p> <img src=" +myPlayList[i].imageURL +"> </p>");
   
    
}
    
}

// clearList removes all the content from the playlist on the page
function clearList(){



}

// addSong takes inputs from the input boxes, organizes them into a new song object, and
//    pushes a new song to the playlist array
function addSong(something){

var a =$("#Title").val();
var b = $("#Artist").val();
var c = $("#PlayURL").val();
var d = $("#ImageURL").val();

var newsong = {
	
	 "title": a,
	 "artist": b,
	"imageURL": c,
	 "playURL": d,
	
};
console.log(newsong);

// var  song = displayList(newsong);

}
});