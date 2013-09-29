(function($) {
  $(window).ready(function() {
    var deferreds = [];
    $('.carousel').find('img').each(function() {
      var src = $(this).attr('data-src');
      if (src) {
        var d = $.Deferred();
        $(this).one('load', d.resolve)
               .attr('src', src)
               .attr('data-src', '');
        deferreds.push(d.promise());
      }
    });
  });
  
  $('.oh-show-more').click(function(e) {
    e.preventDefault();
    var classname = $(e.target).attr('data-class');
    console.log(classname);
    $(document.body).addClass(classname);
  });
  
})(jQuery);
