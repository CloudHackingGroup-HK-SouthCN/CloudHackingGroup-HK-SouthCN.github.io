(function() {
  $(window).resize(function() {
    if ($('.navbar-collapse.collapse').hasClass('in')) {
      $('.navbar-header .navbar-toggle').trigger('click');
    }
  });
})();
