//'use strict';
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.



var model = {
	locations: [
		{
			continent: 'Europe',
			country: 'France',
			city: 'Paris',
			type: 'exact',
			date: 'TBD',
			lat: 48.854759,
			lng: 2.305080
		},
		{
			continent: 'Asia',
			country: 'Israel',
			city: 'Bhethlehem',
			type: 'so-so',
			date: 'TBD',
			lat: 31.709661,
			lng: 35.202141
		},
		{
			continent: 'Asia',
			country: 'Israel',
			city: 'Jerusalem',
			type: 'so-so',
			date: 'TBD',
			lat: 31.778245,
			lng: 35.229397
		},
		{
			continent: 'Asia',
			country: 'Israel',
			city: 'Jericho',
			type: 'so-so',
			date: 'TBD',
			lat: 31.855132,
			lng: 35.458276
		},
		{
			continent: 'Africa',
			country: 'Egypt',
			city: 'Luxor',
			type: 'so-so',
			date: 'TBD',
			lat: 25.714124,
			lng: 32.649766
		},
		{
			continent: 'Africa',
			country: 'Egypt',
			city: 'Hurgada',
			type: 'so-so',
			date: 'TBD',
			lat: 27.082086,
			lng: 33.860678
		},
		{
			continent: 'Africa',
			country: 'Egypt',
			city: 'Sharm-el-Sheikh',
			type: 'exact',
			date: 'TBD',
			lat: 27.861737,
			lng: 34.317525
		},
		{
			continent: 'Asia',
			country: 'Thailand',
			city: 'Bangkok',
			type: 'exact',
			date: 'TBD',
			lat: 13.757137,
			lng: 100.502789
		},
		{
			continent: 'Asia',
			country: 'Thailand',
			city: 'Pattaya',
			type: 'exact',
			date: 'TBD',
			lat: 12.930813,
			lng: 100.880119
		},
		{
			continent: 'North America',
			country: 'USA',
			city: 'New York',
			type: 'so-so',
			date: 'TBD',
			lat: 40.621153,
			lng: -73.998114
		},
		{
			continent: 'North America',
			country: 'USA',
			city: 'Chicago',
			type: 'so-so',
			date: 'TBD',
			lat: 41.883543,
			lng: -87.795953
		},
		{
			continent: 'North America',
			country: 'USA',
			city: 'Boston',
			type: 'so-so',
			date: 'TBD',
			lat: 42.362860,
			lng: -71.118612
		},
		{
			continent: 'North America',
			country: 'USA',
			city: 'Boston',
			type: 'so-so',
			date: 'TBD',
			lat: 43.090628,
			lng: -79.058927
		},
		{
			continent: 'Europe',
			country: 'Germany',
			city: 'Berlin',
			type: 'exact',
			date: 'TBD',
			lat: 52.501939,
			lng: 13.384981
		},
		{
			continent: 'Europe',
			country: 'Finland',
			city: 'Helsinki',
			type: 'so-so',
			date: 'TBD',
			lat: 60.171040,
			lng: 24.939737
		},
		{
			continent: 'Europe',
			country: 'Norway',
			city: 'Oslo',
			type: 'so-so',
			date: 'TBD',
			lat: 59.913331,
			lng: 10.749411
		},
		{
			continent: 'Europe',
			country: 'Sweden',
			city: 'Stockholm',
			type: 'so-so',
			date: 'TBD',
			lat: 59.327510,
			lng: 18.070844
		},
		{
			continent: 'Europe',
			country: 'Lithuania',
			city: 'Kaunas',
			type: 'so-so',
			date: 'TBD',
			lat: 54.898163,
			lng: 23.897247
		},
		{
			continent: 'Europe',
			country: 'Lithuania',
			city: 'Vilnus',
			type: 'exact',
			date: 'TBD',
			lat: 54.674072,
			lng: 25.285036
		},
		{
			continent: 'Europe',
			country: 'Belarus',
			city: 'Minsk',
			type: 'exact',
			date: 'TBD',
			lat: 53.627318,
			lng: 27.977858
		},
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Moscow',
			type: 'so-so',
			date: 'TBD',
			lat: 55.775691,
			lng: 37.586972
		},
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Vladimir',
			type: 'so-so',
			date: 'TBD',
			lat: 56.128201,
			lng: 40.403193
		},
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Saint-Petersburg',
			type: 'exact',
			date: 'TBD',
			lat: 59.932236,
			lng: 30.353496
		},
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Kursk',
			type: 'exact',
			date: 'TBD',
			lat: 51.748547,
			lng: 36.189659
		},
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Belgorod',
			type: 'so-so',
			date: 'TBD',
			lat: 50.599392,
			lng: 36.591674
		},
		{
			continent: 'Asia',
			country: 'UAE',
			city: 'Dubai',
			type: 'so-so',
			date: 'TBD',
			lat: 25.203156,
			lng: 55.270310
		},
		{
			continent: 'Asia',
			country: 'Kazakhstan',
			city: 'Almata',
			type: 'exact',
			date: 'TBD',
			lat: 43.382937,
			lng: 77.128332
		},
		{
			continent: 'Asia',
			country: 'Turkey',
			city: 'Istambul',
			type: 'exact',
			date: 'TBD',
			lat: 41.010213,
			lng: 28.977798
		},
		{
			continent: 'Asia',
			country: 'Kambodga',
			city: 'Siem Reap',
			type: 'exact',
			date: 'TBD',
			lat: 13.341384,
			lng: 103.836862
		}
	],
	markers: []
};

var initMap = function () {
	var map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 39.104892, lng: 9.456656},
    	zoom: 3,
    	mapTypeControl: true,
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControlOptions: {
        	position: google.maps.ControlPosition.LEFT_BOTTOM
    	},
    	zoomControl: true,
	    zoomControlOptions: {
        	position: google.maps.ControlPosition.LEFT_CENTER
    	},
    	streetViewControl: true,
    	streetViewControlOptions: {
        	position: google.maps.ControlPosition.LEFT_CENTER
	    }
  	});

	addMarkers(map);
};

var addMarkers = function (map) {
	var loc;
  	for (loc in model.locations) {
  		var marker = new google.maps.Marker({
    		position: model.locations[loc],
    		map: map,
    		title: model.locations[loc].country + '-' + model.locations[loc].city
  		});
  		model.markers.push(marker);
  	}
};

var viewModel = function () {
	$("#info").css("height", $(window).height()-30);

	placesList = $('#info-list');
	placesList.html('');
    placeTemplate = $('script[data-template="place"]').html();
    var loc;
	for (loc in model.locations) {
		var thisTemplate = placeTemplate.replace('{{Country}}', model.locations[loc].country);
		thisTemplate = thisTemplate.replace('{{City}}', model.locations[loc].city);
		thisTemplate = thisTemplate.replace('{{date}}', model.locations[loc].date);
        placesList.append(thisTemplate);
	}
};


ko.applyBindings(new viewModel());
