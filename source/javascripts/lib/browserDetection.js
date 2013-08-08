// Browser detection
(function(doc) {
var viewport = document.getElementById('viewport');
if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
  doc.getElementById("viewport").setAttribute("content", "initial-scale=0.7, user-scalable=0");
} else if ( navigator.userAgent.match(/iPad/i) ) {
  doc.getElementById("viewport").setAttribute("content", "initial-scale=1, user-scalable=0");
}
}(document));