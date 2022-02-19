function initialize() {
  var  places = [
    ['Mirinka Kotze', 59.36637129990946, 17.99704471833556],
    ['Mall Haas', 59.431285281804556, 24.769260091156706],
    ['Raluca Băceanu', 44.423334155322735, 26.012878918115014],
    ['Hassen Ahmed ', 59.236069446273255, 17.839677400309043],
    ['Muzaffer Rende', 52.19343273416053, 20.899325058038187],
    ['Alex Ordynski', 49.23052066839969, 28.467679689472735]
    
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: new google.maps.LatLng(59.22079022762899, 17.937983317114234),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var newWindow= new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < places.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(places[i][1], places[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        newWindow.setContent(places[i][0]);
        newWindow.open(map, marker);
      }
    })(marker, i));
  }
}

function loadScript() {
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
    'callback=initialize';
document.body.appendChild(script);
}

window.onload = loadScript;

