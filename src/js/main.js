//'use strict';

// TODO:
// 0. Display photos of each place
// 1. Menu button in right menu should be fixed during scrolling
// 2. Color visited countries
// 3. Popup big photo after clicking on small icon
// 4. Create feature to add new locations via UI
// 5. Error handling during working with Flickr API

var model = {
    // array with all visited locations
    locations: [
        /*		{
        			continent: 'Europe',
        			country: 'France',
        			city: 'Paris',
        			type: 'exact',
        			date: 'TBD',
        			lat: 48.854759,
        			lng: 2.305080,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Asia',
        			country: 'Israel',
        			city: 'Bhethlehem',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 31.709661,
        			lng: 35.202141,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Asia',
        			country: 'Israel',
        			city: 'Jerusalem',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 31.778245,
        			lng: 35.229397,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Asia',
        			country: 'Israel',
        			city: 'Jericho',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 31.855132,
        			lng: 35.458276,
        			hotel: 'TBD'
        		},*/
        {
            continent: 'Africa',
            country: 'Egypt',
            city: 'Luxor',
            type: 'so-so',
            date: 'TBD',
            lat: 25.714124,
            lng: 32.649766,
            hotel: 'TBD'
        }, {
            continent: 'Africa',
            country: 'Egypt',
            city: 'Hurgada',
            type: 'so-so',
            date: 'TBD',
            lat: 27.082086,
            lng: 33.860678,
            hotel: 'TBD'
        },
        /*		{
        			continent: 'Africa',
        			country: 'Egypt',
        			city: 'Sharm-el-Sheikh',
        			type: 'exact',
        			date: 'TBD',
        			lat: 27.861737,
        			lng: 34.317525,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Asia',
        			country: 'Thailand',
        			city: 'Bangkok',
        			type: 'exact',
        			date: 'TBD',
        			lat: 13.757137,
        			lng: 100.502789,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Asia',
        			country: 'Thailand',
        			city: 'Pattaya',
        			type: 'exact',
        			date: 'TBD',
        			lat: 12.930813,
        			lng: 100.880119,
        			hotel: 'TBD'
        		},*/
        {
            continent: 'North America',
            country: 'USA',
            city: 'New York',
            type: 'so-so',
            date: 'TBD',
            lat: 40.621153,
            lng: -73.998114,
            hotel: 'TBD'
        }, {
            continent: 'North America',
            country: 'USA',
            city: 'Chicago',
            type: 'so-so',
            date: 'TBD',
            lat: 41.883543,
            lng: -87.795953,
            hotel: 'TBD'
        },
        /*		{
        			continent: 'North America',
        			country: 'USA',
        			city: 'Boston',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 42.362860,
        			lng: -71.118612,
        			hotel: 'TBD'
        		},*/
        {
            continent: 'North America',
            country: 'USA',
            city: 'Niagara Falls',
            type: 'so-so',
            date: 'TBD',
            lat: 43.090628,
            lng: -79.058927,
            hotel: 'TBD'
        },
        /*		{
        			continent: 'Europe',
        			country: 'Germany',
        			city: 'Berlin',
        			type: 'exact',
        			date: 'TBD',
        			lat: 52.501939,
        			lng: 13.384981,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Europe',
        			country: 'Finland',
        			city: 'Helsinki',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 60.171040,
        			lng: 24.939737,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Europe',
        			country: 'Norway',
        			city: 'Oslo',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 59.913331,
        			lng: 10.749411,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Europe',
        			country: 'Sweden',
        			city: 'Stockholm',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 59.327510,
        			lng: 18.070844,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Europe',
        			country: 'Lithuania',
        			city: 'Kaunas',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 54.898163,
        			lng: 23.897247,
        			hotel: 'TBD'
        		},*/
        {
            continent: 'Europe',
            country: 'Lithuania',
            city: 'Vilnus',
            type: 'exact',
            date: 'TBD',
            lat: 54.674072,
            lng: 25.285036,
            hotel: 'TBD'
        },
        /*		{
        			continent: 'Europe',
        			country: 'Belarus',
        			city: 'Minsk',
        			type: 'exact',
        			date: 'TBD',
        			lat: 53.627318,
        			lng: 27.977858,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Europe',
        			country: 'Russia',
        			city: 'Moscow',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 55.775691,
        			lng: 37.586972,
        			hotel: 'TBD'
        		},
        		{
        			continent: 'Europe',
        			country: 'Russia',
        			city: 'Vladimir',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 56.128201,
        			lng: 40.403193,
        			hotel: 'TBD'
        		},*/
        {
            continent: 'Europe',
            country: 'Russia',
            city: 'Saint-Petersburg',
            type: 'exact',
            date: 'TBD',
            lat: 59.932236,
            lng: 30.353496,
            hotel: 'TBD'
        }, {
            continent: 'Europe',
            country: 'Russia',
            city: 'Kursk',
            type: 'exact',
            date: 'TBD',
            lat: 51.748547,
            lng: 36.189659,
            hotel: 'TBD'
        }, {
            continent: 'Europe',
            country: 'Russia',
            city: 'Belgorod',
            type: 'so-so',
            date: 'TBD',
            lat: 50.599392,
            lng: 36.591674,
            hotel: 'TBD'
        },
        /*		{
        			continent: 'Asia',
        			country: 'UAE',
        			city: 'Dubai',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 25.203156,
        			lng: 55.270310,
        			hotel: 'TBD'
        		},*/
        {
            continent: 'Asia',
            country: 'Kazakhstan',
            city: 'Almaty',
            type: 'exact',
            date: 'TBD',
            lat: 43.382937,
            lng: 77.128332,
            hotel: 'TBD'
        }, {
            continent: 'Asia',
            country: 'Turkey',
            city: 'Istambul',
            type: 'exact',
            date: 'TBD',
            lat: 41.010213,
            lng: 28.977798,
            hotel: 'TBD'
        }
        /*,
        		{
        			continent: 'Asia',
        			country: 'Kambodga',
        			city: 'Siem Reap',
        			type: 'exact',
        			date: 'TBD',
        			lat: 13.341384,
        			lng: 103.836862,
        			hotel: 'TBD'
        		}*/
    ],
    // arrau with markers to display
    markers: [],
    // object of all photos in Flickr
    // structure:
    // collectionsFlickr = {
    // 		city: {					// collection name = city to display
    //			collectionId: num,	// collection id from Flickr
    //			photo: [			// array with photos.
    //						{
    //							farm,
    //							secret,
    //							server,
    //							id
    //						}
    //					]
    //		}
    //}
    collectionsFlickr: {},
    // url ti use Flickr API to receive all my collections
    collections: 'https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=add569cf17f09054f7b288308a48fc6a&format=json&nojsoncallback=1&auth_token=72157659011492662-3a26f5b289fe074d&api_sig=db10204ed665b17c3c8126589c667107'
};

