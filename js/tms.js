/**
 * Setup global namespace for TMS 
 */
var tms = {
	utils: {},
  viewmodels: {},
  factories: {},
  app: {},
  events: {
    // events sent to the TT sandbox
    tt: {
      initInfo: "tms.tt.initInfo",
      showHeart: "tms.tt.showHeart",
      showMessage: "tms.tt.showMessage",
      playSample: "tms.tt.playSample",
      pauseSample: "tms.tt.pauseSample",
      cache: {
        get: "tms.tt.playlistCache.get",
        set: "tms.tt.playlistCache.set"
      },
      api: {
        room: "tms.tt.api.roominfo",
        playlists: "tms.tt.api.playlists",
        playlist: "tms.tt.api.playlist",
        song: "tms.tt.api.song",
        snag: "tms.tt.api.snagSong",
        vote: "tms.tt.api.vote",
        search: "tms.tt.api.search"
      },
      playlist: {
        reorder: "tms.tt.api.playlist.reorder",
        add: "tms.tt.api.playlist.add",
        remove: "tms.tt.api.playplist.remove",
        change: "tms.tt.api.playlist.switch",
        songData: "tms.tt.api.playlist.songData"
      }
    },
    // event sent to the Content scripts
    ext: { 
      initInfo: "tms.ext.initInfo",
      registered: "tms.ext.userRegistered",
      snag: "tms.ext.snag",
      vote: "tms.ext.vote",
      songChange: "tms.ext.songChange",
      sampleProgress: "tms.tt.sampleProgress",
      cache: {
        get: "tms.ext.playlistCache.get"
      },
      api: {
        room: "tms.ext.api.roominfo",
        playlists: "tms.ext.api.playlists",
        playlist: "tms.ext.api.playlist",
        song: "tms.ext.api.song",
        snag: "tms.ext.api.snagSong",
        vote: "tms.ext.api.vote",
        search: "tms.ext.api.search"
      },
      playlist: {
        reorder: "tms.ext.api.playlist.reorder",
        add: "tms.ext.api.playlist.add",
        remove: "tms.ext.api.playplist.remove",
        change: "tms.ext.api.playlist.switch",
        songData: "tms.ext.api.playlist.songData"
      }
    }
	}
};