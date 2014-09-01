var View = function() {
};

View.prototype = {
  renderView: function(text) {
    $('.preview p').html(text);
  }
};


var Controller = function(view) {
  this.view = view
}

Controller.prototype = {
  addListener: function() {
    $('[name="markdown-input"]').on('keyup', this.convertMarkdown.bind(this));
  },

  convertMarkdown: function (event) {
    var textToConvert = $(event.target).val();
    this.view.renderView(textToConvert);
  }
}



var view = new View();

var controller = new Controller(view);
controller.addListener();
