jQuery(document).ready(function($){

  pos_lat = $('#mapid').data('position-lat');
  pos_long =  $('#mapid').data('position-long');
  pos_level =  $('#mapid').data('level');

  
  var mymap = L.map('mapid').setView([pos_lat, pos_long], pos_level);

  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    //id: 'jaeklar.2mi32ppm', // Fablab Light
    //id: 'jaeklar.2mm2demf', // Fablab Streets
    id: 'jaeklar.2mm22g0g', // Fablab Streets classic
    accessToken: 'pk.eyJ1IjoiamFla2xhciIsImEiOiJjaXk0eHpleGgwMDNmMnFwMTNsem1oNHpzIn0.le7NWYrSYV2jTlIdEp3JEw'
  }).addTo(mymap);
  
  /*
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/ciy5pnpaw004e2sofdlk0ogwn/tiles/256/{level}/{col}/{row}@2x?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jaeklar',
    accessToken: 'pk.eyJ1IjoiamFla2xhciIsImEiOiJjaXk0eHpleGgwMDNmMnFwMTNsem1oNHpzIn0.le7NWYrSYV2jTlIdEp3JEw'
  }).addTo(mymap);
*/

  var marker = L.marker([pos_lat, pos_long]).addTo(mymap);

  function onMapClick(e) {
    $('#map-longlat').val(e.latlng.lat + ', ' + e.latlng.lng);
    marker
        .setLatLng(e.latlng);
  }

mymap.on('click', onMapClick);

});