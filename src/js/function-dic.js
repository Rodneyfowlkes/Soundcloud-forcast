import $ from 'Jquery';
import _ from 'lodash';

var client_id = "8762736d61261497aec348a0aff61e31";
var baseurl = "https://api.soundcloud.com";

var tracks;
var audio_src;
// var song_temp = `<div class="grid_point">
         
//          <div class="img_div"> <img class="items_img" src="${artwork}"> 
//          </div>
         
    
//           <div class="title_div"> <a href="#">${title}</a> </div>
 
//            <div class="song_artist_div"> <a href="${artist_url}">${artist}</a>  </div>


//         </div>`;







 var get_tracks = function(x){ $.ajax({ 
	url: `${baseurl}/tracks`,
	method: "GET",
	dateType:"json",
	data: {
	  client_id: client_id,
	  q: x,
	  limit:200,
	  linked_partitioning:3
	}

  }).then(function(obj) {
    
  	tracks = obj.collection;
  	console.log(tracks);
  	
  	tracks.forEach(function(y) {
    // console.log(y.title);   
    var title = y.title;
    var artwork = y.artwork_url;
    var artist = y.user.username;
    var artist_url = y.permalink_url;
    // console.log(artwork);
    audio_src = y.stream_url + "?client_id="+ client_id;
    if (artwork == null) {artwork = 'images/Doge_Head_PNG.png'};
    var song_temp = `<div class="grid_point">
         
         <div class="img_div"> <span class="retry">${audio_src}</span> <a class="streamtag" href="#"> <img class="items_img" src="${artwork}"> </a>
         </div>
         
    
          <div class="title_div"> <a href="#">${title}</a> </div>
 
           <div class="song_artist_div"> <a href="${artist_url}">${artist}</a>  </div>


        </div>`;



    $(".loaded_song_div").append(song_temp);




});  
console.log(audio_src);


$(".grid_point").on('click',function(x) {
console.log(x);
event.preventDefault(); 
 var item_sound = x.currentTarget.firstElementChild.innerText;
 console.log(item_sound);
	$("#current_song").attr('src', `${item_sound}`);
	return false;
} );
 });   ;}

// $(".streamtag").on('click', function(){ event.preventDefault();});




 var getAudio = function(x){$.ajax(
 	{url: 'https://api.soundcloud.com/tracks/271870602/stream',

 	method: "GET",
 	
 	data: {
	  client_id: client_id,
      allow_redirects: false
	  }



}).then(function(obj){

$(".current_song").attr('src', `https://api.soundcloud.com/tracks/271870602/stream?client_id=8762736d61261497aec348a0aff61e31`);

})


};

 









 export {get_tracks, getAudio};