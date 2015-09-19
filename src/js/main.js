// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.104892, lng: 9.456656},
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
/*  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
*/

  var myLocations = [
  	{
  		name: 'France/Paris',
  		lat: 48.854759,
  		lng: 2.305080
  	},
  	{
  		name: 'Israel-Palestina/Ierusalim-Bhyfleem',
  		lat: 31.709661,
  		lng: 35.202141
  	},
  	{
  		name: 'Egypt/Hurgada',
  		lat: 27.082086,
  		lng: 33.860678
  	},
  	{
  		name: 'Egypt/Sharm-el-Sheikh',
  		lat: 27.861737,
  		lng: 34.317525
  	},
  	{
  		name: 'Thailand/Bangkok',
  		lat: 13.757128,
  		lng: 100.502351
  	},
  	{
  		name: 'Thailand/Pattaya',
  		lat: 12.930780,
  		lng: 100.880055
  	},
  	{
  		name: 'USA/New York',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'USA/Chicago',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'USA/Boston',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Germany/Berlin',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Finland/Helsinki',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Norway/Oslo',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Sweden/Stockholm',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Lithuania/Vilnus',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Belarus/Minsk',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Russia/Moscow',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Russia/Saint-Petersburg',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Russia/Kursk',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Russia/Belgorod',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'UAE/Dubai',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Kazakhstan/Almata',
  		lat: 55.217734,
  		lng: 37.172017
  	},
  	{
  		name: 'Turkey/Istambul',
  		lat: 55.217734,
  		lng: 37.172017
  	}
  ];

  var markers = [];
  for (loc in myLocations) {
  	console.log(myLocations[loc]);
  	var marker = new google.maps.Marker({
    	position: myLocations[loc],
    	map: map,
    	title: myLocations[loc].name
  	});
  	markers.push(marker);
  }
/*  // [START region_getplaces]
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  // [END region_getplaces]
*/
}