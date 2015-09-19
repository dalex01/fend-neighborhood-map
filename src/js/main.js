var map;
function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.751244, lng: 37.618423},
    scrollwheel: false,
    zoom: 10
  });
}