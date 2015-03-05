---
---

$ ->
  return unless $("#cnpaas").data("env") in ["production", "staging"]
  window._hmt ||= []
  `(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?92fc18cd01aed45595099e183a15b189";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();`
