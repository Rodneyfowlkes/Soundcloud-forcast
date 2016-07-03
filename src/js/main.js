import $ from 'Jquery';
import _ from 'lodash';
import {get_tracks,  getAudio} from "./function-dic.js";

var client_id = "8762736d61261497aec348a0aff61e31";

//var baseurl = "https://api.soundcloud.com/users/8482005?client_id=${client_id}";
var baseurl = "https://api.soundcloud.com";

var tracks;



 
 // var get_tracks = function(x){ $.ajax({ 
	// url: `${baseurl}/tracks`,
	// method: "GET",
	// dateType:"json",
	// data: {
	//   client_id: client_id,
	//   q: x,
	//   limit:200,
	//   linked_partitioning:3
	// }

 //  }).then(function(obj) {
    
 //  	tracks = obj.collection;
 //  	console.log(tracks);
  	
 //  	tracks.forEach(function(y) {
 //    console.log(y.title);

 //  	}); 
  





 //  });


 // ;}





get_tracks();

getAudio();

// $.ajax({
// 	url: `baseurl/tracks`,
// 	data: {
// 		q: 'buskers',
// 		license: 'cc-by-sa'
// 	}
// })