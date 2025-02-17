document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("H").addEventListener('mouseenter', function() {
    document.getElementById('shoe').src = "https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dwcaf599de/firstspirit/converse-uk/media/homepage_1/2025_spring/D-Converse-Homepage-P2A-High-Tops.jpg";
  });

  document.getElementById("L").addEventListener('mouseenter', function() {
    document.getElementById('shoe').src = "https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dw6bc56c5b/firstspirit/converse-uk/media/homepage_1/2025_spring/D-Converse-Homepage-P2B-Low-Tops.jpg";
  });

  document.getElementById("P").addEventListener('mouseenter', function() {
    document.getElementById('shoe').src = "https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dwd7cbc3ea/firstspirit/converse-uk/media/homepage_1/2025_spring/D-Converse-Homepage-P2C-Platforms.jpg";
  });

  document.getElementById("C").addEventListener('mouseenter', function() {
    document.getElementById('shoe').src = "https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dwcb592d9f/firstspirit/converse-uk/media/homepage_1/2025_spring/D-Converse-Homepage-P2D-Custom.gif";
  });
});


var m = document.getElementById('main-nav');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == m) 
    m.style.display = "none";
  }
