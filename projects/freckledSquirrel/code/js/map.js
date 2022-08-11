/* Work on a custom info window with no option to close */

var black = '#000000'
var grey = '#AAAAAA'
var cream = '#FFFDD0'
var dkGreen = '#263C3F'
var dkBlue = '#17263C'

var geometryFill = grey;
var textFill = black;
var textStroke = grey;
var water = dkBlue;
var parks = dkGreen;
var roads = black;

function initMap() {
  var location = {lat: 47.623, lng: -122.353};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location,
    disableDefaultUI: true,
    gestureHandling: 'none',
    styles: [{elementType: 'geometry', stylers: [{color: geometryFill}]},
            {elementType: 'labels.text.stroke', stylers: [{color: textStroke}]},
            {elementType: 'labels.text.fill', stylers: [{color: textFill}]},
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: roads}]
            },
            {
              featureType: 'administrative',
              elementType: 'labels',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: parks}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: water}]
            },
            {
              featureType: 'poi.attraction',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.business',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.government',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.medical',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.place_of_worship',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.school',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{visibility: 'off'}]
            }
          ]
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: 'img/squirrel32.png',
    title: 'The Freckled Squirrel'
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'The Freckled Squirrel',

  });
  infowindow.open(map, marker);
};
