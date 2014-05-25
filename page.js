var started = false;
var currentPage = false;

module.exports = {
  load: function(files,done) {
    // var page = elem.lib.page.exports;
    var route = this.getAttribute('route');
    var self = this;

    // $(this).addClass('hide');

    if(route) {
      page(route, function() {

        if(self != currentPage) {
          $(currentPage).trigger('hide', self);
          $(self).trigger('show', currentPage);
          currentPage = self;
          done();
        }
      });


      if(!started) {
        page.start();
        started = true;
      }

      var url = location.pathname + location.search + location.hash;
      page.replace(url, null, true);
    }

  }
, show: function() {
    if(currentPage) {
      $(currentPage).trigger('hide', this);
    }

    currentPage = self;

    $(this).removeClass('hide').addClass('show');
  }

, hide: function() {
    $(this).removeClass('show').addClass('hide');
  }
}