// initialize Google Map via API
var initMap = function() {
    // display map in element with id 'map'
    var map = new google.maps.Map(document.getElementById('map'), {
        // center map somewhere near Italy :)
        center: {
            lat: 39.104892,
            lng: 9.456656
        },
        zoom: 3,
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
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

    // add markers on map according to locations in model
    addMarkers(map);
};

// function to add markers on map
// parameter:
// 		map - map where markers will be displayed
var addMarkers = function(map) {
    var loc;
    // iterate through all locations in model
    for (loc in model.locations) {
        // create new marker at specified position
        var marker = new google.maps.Marker({
            position: model.locations[loc],
            map: map,
            title: model.locations[loc].country + '-' + model.locations[loc].city
        });
        // push marker into array of markers in model
        model.markers.push(marker);
    }
};

/*var Place = function (data) {
	this.continent = ko.observable(data.continent);
	this.country = ko.observable(data.country);
	this.city = ko.observable(data.city);
	this.type = ko.observable(data.type);
	this.date = ko.observable(data.date);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);
	this.hotel = ko.observable(data.hotel);
};*/


var flickrCollectionRequestTimeout = setTimeout(function() {
    alert('Failed to get Flickr resources');
}, 8000);

$.ajax({
    url: model.collections,
    dataType: 'json',
    success: function(response) {
        handleCollections(response);
        clearTimeout(flickrCollectionRequestTimeout);
    }
});

var handleCollections = function(responseData) {
    var collectionsList = responseData.collections.collection;

    for (var i = 0; i < collectionsList.length; i++) {
        model.collectionsFlickr[collectionsList[i].title] = {
            'collectionId': collectionsList[i].id
        };
    }
};

var findPhotosFromCollection = function(city) {
    var flickrPhotosRequestTimeout = setTimeout(function() {
        alert('Failed to get Flickr resources');
    }, 8000);

    photos = 'https://api.flickr.com/services/rest/?method=flickr.collections.getInfo&api_key=add569cf17f09054f7b288308a48fc6a&collection_id=' + model.collectionsFlickr[city].collectionId + '&format=json&nojsoncallback=1&auth_token=72157659011492662-3a26f5b289fe074d&api_sig=9b8f107ded86fb6badaf8d7fc4dd259d';
    //photos = 'https://api.flickr.com/services/rest/?method=flickr.collections.getInfo&api_key=add569cf17f09054f7b288308a48fc6a&collection_id=136402781-72157659013876281&format=json&nojsoncallback=1&auth_token=72157659011492662-3a26f5b289fe074d&api_sig=9b8f107ded86fb6badaf8d7fc4dd259d'

    $.ajax({
        url: photos,
        dataType: 'json',
        success: function(response) {
            handlePhotos(response);
            clearTimeout(flickrPhotosRequestTimeout);
        }
    });

    var handlePhotos = function(responseData) {
        var photosList = responseData.collection.iconphotos.photo;
        model.collectionsFlickr[city].photo = photosList;
    };
};

var viewModel = function() {
    var self = this;

    // set height property to left and right sidebars
    self.infoHeight = ko.observable($(window).height() - 70);

    // set hiding logic for right sidebar
    self.isHiddenRight = ko.observable(true);
    self.toggleHiddenRight = function() {
    	// if it is hidden show it and vice versa
        self.isHiddenRight(!self.isHiddenRight());
        // if left menu is shown hide it
        if (!self.isHiddenLeft())
            this.toggleHiddenLeft();
    };

	// set hiding logic for left sidebar
    self.isHiddenLeft = ko.observable(true);
    self.toggleHiddenLeft = function() {
        self.isHiddenLeft(!self.isHiddenLeft());
    };

    // selected location from right sidebar
    // !!! may be removed later
    this.city = ko.observable();

    // show photos in left sidebar according to selected location
    // parameter:
    // 		place - selected from right sidebar location
    // !!! don't work now
    // !!! may be refactor later
    self.showPhotos = function(place) {
        this.city = place.city;
        findPhotosFromCollection(place.city);
        // show left sidebar if it is hidden
        if (self.isHiddenLeft())
            self.toggleHiddenLeft();
    };

    // observable for search input
    self.searchQuery = ko.observable();

    // locations array to display in right sidebar accordint to search input value
    // if search is empty - display all locations
    // if search is not empty and there are continent, country or city in search that
    // is presented in array of locations then display locations according ti this search
    // otherwise don't display anything
    this.places = ko.computed(function() {
        var places = [];
        if (self.searchQuery()) {
            var query = self.searchQuery().toLowerCase();
            for (var loc in model.locations) {
                if (model.locations[loc].continent.toLowerCase() === query ||
                    model.locations[loc].country.toLowerCase() === query ||
                    model.locations[loc].city.toLowerCase() == query)
                    places.push(model.locations[loc]);
            }
        } else
            places = model.locations;
        return places;
    });

    //this.photos = ko.computed(function() {
    this.photos = {
        imgSrc: [0, 0, 0],
        alt: ''
    };
    /*	for (ph in model.collectionsFlickr[this.city].photo) {
    		photos.imgSrc.push('https://farm' +
    							ph.farm +
    							'.staticflickr.com/' +
    							ph.server +
    							'/' +
    							ph.id +
    							'_' +
    							ph.secret +
    							'_m.jpg');
    	}
    });*/

};


ko.applyBindings(new viewModel());
