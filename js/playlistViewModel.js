(function () {
  tms.viewmodels.PlaylistViewModel = function (model) {
    model = model || {};
    var self = this;

    self.name = ko.observable(model.name);
    self.active = ko.observable(model.active);
    self.songIds = ko.observableArray(model.songIds);
    self.songs = ko.observableArray(model.songs);
  };


  // flatten ttListData array object to just the id values
  function parseIds (idList) {
    var ids = [];
    for (var x in idList) { ids.push(idList[x]._id); }
    return ids;
  }

  tms.factories.playlistFactory = function(ttListData, ttPlaylist) {
    var model = {
      songIds: parseIds(ttListData.list),
      name: ttListData.name,
      active: ttListData.active,
      songs: []
    };

    // create song viewmodels from cached data
    // NOTE: need to loop in correct direction to account for song order
    // for(var i = model.songIds.length; i >= 0; i--) {
    for (var i in model.songIds) {
      var song = ttPlaylist.cache.getItem(model.songIds[i]);
      if (!song || !song.metadata) {
        console.log("no meta data found for songId: " + model.songIds[i]);
      } else {
        song.queuePosition = parseInt(i, 10) + 1;
        model.songs.push(new tms.viewmodels.SongViewModel(song)); 
      }
    }

    return new tms.viewmodels.PlaylistViewModel(model);
  };
})();