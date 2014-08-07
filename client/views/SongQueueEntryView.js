// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  initialize: function(){
    this.model.on('change', this.render());
  },

  template: _.template('<td class="song">(<%= artist %>)</td><td class="song"><%= title %></td>'),
  // events: {
  //   'click .song': function() {
  //     this.model.play();
  //   },
  //   'click .queue' : function(){
  //     this.model.enqueue();
  //   }
  // },

  render: function(){
    console.log( this.$el.html(this.template(this.model.attributes)) );
  }

});
