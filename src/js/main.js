//'use strict';

// TODO:
// 1. Menu button in right menu should be fixed during scrolling
// 2. Create feature to add new locations via UI
// 3. Create feature to choose on which field we want to search.
// 4. Convert all css to BEM
// 5. Make gray background during big photo displaying
// 6. Use localStorage and Firebase to configure locations and restore previous state of application

var initAll = function() {
	var model = {
	    // array with all visited locations
	    locations: [
			{
				continent: 'Europe',
				country: 'France',
				country_code: 'fr',
				city: 'Paris',
				type: 'exact',
				month: 'April',
				year: '2011',
				lat: 48.854759,
				lng: 2.305080,
				hotel: 'Hôtel Prince',
				address: '66 Avenue Bosquet, 07. Tour Eiffel - Invalides, Paris, 75007, France',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
	        		/*{
	        			continent: 'Asia',
	        			country: 'Israel',
	        			country_code: 'il',
	        			city: 'Bhethlehem',
	        			type: 'so-so',
	        			month: 'April',
	        			year: '2015',
	        			lat: 31.709661,
	        			lng: 35.202141,
	        			hotel: 'Don\'t remember,
	        			address: 'Don\'t remember',
	        			marker: null,
	        			iw_content: '',
	        			company: 2,
	        			photos: []
	        		},*/
			{
				continent: 'Asia',
				country: 'Israel',
				country_code: 'il',
				city: 'Jerusalem',
				type: 'so-so',
				month: 'April',
				year: '2015',
				lat: 31.778245,
				lng: 35.229397,
				hotel: 'Not applicable',
				address: 'Not applicable',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
	        		/*{
	        			continent: 'Asia',
	        			country: 'Israel',
	        			country_code: 'il',
	        			city: 'Jericho',
	        			type: 'so-so',
	        			month: 'April',
	        			year: '2015',
	        			lat: 31.855132,
	        			lng: 35.458276,
	        			hotel: 'Not applicable',
	        			address: 'Not applicable',
	        			marker: null,
	        			iw_content: '',
	        			company: 2,
	        			photos: []
	        		},*/
	        {
	            continent: 'Africa',
	            country: 'Egypt',
	            country_code: 'eg',
	            city: 'Luxor',
	            type: 'so-so',
	            month: 'September',
	            year: '2010',
	            lat: 25.714124,
	            lng: 32.649766,
	            hotel: 'Not applicable',
	            address: 'Not applicable',
	            marker: null,
	            iw_content: '',
	            company: 10,
	        	photos: []
	        },
	        {
	            continent: 'Africa',
	            country: 'Egypt',
	            country_code: 'eg',
	            city: 'Hurghada',
	            type: 'so-so',
	            month: 'September',
	            year: '2010',
	            lat: 27.082086,
	            lng: 33.860678,
	            hotel: 'Don\'t remember',
	            address: 'Don\'t remember',
	            marker: null,
	            iw_content: '',
	            company: 10,
	        	photos: []
	        },
	        /*		{
	        			continent: 'Africa',
	        			country: 'Egypt',
	        			country_code: 'eg',
	        			city: 'Sharm-el-Sheikh',
	        			type: 'exact',
	        			month: 'April',
	        			year: '2015',
	        			lat: 27.861737,
	        			lng: 34.317525,
	        			hotel: 'Royal Grand Sharm',
	        			address: 'Om El-Seid Hill Sharm El-Sheikh, Qesm Sharm Ash Sheikh, South Sinai Governorate, Egypt',
	        			marker: null,
	        			iw_content: '',
	        			photos: []
	        		},*/
			{
				continent: 'Asia',
				country: 'Thailand',
				country_code: 'th',
				city: 'Bangkok',
				type: 'exact',
				month: 'September',
				year: '2011',
				lat: 13.757137,
				lng: 100.502789,
				hotel: 'Siamese Views Lodge',
				address: '211/21-23 Soi Damneon Klang Nuea, Ratchadamneon Klang Road, Bwonniwet, Pranakorn, Khaosan, Bangkok, 10200, Thailand',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
			{
				continent: 'Asia',
				country: 'Thailand',
				country_code: 'th',
				city: 'Pattaya',
				type: 'exact',
				month: 'September',
				year: '2011',
				lat: 12.930813,
				lng: 100.880119,
				hotel: 'Inn House',
				address: '322/1 Pattaya Beach Road Soi 13, Pattaya City, Banglamung, Pattaya, 20260, Thailand',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
	        {
	            continent: 'North America',
	            country: 'United States of America',
	            country_code: 'us',
	            city: 'New York',
	            type: 'so-so',
	            month: 'September',
	            year: '2009',
	            lat: 40.621153,
	            lng: -73.998114,
	            hotel: 'Don\'t remember',
	            address: 'Don\'t remember',
	            marker: null,
	            iw_content: '',
	            company: 2,
	        	photos: []
	        },
	        {
	            continent: 'North America',
	            country: 'United States of America',
	            country_code: 'us',
	            city: 'Chicago',
	            type: 'so-so',
	            month: 'September',
	            year: '2009',
	            lat: 41.883543,
	            lng: -87.795953,
	            hotel: 'Don\'t remember',
	            address: 'Don\'t remember',
	            marker: null,
	            iw_content: '',
	            company: 2,
	        	photos: []
	        },
	        /*		{
	        			continent: 'North America',
	        			country: 'United States of America',
	        			country_code: 'us',
	        			city: 'Boston',
	        			type: 'so-so',
	        			month: 'September',
	        			year: '2009',
	        			lat: 42.362860,
	        			lng: -71.118612,
	        			hotel: 'Don\'t remember',
	        			address: 'Don\'t remember',
	        			marker: null,
	        			iw_content: '',
	        			company: 2,
	        			photos: []
	        		},*/
	        {
	            continent: 'North America',
	            country: 'United States of America',
	            country_code: 'us',
	            city: 'Niagara Falls',
	            type: 'so-so',
	            month: 'September',
	            year: '2009',
	            lat: 43.090628,
	            lng: -79.058927,
	            hotel: 'Don\'t remember',
	            address: 'Don\'t remember',
	            marker: null,
	            iw_content: '',
	            company: 2,
	        	photos: []
	        },
			{
				continent: 'Europe',
				country: 'Germany',
				country_code: 'de',
				city: 'Berlin',
				type: 'exact',
				month: 'November',
				year: '2011',
				lat: 52.501939,
				lng: 13.384981,
				hotel: 'Holiday Inn Express Berlin City Centre West',
				address: 'Kurfürstenstraße 78, Tiergarten, Berlin, 10787, Germany',
				marker: null,
				iw_content: '',
				company: 6,
				photos: []
			},
			{
				continent: 'Europe',
				country: 'Finland',
				country_code: 'fi',
				city: 'Helsinki',
				type: 'so-so',
				month: 'June',
				year: '2012',
				lat: 60.171040,
				lng: 24.939737,
				hotel: 'Don\'t remember',
				address: 'Don\'t remember',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
			{
				continent: 'Europe',
				country: 'Norway',
				country_code: 'no',
				city: 'Oslo',
				type: 'so-so',
				month: 'June',
				year: '2012',
				lat: 59.913331,
				lng: 10.749411,
				hotel: 'Don\'t remember',
				address: 'Don\'t remember',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
			{
				continent: 'Europe',
				country: 'Sweden',
				country_code: 'se',
				city: 'Stockholm',
				type: 'so-so',
				month: 'June',
				year: '2012',
				lat: 59.327510,
				lng: 18.070844,
				hotel: 'Not applicable',
				address: 'Not applicable',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
	        		/*{
	        			continent: 'Europe',
	        			country: 'Lithuania',
	        			country_code: 'lt',
	        			city: 'Kaunas',
	        			type: 'so-so',
	        			month: 'January',
	        			year: '2010',
	        			lat: 54.898163,
	        			lng: 23.897247,
	        			hotel: 'Not applicable',
	        			address: 'Not applicable',
	        			marker: null,
	        			iw_content: '',
	        			company: 4,
	        			photos: []
	        		},*/
	        {
	            continent: 'Europe',
	            country: 'Lithuania',
	            country_code: 'lt',
	            city: 'Vilnius',
	            type: 'exact',
	            month: 'January',
	            year: '2010',
	            lat: 54.674072,
	            lng: 25.285036,
	            hotel: 'Alexa',
	            address: 'Pylimo str. 53 / Sodu str. 2, Vilnius , 01136, Lithuania',
	            marker: null,
	            iw_content: '',
	            company: 4,
	        	photos: []
	        },
			{
				continent: 'Europe',
				country: 'Belarus',
				country_code: 'by',
				city: 'Minsk',
				type: 'exact',
				month: 'January',
				year: '2015',
				lat: 53.627318,
				lng: 27.977858,
				hotel: 'Dubravushka',
				address: 'Stanki, 16, Puhovichskiy district, Minsk region, Belarus',
				marker: null,
				iw_content: '',
				company: 12,
				photos: []
			},
	        		/*{
	        			continent: 'Europe',
	        			country: 'Russia',
	        			country_code: 'ru',
	        			city: 'Moscow',
	        			type: 'so-so',
	        			month: 'September',
	        			year: 'TBD',
	        			lat: 55.775691,
	        			lng: 37.586972,
	        			hotel: 'Don\'t remember',
	        			address: 'Don\'t remember',
	        			marker: null,
	        			iw_content: '',
	        			company: 2,
	        			photos: []
	        		},*/
			{
				continent: 'Europe',
				country: 'Russia',
				country_code: 'ru',
				city: 'Vladimir',
				type: 'so-so',
				month: 'November',
				year: '2011',
				lat: 56.128201,
				lng: 40.403193,
				hotel: 'Not applicable',
				address: 'Not applicable',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
	        {
	            continent: 'Europe',
	            country: 'Russia',
	            country_code: 'ru',
	            city: 'Saint-Petersburg',
	            type: 'exact',
	            month: 'November',
	            year: '2010',
	            lat: 59.932236,
	            lng: 30.353496,
	            hotel: 'Nevsky Mayak Hotel',
	            address: 'Nevsky Prospekt 94, St Petersburg, 191025, Russia',
	            marker: null,
	            iw_content: '',
	            company: 2,
	        	photos: []
	        },
	        {
	            continent: 'Europe',
	            country: 'Russia',
	            country_code: 'ru',
	            city: 'Kursk',
	            type: 'exact',
	            month: 'May',
	            year: '2009',
	            lat: 51.748547,
	            lng: 36.189659,
	            hotel: 'Home, sweet home :)',
	            address: 'Home, sweet home!',
	            marker: null,
	            iw_content: '',
	            company: 2,
	        	photos: []
	        },
	        {
	            continent: 'Europe',
	            country: 'Russia',
	            country_code: 'ru',
	            city: 'Belgorod',
	            type: 'so-so',
	            month: 'May',
	            year: '2009',
	            lat: 50.599392,
	            lng: 36.591674,
	            hotel: 'Not applicable',
	            address: 'Not applicable',
	            marker: null,
	            iw_content: '',
	            company: 2,
	        	photos: []
	        },
			{
				continent: 'Asia',
				country: 'United Arab Emirates',
				country_code: 'ae',
				city: 'Dubai',
				type: 'so-so',
				month: 'September',
				year: '2011',
				lat: 25.203156,
				lng: 55.270310,
				hotel: 'Not applicable',
				address: 'Not applicable',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
	        {
	            continent: 'Asia',
	            country: 'Kazakhstan',
	            country_code: 'kz',
	            city: 'Almaty',
	            type: 'exact',
	            month: 'April',
	            year: '2010',
	            lat: 43.382937,
	            lng: 77.128332,
	            hotel: 'home',
	            address: 'home',
	            marker: null,
	            iw_content: '',
	            company: 2,
	        	photos: []
	        },
	        {
	            continent: 'Asia',
	            country: 'Turkey',
	            country_code: 'tr',
	            city: 'Istanbul',
	            type: 'exact',
	            month: 'November',
	            year: '2009',
	            lat: 41.010213,
	            lng: 28.977798,
	            hotel: 'Modern Sultan Hotel',
	            address: 'Zeynep Sultan Cad. No 19 Sultanahmet, Istanbul , 34110, Turkey',
	            marker: null,
	            iw_content: '',
	            company: 4,
	        	photos: []
	        },
			{
				continent: 'Asia',
				country: 'Cambodia',
				country_code: 'kh',
				city: 'Siem Reap',
				type: 'so-so',
				month: 'September',
				year: '2011',
				lat: 13.341384,
				lng: 103.836862,
				hotel: 'Don\'t remember',
				address: 'Don\'t remember',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
			{
				continent: 'Europe',
				country: 'France',
				country_code: 'fr',
				city: 'Versailles',
				type: 'so-so',
				month: 'April',
				year: '2011',
				lat: 48.804741,
				lng: 2.120570,
				hotel: 'Not applicable',
				address: 'Not applicable',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			},
			{
				continent: 'Europe',
				country: 'Germany',
				country_code: 'de',
				city: 'Potsdam',
				type: 'so-so',
				month: 'November',
				year: '2011',
				lat: 52.403443,
				lng: 13.061058,
				hotel: 'Not applicable',
				address: 'Not applicable',
				marker: null,
				iw_content: '',
				company: 6,
				photos: []
			},
			{
				continent: 'Europe',
				country: 'Russia',
				country_code: 'ru',
				city: 'Pushkin',
				type: 'so-so',
				month: 'June',
				year: '2012',
				lat: 59.711046,
				lng: 30.400293,
				hotel: 'Not applicable',
				address: 'Not applicable',
				marker: null,
				iw_content: '',
				company: 3,
				photos: []
			},
			{
				continent: 'Europe',
				country: 'Russia',
				country_code: 'ru',
				city: 'Suzdal',
				type: 'so-so',
				month: 'April',
				year: '2012',
				lat: 56.417977,
				lng: 40.448681,
				hotel: 'Don\'t remember',
				address: 'Don\'t remember',
				marker: null,
				iw_content: '',
				company: 4,
				photos: []
			},
			{
				continent: 'Europe',
				country: 'Russia',
				country_code: 'ru',
				city: 'Torzhok',
				type: 'so-so',
				month: 'January',
				year: '2012',
				lat: 57.038911,
				lng: 34.962243,
				hotel: 'Not applicable',
				address: 'Not applicable',
				marker: null,
				iw_content: '',
				company: 2,
				photos: []
			}
	    ],
	    columns: ['continent', 'country', 'city', 'year', 'month'], //columns to search locations
	    map: null,
	    layer: null //layer used to fill in visited countries.
	};

	// function to create new location object
	// parameter:
	//		data - data to create location (continent, country, city and so on...)
	var Location = function (data) {
		var self = this;

		self.continent = ko.observable(data.continent);
		self.country = ko.observable(data.country);
		self.city = ko.observable(data.city);
		self.type = ko.observable(data.type);
		self.month = ko.observable(data.month);
		self.year = ko.observable(data.year);
		self.lat = ko.observable(data.lat);
		self.lng = ko.observable(data.lng);
		self.hotel = ko.observable(data.hotel);
		self.address = ko.observable(data.address);
		self.photos = ko.observableArray([]);
		self.show = ko.observable(data.show);
		self.marker = ko.observable(data.marker);
		self.company = ko.observable(data.company);
		self.isHiddenDetails = ko.observable(true);
		self.iwContent = ko.observable(data.iw_content);
		this.showDetails = function() {
			self.isHiddenDetails(!self.isHiddenDetails());
		};
	};

	var viewModel = function() {
	    var self = this;
	    var infowindow;

	    // function to initialize map, markes, infowindow and all neccessary observables
	    self.initialize = function() {
		    self.isHiddenLeft = ko.observable(true); // initially left sidebar is hidden
		    self.isHiddenRight = ko.observable(true); // initially right sidebar is hidden
	    	self.searchQuery = ko.observable(); // inisialize observable for search input
			self.columnsToSearch = ko.observableArray(model.columns); // inisialize observable for columns to search
			self.currentLocation = ko.observable(); // inisialize observable for current location
			self.currentPhotos = ko.observableArray([]); // inisialize observable for photos for current location
			self.currentBigPhoto = ko.observable(); // inisialize observable for big photo
			self.bigPhotoWidth = ko.observable(); // inisialize observable for width of big photo
	    	self.bigPhotoHeight = ko.observable(); // inisialize observable for height of big photo
		    self.infoHeight = ko.observable($(window).height() - 70); // set height property to right sidebar
	    	self.photosHeight = ko.observable($(window).height() - 70); // set height property to left sidebar
	    	self.windowWidth = ko.observable($(window).width());
	    	self.windowHeight = ko.observable($(window).height());

			// initialize Google Map via API
			self.initMap = function() {
				// display map in element with id 'map'
				model.map = new google.maps.Map(document.getElementById('map'), {
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

				//var autocomplete = new google.maps.places.Autocomplete(
				//      /** @type {!HTMLInputElement} */ (
				//          document.getElementById('pac-input')), {
				//        types: ['(cities)']
				//        //componentRestrictions: countryRestrict
				//      });
				// Restriction for multiple countries is not working
				// It is a known bug mentioned here:
				// https://code.google.com/p/gmaps-api-issues/issues/detail?id=4233
				//var countries = [];
				//for ( var loc in model.locations)
				//	countries.push(model.locations[loc].country_code);
				//autocomplete.setComponentRestrictions({'country': countries});

				infowindow = new google.maps.InfoWindow({
				   	content: '',
				    maxWidth: 350
				});

			    self.fillCountries(model.map);	// fill visited countries countries in model
			    self.addMarkers(model.map);		// add markers on map according to locations in model
			};

			// function to add autocomplete functionality
			self.addAutocomplete = function() {
				var input = document.getElementById("pac-input");
				var autocompleteArray = [];
				// create list of values to show in autocomplete window
				for (var loc in model.locations) {
					autocompleteArray.push(model.locations[loc].continent);
					autocompleteArray.push(model.locations[loc].country);
					autocompleteArray.push(model.locations[loc].city);
					autocompleteArray.push(model.locations[loc].month);
					autocompleteArray.push(model.locations[loc].year);
				}
				// leave only unique values
				autocompleteArray = autocompleteArray.filter(function(value, index, self) {
 					return self.indexOf(value) === index;
				});
				// create autocomplete object
				new Awesomplete(input, {
								 		list: autocompleteArray,
								 		filter: Awesomplete.FILTER_STARTSWITH
									   });
				// add event to set search query if some suggestion is selected
				window.addEventListener("awesomplete-select", function(e){
					self.searchQuery(e.text);
				});
			};

			// function to add markers on map
			// parameter:
			// 		map - map where markers will be displayed
			self.addMarkers = function(map) {

			    // iterate through all locations in model to create marker for each location
			    for (var loc in model.locations) {
			        // create new marker at locations position
			        var marker = new google.maps.Marker({
			            position: model.locations[loc],
			            map: map,
			            title: model.locations[loc].city,
			            animation: google.maps.Animation.DROP
			        });

			        // choose icon for marker
			        // if location was visited with family (wife and children) - choose heart icon
			        // if location was visited with friends (as well as with family) - choose friends icon
			        if (model.locations[loc].company === 2) {
						marker.setIcon('img/heart.png');
			        } else {
			        	marker.setIcon('img/friends.png');
			        }

					// generate content of infowindow and create appropriate event if marker is clicked
					self.addInfoWindowContent(model.locations[loc], marker);

					// event that closes the Info Window with a click on the map
					google.maps.event.addListener(map, 'click', function() {
						infowindow.close();
					});

			        // associate marker with location in model
			        model.locations[loc].marker = marker;
			    }
			};

			// function to fill visited countries with layer
			// Fusion Table is used to determine country's border
			// parameter:
			// 		map - map to fill
			self.fillCountries = function(map) {
	    		var countriesArray = [];
	    		var countries = '(';
	    		// iterate through all locations in model to determine unique set of countries
	    		// result of this loop is 'countries' string that should be added into query to Fusion Table
	    		for (var loc in model.locations) {
	    			var cntr = model.locations[loc].country;
	    			// if country is not in countriesArray do nothing
	    			// add it to countriesArray array and to 'countries' string
	    			if (countriesArray.indexOf(cntr) <= -1) {
	    				countriesArray.push(cntr);
	    				countries += "'" + cntr + "', ";
	    			}
	    		}
	    		// remove the last to character ', ' from the string of countries and  add close bracket.
	    		countries = countries.substring(0, countries.length - 2) + ")";

	    		// Fusion Table data ID to dertemine coontry's border
				var FT_TableID = 420419;
				// create layer to fill visited countries
				model.layer = new google.maps.FusionTablesLayer({
	  				query: {
	  					select: "kml_4326",
	          			from: FT_TableID,
	          			where: "'name_0' IN " + countries
	          		},
	  				styles: [{
	  					polygonOptions: {
						    fillOpacity: "0.2",
	    					fillColor: "#06FF1D"
	  					}
					}]
				});

				// assign layer to map
				model.layer.setMap(map);

			};

			// function to add listeners on 'click' event to all markers
			// parameter:
			// 		map - map where marker is displayed
			//		layer - layer thta should be shown or hidden
			self.clickMarker = function(map, layer) {
				// iterate through all locations to add event listener
				ko.utils.arrayForEach(self.locationsList(), function (loc) {
					var marker = loc.marker();
					// Zoom to 12 when clicking on marker
					google.maps.event.addListener(marker,'click',function() {
						// TODO: this if else contition possible should be refactor to work correctly with show/hide layer
						// if marker is animated (bounce) don't animate and display layer
						if (marker.getAnimation() !== null) {
						    marker.setAnimation(null);
						    layer.setMap(map);
						// else animate and remove layer
						} else {
						    marker.setAnimation(google.maps.Animation.BOUNCE);
						    layer.setMap(null);
						}
						// zoom and center to clicked marker
						map.setZoom(12);
						//console.log(marker.getPosition().lat(),marker.getPosition().lng());
						//console.log(loc.lat()-100.1,loc.lng()+100.1);
						var myLatLng = new google.maps.LatLng(loc.lat()+0.04,loc.lng()+0.04);
						map.setCenter(myLatLng);
					});
			    });
			};

			// function to infowindows and fill them with appropriate content
			// parameter:
			// 		map - map where marker is displayed
			self.addInfoWindowContent = function(loc, marker) {
				var city = loc.city;

				// url that will be used to request for links for particular city to display them in infowindow content
				var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';

				// ajax request to receive wiki links on articles that should be displayed in infowindow content
			    $.ajax({
			        url: wikiUrl,
			        dataType: 'jsonp',
			        success: function(response) {
			        	// handle response with handleWiki function
			        	handleWiki(response);
			            //clearTimeout(wikiListRequestTimeout);
			        },
			        error: function (xhr, ajaxOptions, thrownError) {
			        	// alert if ajax request was not executed correctly
				        alert(xhr.status + ' failed to get Wiki resources for city ' + city + '\nUrl requested: \n' + wikiUrl);
				    }
			    });

			    // function to handle ajax request
			    // parameter:
			    //		data - data received from wiki, contatins list of articles for particular city.
			    var handleWiki = function(data) {
		    		var articleList = data[1];
		    		var wikiArticleList = '';

		    		// iterate through all articles and add them into a list thta will be displayed in infowindow
		            for(var i = 0, l = articleList.length; i < l; i++)
		                wikiArticleList += '<li><a href="http://en.wikipedia.org/wiki/' + articleList[i] + '">' + articleList[i] + '</a></li>';

		            // variable will be used to search brief information about each city in wikipedia
		            var article = articleList[0];
		            // cities Pushkin and Versailles have not standard names in wiki
		            // so implement logic to search further information using correct data
		            if (city === 'Pushkin')
		            	article = articleList[7];
		            if (city === 'Versailles')
		            	article = articleList[1];
		            // url to search brief information about each city in wikipedia
		    		var wikiAboutUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=' + article;

		    		var aboutCity = '';
		    		// ajax request to receive brief information about each city in wikipedia that should be displayed in infowindow content
					$.ajax({
				        url: wikiAboutUrl,
				        dataType: 'jsonp',
				        success: function(response) {
				        	// handle response with handleWikiAbout function
				        	handleWikiAbout(response);
				            //clearTimeout(wikiArticleRequestTimeout);
				        },
				        error: function (xhr, ajaxOptions, thrownError) {
				        	// alert if ajax request was not executed correctly
					        alert(xhr.status + ' failed to get Wiki resources for city ' + city + '\nUrl requested: \n' + wikiAboutUrl);
					    }
				    });

					// function to handle ajax request
			    	// parameter:
			    	//		data - data received from wiki, contatins list of articles for particular city.
					var handleWikiAbout = function(data) {
						// extract brief information from response
						articleObjectKeys = Object.keys(data.query.pages);
						key = articleObjectKeys[0];
						wikiArticle = data.query.pages[key].extract;

						// create content to be displayed in infowindow
						// it include:
						//	information about visit
						//	brief information about city from wikipedia
						//	list of links on articles about city and around it in wikipedia
						var content = '<div id="iw-container" class="iw-container">' +
			            	          	'<div class="iw-title">' + loc.continent + ', ' + loc.country + ', ' + loc.city + '</div>' +
			            	          	'<hr class="line">' +
			                  		  	'<div class="iw-content">' +
			                      	  		'<div class="iw-subTitle">Visit info</div>' +
			                      	  		'<span class="hotel">' +
							    				'<span class="glyphicon glyphicon-home"></span>' +
							    				'<strong> Hotel: </strong>' +
							    				'<span>' + loc.hotel + '</span>' +
							    			'</span>' +
							    			'<br>' +
							    			'<span class="address">' +
												'<span class="glyphicon glyphicon-book"></span>' +
							    				'<strong> Hotel address: </strong>' +
							    				'<span>' + loc.address + '</span>' +
							    			'</span>' +
							    			'<br>' +
							    			'<span class="company">' +
							    				'<span class="glyphicon glyphicon-user"></span>' +
							    				'<strong> Company: </strong>' +
							    				'<span>' + loc.company + '</span>' +
							    			'</span>' +
							    			'<hr class="line">' +
							    			'<div class="iw-subTitle">About ' + loc.city + '</div>' +
							    			wikiArticle +
							    			'<hr class="line">' +
							    			'<div class="iw-subTitle">Other wikipedia articles</div>' +
							    			'<ul>' + wikiArticleList + '</ul>' +
							    		'</div>' +
			                    	  	'<div class="iw-bottom-gradient"></div>' +
			                  		  '</div>';
			            loc.iw_content = content;

			            // this event expects a click on a marker
						// when this event is fired the Info Window is opened.
			            google.maps.event.addListener(marker, 'click', function() {
						    //return function() {
						    	model.layer.setMap(null);
						        infowindow.setContent(content); //set the content
						        infowindow.open(model.map, marker);
						});
					};
			    };
			};

		    self.initMap();
			//initialize locations list according to locations in model
			self.locationsList = ko.observableArray([]);
			model.locations.forEach(function(locationItem) {
				self.locationsList.push(new Location(locationItem));
			});
			self.clickMarker(model.map, model.layer);
			self.addAutocomplete();
		};

		// initialize map, markes, infowindow and all neccessary observables
		self.initialize();

	    // filter locations array to display in right sidebar accordiny to search input value
	    // if search is empty - display all locations
	    // if search is not empty and there are continent, country, city, yaer or month in search
	    // that is presented in array of locations then display locations according to this search
	    // otherwise don't display anything
		self.filteredItems = ko.computed(function() {
			// read search input box
			var filter = self.searchQuery();
			if (self.searchQuery())
		    	filter = filter.toLowerCase();

		    // if search is empty we should display all locations
		    if (!filter) {
		    	// set all markers to visible state
		    	ko.utils.arrayForEach(self.locationsList(), function (loc) {
		    		loc.marker().setVisible(true);
		    	});
		    	// set all locations visible
		        return self.locationsList();
		    // else if search is not empty
		    } else {
		    	// close infowindow
		    	infowindow.close();
		    	// set all markers invisible (later we will display only required markers)
		    	ko.utils.arrayForEach(self.locationsList(), function (loc) {
		    		loc.marker().setVisible(false);
		    	});
		    	// filter only found locations in right sidebar
		        var match = ko.utils.arrayFilter(self.locationsList(), function(item) {
		        	var matching = -1;
		        	// loop through all searchable fields
		        	ko.utils.arrayForEach(self.columnsToSearch(), function (c) {
		        		// convert searchable filed to string if it is a number
	                    var val = item[c]();
	                    if (typeof val === 'number') {
	                        val = val.toString();
	                    }
	                    // dertemine locations that match search query
	                    matching+= val.toLowerCase().indexOf(filter.toLowerCase())+1;
	                });
	                return matching>=0;
		            //return stringStartsWith(item.city().toLowerCase(), filter);
		        });
		        // show only those markers that match search query
		        for (var loc in match)
		        	match[loc].marker().setVisible(true);
		        return match;
		    }
		});

		// function to show/hide right sidebar
	    self.toggleHiddenRight = function() {
	    	// if it is hidden show it and vice versa
	        self.isHiddenRight(!self.isHiddenRight());
	        // if left menu is shown hide it
	        if (!self.isHiddenLeft())
	            self.toggleHiddenLeft();
	    };

		// function to show/hide left sidebar
	    self.toggleHiddenLeft = function() {
	        self.isHiddenLeft(!self.isHiddenLeft());
	    };

		// function to center and zoom on marker when we click on location in right sidebar
		// parameter:
	    // 		location - selected from right sidebar location
		self.showMarker = function(location) {
			// dertemine current marker and its location
			var myLatLng = new google.maps.LatLng(location.lat()+0.06,location.lng()+0.04);
			var marker = location.marker();
			// center map to current location, zoom it, remove layer and open infowindow
			model.map.setCenter(myLatLng);
			model.map.setZoom(12);
			model.layer.setMap(null);
			google.maps.event.trigger(marker, 'click');
			self.toggleHiddenRight();
		};

		// function to restore map to initial state:
		//		zoom out it
		//		center it to show all markers
		//		restore layer
		self.fullMap = function() {
			myLatLng = new google.maps.LatLng(39.104892, 9.456656);
			model.map.setCenter(myLatLng);
			model.map.setZoom(3);
			model.layer.setMap(model.map);
			infowindow.close();
			for (var loc in model.locations)
				if (model.locations[loc].marker.getAnimation() !== null)
	   				model.locations[loc].marker.setAnimation(null);
		};

		// show photos in left sidebar according to selected location
	    // parameter:
	    // 		location - selected from right sidebar location
	    self.showPhotos = function(location) {
	    	// initialize values should be displayed in left sidebar
	    	self.currentLocation = location;
	    	self.currentPhotos([]);
	    	self.currentBigPhoto();

			// url to use Flickr API to receive all my albums
			var photosets = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=c69f4fb5685159e37196cb8b2b5273cb&user_id=136434920%40N04&format=json&nojsoncallback=1';
			// ajax request to receive albums of photos
			$.ajax({
			    url: photosets,
			    dataType: 'json',
			    success: function(response) {
			    	// response will be handled by this function
			        handlePhotosets(response);
			        //clearTimeout(flickrCollectionRequestTimeout);
			    },
		        error: function (xhr, ajaxOptions, thrownError) {
		        	// alert if ajax request was not executed correctly
			        alert(xhr.status + ' failed to get Flickr resources for city ' + location.city() + '\nUrl requested: \n' + photosets);
			    }
			});

			// handle ajax request results
			// this function extracts ids of Flickr albums, requests photos in required album
			// and assign these values to appropriate variables to display them in left sidebar
			// paramter:
			//		responseData - data received from ajax request
			var handlePhotosets = function(responseData) {
				// dertemine albums from response
			    var photosetsList = responseData.photosets.photoset;
			    // loop through all albums, dertemine album id for required city (by name of album)
			    // and download photos from this album
			    for (var i = 0; i < photosetsList.length; i++) {
			    	var city = photosetsList[i].title._content;
			    	// if name of album is equal to name of city from requested location handle photos from album
			    	if (city == self.currentLocation.city()) {
				    	var photosetId = photosetsList[i].id;
				        getPhotos(city, photosetId);
				        break;
			    	}
				}
			};

			// function to handle photos from album
			// parameters:
			//		city - city of choosen location
			//		photosetId - id of photoset from which we will display photos
			var getPhotos = function(city, photosetId) {

				// url to use Flickr API to receive all photos
				var photos = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=c69f4fb5685159e37196cb8b2b5273cb&photoset_id=' + photosetId + '&user_id=136434920%40N04&format=json&nojsoncallback=1';

				// if photos was received from some previous request they already stored in model and we can use them
				// without additional ajax request
				if (self.currentLocation.photos().length) {
					// fill array with addresses of all photos from album and set big photo
					self.currentPhotos(self.currentLocation.photos());
					self.currentBigPhoto({
						imgAlt: self.currentLocation.photos()[0].imgAlt,
						imgSrc: self.currentLocation.photos()[0].imgSrc,
						imgSize: determineBigSize()
					});
					// set size of big photo to be fit in displaying area and to avoid of appearing scrollbars
					self.setBigPhotoSize(self.currentBigPhoto().imgSrc+self.currentBigPhoto().imgSize);
					//clearTimeout(flickrPhotosRequestTimeout);
				// if photos was not requested previously request them via ajax request
				} else {
				    $.ajax({
				        url: photos,
				        dataType: 'json',
				        success: function(response) {
				        	// handle request by handlePhotos function
				            handlePhotos(response);
				            //clearTimeout(flickrPhotosRequestTimeout);
				        },
				        error: function (xhr, ajaxOptions, thrownError) {
				        	// alert if ajax request was not executed correctly
					        alert(xhr.status + ' failed to get Flickr resources for city ' + city + '\nUrl requested: \n' + photos);
					    }
				    });
				}
			};

			// function to dertemine size of big photo, that should be downloaded accroding to available size to display
			var determineBigSize = function() {
				// dertemine available size to display
				var side = Math.min(Math.max(self.windowWidth() - 90, self.windowWidth() - 400), self.windowHeight() - 270);
				var photoSize = '.jpg';
				// dertemine size depending from available size to display to display big photo
				if (side > 320 && side <= 500)
					photoSize = '_z.jpg';
				else if (side > 500 && side <= 640)
					photoSize = '_c.jpg';
				else if (side > 640 && side <= 800)
					photoSize = '_b.jpg';
				else if (side > 800 && side <= 1024)
					photoSize = '_h.jpg';
				else if (side > 1024 && side <= 1600)
					photoSize = '_k.jpg';
				else if (side > 1600)
					photoSize = '_o.jpg';
				return photoSize;
			};

			// function to save url of photos related to selected location
			// paramter:
			//		responseData - data received from ajax request
			var handlePhotos = function(responseData) {
				// set big photo to first photo from downloaded from album
				var firstPhoto = responseData.photoset.photo[0];
				self.currentBigPhoto({
						// alt attribute of image
						imgAlt: firstPhoto.title,
						// url of photo
						imgSrc: 'https://farm' +
		    					 firstPhoto.farm +
		    					 '.staticflickr.com/' +
		    					 firstPhoto.server +
		    					 '/' +
		    					 firstPhoto.id +
		    					 '_' +
		    					 firstPhoto.secret,
		    			// siz of photo
		    			imgSize: determineBigSize()
		        	});
				// set size of big photo to be fit in displaying area and to avoid of appearing scrollbars
				self.setBigPhotoSize(self.currentBigPhoto().imgSrc+self.currentBigPhoto().imgSize);
				// loop through all photos
				// add photo url, size and alt text into model and currentPhotos
		        for(var i = 0; i < responseData.photoset.photo.length; i++) {
		        	var ph = responseData.photoset.photo[i];
		        	self.currentLocation.photos.push(
		        		{
						imgAlt: ph.title,
						imgSrc: 'https://farm' +
		    					 ph.farm +
		    					 '.staticflickr.com/' +
		    					 ph.server +
		    					 '/' +
		    					 ph.id +
		    					 '_' +
		    					 ph.secret,
		    			imgSize: '_s.jpg'
		    			}
		        	);
		        	self.currentPhotos.push(
		        		{
						imgAlt: ph.title,
						imgSrc: 'https://farm' +
		    					 ph.farm +
		    					 '.staticflickr.com/' +
		    					 ph.server +
		    					 '/' +
		    					 ph.id +
		    					 '_' +
		    					 ph.secret,
		    			imgSize: '_s.jpg'
		    			}
		        	);
		        }
		    };

			// show left sidebar if it is hidden
			if (self.isHiddenLeft())
	            self.toggleHiddenLeft();
		};

		// function to change big photo when small photo in the list is clicked
		// parameter
		//		photo - clicked thumbnail of photo
		self.changeBigPhoto = function(photo) {
			var size = self.currentBigPhoto().imgSize;
			self.currentBigPhoto({
				imgAlt: photo.imgAlt,
						imgSrc: photo.imgSrc,
		    			imgSize: size
			});
			// set size of big photo to be fit in displaying area and to avoid of appearing scrollbars
			self.setBigPhotoSize(self.currentBigPhoto().imgSrc+self.currentBigPhoto().imgSize);
		};

		// function ti determine big photo size
		// if width, height or both of big photo is bigger than area to display
		// then photo should be fit in this area
		// parameter:
		//		url - url to load big photo
		self.setBigPhotoSize = function(url) {
			// load image
			var img = new Image();
			img.onload = function() {
				// dertemine image size (width and height)
				var image = {
					h: img.height,
			    	w: img.width
			    };
			    // dertemine display area size (width and height)
				var height = self.windowHeight() - 270;
				var width = Math.max(self.windowWidth() - 90, self.windowWidth() - 400);
				// set width or height of big photo to fit display area
				if (width < image.w && height > image.h)
					self.bigPhotoWidth(width);
				else if (width > image.w && height < image.h)
					self.bigPhotoHeight(height);
				else if (image.w/width < image.h/height)
					self.bigPhotoHeight(height);
				else
					self.bigPhotoWidth(width);
			};

			img.src = url;
		};
	};

	var vm = new viewModel();
	ko.applyBindings(vm);
};
