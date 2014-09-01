var View = function() {

};

View.prototype = {
  renderView: function(text) {
    $('.preview p').html(text);
  }
};

var view = new View();
