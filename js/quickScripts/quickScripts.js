// get room info
tms.utils.socket({
  api: "room.info", 
  roomid: "4e726c6467db461e659e5503", 
  section: undefined, 
  userid: "4dfcdd564fe7d0250302b5a5", 
  userauth: "auth+live+42feffbb9f410823ef6a21a95d493f677b6a670f"
})
.done(function (data) {
  console.log(data);
}).fail(function (data) {
  console.log(data);
});

// get a playlist
tms.utils.socket({
  api: "playlist.all",
  playlist_name: "lounge soul and jazz",
  minimal: true
}).done(function (data) {
  console.log(data);
}).fail(function (data) {
  console.log(data);
});



// get all playlists

setInterval(
  function () {
    tms.utils.socket({
      api: "playlist.list_all",
      minimal: true
    }).done(function (data) {
      for(var i in data.list) {
        if (data.list[i].active) {
          console.log(data.list[i].name);
        }
      }
    }).fail(function (data) {
      console.log(data);
    });
  } ,3000);

// get metadata

// reorder playlist
tms.utils.socket({
  api: "playlist.get_metadata",
  playlist_name: "electronic remixes",
  files: ["50e5de512e3817179507862f"]
})
.done(function(data) { console.log(data); })
.fail(function(err){ console.log(err); });

// reorder playlist
tms.utils.socket({
  api: "playlist.reorder",
  playlist_name: "hip hop",
  index_from: 0,
  index_to: 42
})
.done(function(data) { console.log(data); })
.fail(function(err){ console.log(err); });

// tt search
tms.utils.socket({
  api: "file.search",
  query: "hip hop",
  page: 20
})
.done(function(data) { console.log(data); })
.fail(function(err){ console.log(err); });

// song vote
tms.utils.socket({
  api: "room.vote",
  clientid: "1361129614241-0.4148529104422778",
  msgid: 247,
  ph: "db98b877a085c168d349780bc8da1d7b017debff",
  roomid: "4e726c6467db461e659e5503",
  th: "15feaa4af21bf4c8692ea9986a599c0c0b7a4213",
  userauth: "auth+live+42feffbb9f410823ef6a21a95d493f677b6a670f",
  userid: "4dfcdd564fe7d0250302b5a5",
  val: "up",
  vh: "d5f85d244995769c95bd4195f71bd28081efb03b"
})
.done(function (data) {
  console.log(data);
}).fail(function (data) {
  console.log(data);
});


// get TT room obj
var room;
for (var i in turntable) { 
  if (turntable[i] && turntable[i].roomId) { 
    room = turntable[i]; 
    break; 
  } 
}

var roomView;
// get TT room actions obj
for (var x in room) { 
  if (room[x] && room[x].showHeart) { 
    console.log(room[x].showHeart);
    roomView = room[x]; 
    break; 
  } 
}

console.log(roomView);
roomView.showHeart('4dfcdd564fe7d0250302b5a5');







// unmute at end of song
javascriptfunction(){ var orig = httpStream.volume; httpStream.setVolume(0); var listener = function(_){ if( _.command && _.command == 'newsong' ){ turntable.removeEventListener('message',listener); httpStream.setVolume(orig); } }; turntable.addEventListener('message',listener); })();