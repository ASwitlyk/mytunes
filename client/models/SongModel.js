// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // add properties - url, title, artist
  initialize: function(song){
    /*
    if(song) {
      this.set('url', song.url);
      this.set('title', song.title);
      this.set({artist: song.artist});
    }
*/
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  }

});
