(function() {
  $(function() {
    var ref;
    if ((ref = $("#cnpaas").data("env")) !== "production" && ref !== "staging") {
      return;
    }
    window._hmt || (window._hmt = []);
    return (function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?92fc18cd01aed45595099e183a15b189";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();;
  });

}).call(this);
