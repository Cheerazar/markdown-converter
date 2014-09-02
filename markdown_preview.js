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
    var convertedMarkdown = this.convertMarkdownToHtml(textToConvert);
    this.view.renderView(convertedMarkdown);
  },

  markdownReplacer: function (match, p1, p2, p3, offset, string) {
    return '<em>' + p2 + '</em>';
  },

  convertMarkdownToHtml: function(textToConvert) {
    return textToConvert.replace(/(\*)(.*)(\*)/, this.markdownReplacer);
  }
}



var view = new View();

var controller = new Controller(view);
controller.addListener();
