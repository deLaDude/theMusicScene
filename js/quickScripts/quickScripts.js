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
tms.utils.socket({
  api: "playlist.list_all",
  minimal: true
}).done(function (data) {
  for(var i in data.list) {
    console.log(data.list[i].name + " " + data.list[i].active);
  }
}).fail(function (data) {
  console.log(data);
});

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
























// unmute at end of song
javascriptfunction(){ var orig = httpStream.volume; httpStream.setVolume(0); var listener = function(_){ if( _.command && _.command == 'newsong' ){ turntable.removeEventListener('message',listener); httpStream.setVolume(orig); } }; turntable.addEventListener('message',listener); })();