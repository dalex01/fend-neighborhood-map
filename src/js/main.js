//'use strict';

// TODO:
// 1. Menu button in right menu should be fixed during scrolling
// 2. Create feature to add new locations via UI
// 3. !!! Error handling during working with Flickr API
// 4. Create feature to choose on which field we want to search.
// 5. Optimize big photo width and height
// 6. Optimize width of left sidebar on small screens
// 7. Convert all css to BEM
// 8. Make gray background during big photo displaying

var model = {
    // array with all visited locations
    locations: [
		{
			continent: 'Europe',
			country: 'France',
			city: 'Paris',
			type: 'exact',
			month: 'April',
			year: '2011',
			lat: 48.854759,
			lng: 2.305080,
			hotel: 'Hôtel Prince',
			address: '66 Avenue Bosquet, 07. Tour Eiffel - Invalides, Paris, 75007, France',
			marker: null,
			company: 2,
			photos: []
		},
        		/*{
        			continent: 'Asia',
        			country: 'Israel',
        			city: 'Bhethlehem',
        			type: 'so-so',
        			month: 'April',
        			year: '2015',
        			lat: 31.709661,
        			lng: 35.202141,
        			hotel: 'Don\'t remember,
        			address: 'Don\'t remember',
        			marker: null,
        			company: 2,
        			photos: []
        		},*/
		{
			continent: 'Asia',
			country: 'Israel',
			city: 'Jerusalem',
			type: 'so-so',
			month: 'April',
			year: '2015',
			lat: 31.778245,
			lng: 35.229397,
			hotel: 'Not applicable',
			address: 'Not applicable',
			marker: null,
			company: 2,
			photos: []
		},
        		/*{
        			continent: 'Asia',
        			country: 'Israel',
        			city: 'Jericho',
        			type: 'so-so',
        			month: 'April',
        			year: '2015',
        			lat: 31.855132,
        			lng: 35.458276,
        			hotel: 'Not applicable',
        			address: 'Not applicable',
        			marker: null,
        			company: 2,
        			photos: []
        		},*/
        {
            continent: 'Africa',
            country: 'Egypt',
            city: 'Luxor',
            type: 'so-so',
            month: 'September',
            year: '2010',
            lat: 25.714124,
            lng: 32.649766,
            hotel: 'Not applicable',
            address: 'Not applicable',
            marker: null,
            company: 10,
        	photos: []
        },
        {
            continent: 'Africa',
            country: 'Egypt',
            city: 'Hurghada',
            type: 'so-so',
            month: 'September',
            year: '2010',
            lat: 27.082086,
            lng: 33.860678,
            hotel: 'Don\'t remember',
            address: 'Don\'t remember',
            marker: null,
            company: 10,
        	photos: []
        },
        /*		{
        			continent: 'Africa',
        			country: 'Egypt',
        			city: 'Sharm-el-Sheikh',
        			type: 'exact',
        			month: 'April',
        			year: '2015',
        			lat: 27.861737,
        			lng: 34.317525,
        			hotel: 'Royal Grand Sharm',
        			address: 'Om El-Seid Hill Sharm El-Sheikh, Qesm Sharm Ash Sheikh, South Sinai Governorate, Egypt',
        			marker: null,
        			photos: []
        		},*/
		{
			continent: 'Asia',
			country: 'Thailand',
			city: 'Bangkok',
			type: 'exact',
			month: 'September',
			year: '2011',
			lat: 13.757137,
			lng: 100.502789,
			hotel: 'Siamese Views Lodge',
			address: '211/21-23 Soi Damneon Klang Nuea, Ratchadamneon Klang Road, Bwonniwet, Pranakorn, Khaosan, Bangkok, 10200, Thailand',
			marker: null,
			company: 2,
			photos: []
		},
		{
			continent: 'Asia',
			country: 'Thailand',
			city: 'Pattaya',
			type: 'exact',
			month: 'September',
			year: '2011',
			lat: 12.930813,
			lng: 100.880119,
			hotel: 'Inn House',
			address: '322/1 Pattaya Beach Road Soi 13, Pattaya City, Banglamung, Pattaya, 20260, Thailand',
			marker: null,
			company: 2,
			photos: []
		},
        {
            continent: 'North America',
            country: 'United States of America',
            city: 'New York',
            type: 'so-so',
            month: 'September',
            year: '2009',
            lat: 40.621153,
            lng: -73.998114,
            hotel: 'Don\'t remember',
            address: 'Don\'t remember',
            marker: null,
            company: 2,
        	photos: []
        },
        {
            continent: 'North America',
            country: 'United States of America',
            city: 'Chicago',
            type: 'so-so',
            month: 'September',
            year: '2009',
            lat: 41.883543,
            lng: -87.795953,
            hotel: 'Don\'t remember',
            address: 'Don\'t remember',
            marker: null,
            company: 2,
        	photos: []
        },
        /*		{
        			continent: 'North America',
        			country: 'United States of America',
        			city: 'Boston',
        			type: 'so-so',
        			month: 'September',
        			year: '2009',
        			lat: 42.362860,
        			lng: -71.118612,
        			hotel: 'Don\'t remember',
        			address: 'Don\'t remember',
        			marker: null,
        			company: 2,
        			photos: []
        		},*/
        {
            continent: 'North America',
            country: 'United States of America',
            city: 'Niagara Falls',
            type: 'so-so',
            month: 'September',
            year: '2009',
            lat: 43.090628,
            lng: -79.058927,
            hotel: 'Don\'t remember',
            address: 'Don\'t remember',
            marker: null,
            company: 2,
        	photos: []
        },
		{
			continent: 'Europe',
			country: 'Germany',
			city: 'Berlin',
			type: 'exact',
			month: 'November',
			year: '2011',
			lat: 52.501939,
			lng: 13.384981,
			hotel: 'Holiday Inn Express Berlin City Centre West',
			address: 'Kurfürstenstraße 78, Tiergarten, Berlin, 10787, Germany',
			marker: null,
			company: 6,
			photos: []
		},
		{
			continent: 'Europe',
			country: 'Finland',
			city: 'Helsinki',
			type: 'so-so',
			month: 'June',
			year: '2012',
			lat: 60.171040,
			lng: 24.939737,
			hotel: 'Don\'t remember',
			address: 'Don\'t remember',
			marker: null,
			company: 2,
			photos: []
		},
		{
			continent: 'Europe',
			country: 'Norway',
			city: 'Oslo',
			type: 'so-so',
			month: 'June',
			year: '2012',
			lat: 59.913331,
			lng: 10.749411,
			hotel: 'Don\'t remember',
			address: 'Don\'t remember',
			marker: null,
			company: 2,
			photos: []
		},
		{
			continent: 'Europe',
			country: 'Sweden',
			city: 'Stockholm',
			type: 'so-so',
			month: 'June',
			year: '2012',
			lat: 59.327510,
			lng: 18.070844,
			hotel: 'Not applicable',
			address: 'Not applicable',
			marker: null,
			company: 2,
			photos: []
		},
        		/*{
        			continent: 'Europe',
        			country: 'Lithuania',
        			city: 'Kaunas',
        			type: 'so-so',
        			month: 'January',
        			year: '2010',
        			lat: 54.898163,
        			lng: 23.897247,
        			hotel: 'Not applicable',
        			address: 'Not applicable',
        			marker: null,
        			company: 4,
        			photos: []
        		},*/
        {
            continent: 'Europe',
            country: 'Lithuania',
            city: 'Vilnius',
            type: 'exact',
            month: 'January',
            year: '2010',
            lat: 54.674072,
            lng: 25.285036,
            hotel: 'Alexa',
            address: 'Pylimo str. 53 / Sodu str. 2, Vilnius , 01136, Lithuania',
            marker: null,
            company: 4,
        	photos: []
        },
		{
			continent: 'Europe',
			country: 'Belarus',
			city: 'Minsk',
			type: 'exact',
			month: 'January',
			year: '2015',
			lat: 53.627318,
			lng: 27.977858,
			hotel: 'Dubravushka',
			address: 'Stanki, 16, Puhovichskiy district, Minsk region, Belarus',
			marker: null,
			company: 12,
			photos: []
		},
        		/*{
        			continent: 'Europe',
        			country: 'Russia',
        			city: 'Moscow',
        			type: 'so-so',
        			month: 'September',
        			year: 'TBD',
        			lat: 55.775691,
        			lng: 37.586972,
        			hotel: 'Don\'t remember',
        			address: 'Don\'t remember',
        			marker: null,
        			company: 2,
        			photos: []
        		},*/
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Vladimir',
			type: 'so-so',
			month: 'November',
			year: '2011',
			lat: 56.128201,
			lng: 40.403193,
			hotel: 'Not applicable',
			address: 'Not applicable',
			marker: null,
			company: 2,
			photos: []
		},
        {
            continent: 'Europe',
            country: 'Russia',
            city: 'Saint-Petersburg',
            type: 'exact',
            month: 'November',
            year: '2010',
            lat: 59.932236,
            lng: 30.353496,
            hotel: 'Nevsky Mayak Hotel',
            address: 'Nevsky Prospekt 94, St Petersburg, 191025, Russia',
            marker: null,
            company: 2,
        	photos: []
        },
        {
            continent: 'Europe',
            country: 'Russia',
            city: 'Kursk',
            type: 'exact',
            month: 'May',
            year: '2009',
            lat: 51.748547,
            lng: 36.189659,
            hotel: 'Home, sweet home :)',
            address: 'Home, sweet home!',
            marker: null,
            company: 2,
        	photos: []
        },
        {
            continent: 'Europe',
            country: 'Russia',
            city: 'Belgorod',
            type: 'so-so',
            month: 'May',
            year: '2009',
            lat: 50.599392,
            lng: 36.591674,
            hotel: 'Not applicable',
            address: 'Not applicable',
            marker: null,
            company: 2,
        	photos: []
        },
		{
			continent: 'Asia',
			country: 'United Arab Emirates',
			city: 'Dubai',
			type: 'so-so',
			month: 'September',
			year: '2011',
			lat: 25.203156,
			lng: 55.270310,
			hotel: 'Not applicable',
			address: 'Not applicable',
			marker: null,
			company: 2,
			photos: []
		},
        {
            continent: 'Asia',
            country: 'Kazakhstan',
            city: 'Almaty',
            type: 'exact',
            month: 'April',
            year: '2010',
            lat: 43.382937,
            lng: 77.128332,
            hotel: 'home',
            address: 'home',
            marker: null,
            company: 2,
        	photos: []
        },
        {
            continent: 'Asia',
            country: 'Turkey',
            city: 'Istanbul',
            type: 'exact',
            month: 'November',
            year: '2009',
            lat: 41.010213,
            lng: 28.977798,
            hotel: 'Modern Sultan Hotel',
            address: 'Zeynep Sultan Cad. No 19 Sultanahmet, Istanbul , 34110, Turkey',
            marker: null,
            company: 4,
        	photos: []
        },
		{
			continent: 'Asia',
			country: 'Kambodga',
			city: 'Siem Reap',
			type: 'so-so',
			month: 'September',
			year: '2011',
			lat: 13.341384,
			lng: 103.836862,
			hotel: 'Don\'t remember',
			address: 'Don\'t remember',
			marker: null,
			company: 2,
			photos: []
		},
		{
			continent: 'Europe',
			country: 'France',
			city: 'Versailles',
			type: 'so-so',
			month: 'April',
			year: '2011',
			lat: 48.804741,
			lng: 2.120570,
			hotel: 'Not applicable',
			address: 'Not applicable',
			marker: null,
			company: 2,
			photos: []
		},
		{
			continent: 'Europe',
			country: 'Germany',
			city: 'Potsdam',
			type: 'so-so',
			month: 'November',
			year: '2011',
			lat: 52.403443,
			lng: 13.061058,
			hotel: 'Not applicable',
			address: 'Not applicable',
			marker: null,
			company: 6,
			photos: []
		},
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Pushkin',
			type: 'so-so',
			month: 'June',
			year: '2012',
			lat: 59.711046,
			lng: 30.400293,
			hotel: 'Not applicable',
			address: 'Not applicable',
			marker: null,
			company: 3,
			photos: []
		},
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Suzdal',
			type: 'so-so',
			month: 'April',
			year: '2012',
			lat: 56.417977,
			lng: 40.448681,
			hotel: 'Don\'t remember',
			address: 'Don\'t remember',
			marker: null,
			company: 4,
			photos: []
		},
		{
			continent: 'Europe',
			country: 'Russia',
			city: 'Torzhok',
			type: 'so-so',
			month: 'January',
			year: '2012',
			lat: 57.038911,
			lng: 34.962243,
			hotel: 'Not applicable',
			address: 'Not applicable',
			marker: null,
			company: 2,
			photos: []
		}
    ],
    // arrau with markers to display
    markers: [],
    columns: ['continent', 'country', 'city'],
    map: null,
    layer: null
};

// function to create new location object
// parameter:
//		data - data to create location (continent, country, city and so on...)
var Location = function (data) {
	var self = this;

	this.continent = ko.observable(data.continent);
	this.country = ko.observable(data.country);
	this.city = ko.observable(data.city);
	this.type = ko.observable(data.type);
	this.month = ko.observable(data.month);
	this.year = ko.observable(data.year);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);
	this.hotel = ko.observable(data.hotel);
	this.address = ko.observable(data.address);
	this.photos = ko.observableArray([]);
	this.show = ko.observable(data.show);
	this.marker = ko.observable(data.marker);
	this.company = ko.observable(data.company);
	this.isHiddenDetails = ko.observable(true);
	this.showDetails = function() {
		this.isHiddenDetails(!self.isHiddenDetails());
	};
};

var viewModel = function() {
    var self = this;

    self.initialize = function() {
	    self.isHiddenLeft = ko.observable(true); // initially left sidebar is hidden
	    self.isHiddenRight = ko.observable(true); // initially right sidebar is hidden
    	self.searchQuery = ko.observable(); // inisialize observable for search input
		self.columnsToSearch = ko.observableArray(model.columns); // inisialize observable for columns to search
		self.currentLocation = ko.observable(); // inisialize observable for current location
		self.currentPhotos = ko.observableArray([]); // inisialize observable for photos for current location
		self.currentBigPhoto = ko.observable(); // inisialize observable for big photo
	    self.infoHeight = ko.observable($(window).height() - 70); // set height property to right sidebar
    	self.photosHeight = ko.observable($(window).height() - 70); // set height property to left sidebar

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

		    self.fillCountries(model.map);	// fill visited countries
		    self.addMarkers(model.map);		// add markers on map according to locations in model
		};

		// function to add markers on map
		// parameter:
		// 		map - map where markers will be displayed
		self.addMarkers = function(map) {

		    // iterate through all locations in model
		    for ( var loc in model.locations) {
		        // create new marker at specified position
		        var marker = new google.maps.Marker({
		            position: model.locations[loc],
		            map: map,
		            title: model.locations[loc].city,
		            animation: google.maps.Animation.DROP
		        });

		        if (model.locations[loc].company === 2) {
					marker.setIcon('img/heart.png');
		        } else {
		        	marker.setIcon('img/friends.png');
		        }

		        // push marker into array of markers in model
		        //model.markers.push(marker);
		        model.locations[loc].marker = marker;
		    }
		};


		self.fillCountries = function(map) {
    		var countriesArray = [];
    		var countries = '(';
    		for (var loc in model.locations) {
    			var cntr = model.locations[loc].country;
    			if (countriesArray.indexOf(cntr) <= -1) {
    				countriesArray.push(cntr);
    				countries += "'" + cntr + "', ";
    			}
    		}
    		countries = countries.substring(0, countries.length - 2) + ")";

    		// Fusion Table data ID
			var FT_TableID = 420419;
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

			model.layer.setMap(map);

		};

		self.clickMarker = function(map, layer) {
			ko.utils.arrayForEach(self.locationsList(), function (loc) {
				var marker = loc.marker();
				// Zoom to 12 when clicking on marker
				google.maps.event.addListener(marker,'click',function() {
					if (marker.getAnimation() !== null) {
					    marker.setAnimation(null);
					    layer.setMap(map);
					} else {
					    marker.setAnimation(google.maps.Animation.BOUNCE);
					    layer.setMap(null);
					}
					map.setZoom(12);
					map.setCenter(marker.getPosition());
				});
		    });
		};

		self.addInfoWindow = function(map) {
			ko.utils.arrayForEach(self.locationsList(), function (loc) {
				var marker = loc.marker();
				var city = loc.city();

				var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';

			    //var wikiListRequestTimeout = setTimeout( function (){
			    //    alert('Failed to get Wiki resources');
			    //}, 8000);

			    $.ajax({
			        url: wikiUrl,
			        dataType: 'jsonp',
			        success: function(response) {
			        	handleWiki(response);
			            //clearTimeout(wikiListRequestTimeout);
			        },
			        error: function (xhr, ajaxOptions, thrownError) {
				        alert(xhr.status + ' failed to get Wiki resources for city ' + city + '\nUrl requested: \n' + wikiUrl);
				    }
			    });

			    var handleWiki = function(data) {
		    		var articleList = data[1];

		    		var wikiArticleList = '';
		            for(var i = 0; i < articleList.length; i++) {
		                articleStr = articleList[i];
		                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
		                wikiArticleList += '<li><a href="' + url + '">' + articleStr + '</a></li>';
		            }

		            var article = articleList[0];
		            if (city === 'Pushkin')
		            	article = articleList[7];
		            if (city === 'Versailles')
		            	article = articleList[1];
		    		var wikiAboutUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=' + article;

					//var wikiArticleRequestTimeout = setTimeout( function (){
					//	alert('Failed to get Wiki resources');
				    //}, 8000);

		    		var aboutCity = '';
					$.ajax({
				        url: wikiAboutUrl,
				        dataType: 'jsonp',
				        success: function(response) {
				        	handleWikiAbout(response);
				            //clearTimeout(wikiArticleRequestTimeout);
				        },
				        error: function (xhr, ajaxOptions, thrownError) {
					        alert(xhr.status + ' failed to get Wiki resources for city ' + city + '\nUrl requested: \n' + wikiAboutUrl);
					    }
				    });

					var handleWikiAbout = function(data) {
						articleObjectKeys = Object.keys(data.query.pages);
						key = articleObjectKeys[0];
						wikiArticle = data.query.pages[key].extract;
						var content = '<div id="iw-container">' +
			            	          	'<div class="iw-title">' + loc.continent() + ', ' + loc.country() + ', ' + loc.city() + '</div>' +
			                  		  	'<div class="iw-content">' +
			                      	  		'<div class="iw-subTitle">Visit info</div>' +
			                      	  		//'<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
			                      	  		'<span class="hotel">' +
							    				'<span class="glyphicon glyphicon-home"></span>' +
							    				'<strong> Hotel: </strong>' +
							    				'<span>' + loc.hotel() + '</span>' +
							    			'</span>' +
							    			'<br>' +
							    			'<span class="address">' +
												'<span class="glyphicon glyphicon-book"></span>' +
							    				'<strong> Hotel address: </strong>' +
							    				'<span>' + loc.address() + '</span>' +
							    			'</span>' +
							    			'<br>' +
							    			'<span class="company">' +
							    				'<span class="glyphicon glyphicon-user"></span>' +
							    				'<strong> Company: </strong>' +
							    				'<span>' + loc.company() + '</span>' +
							    			'</span>' +
							    			'<div class="iw-subTitle">About ' + loc.city() + '</div>' +
							    			wikiArticle +
							    			'<div class="iw-subTitle">Other wikipedia articles</div>' +
							    			'<ul>' + wikiArticleList + '</ul>' +
			                    	  	'<div class="iw-bottom-gradient"></div>' +
			                  		  '</div>';
		                  		  // A new Info Window is created and set content
						var infowindow = new google.maps.InfoWindow({
						   	content: content,
						    // Assign a maximum value for the width of the infowindow allows
						    // greater control over the various content elements
						    maxWidth: 350
						});

						// This event expects a click on a marker
						// When this event is fired the Info Window is opened.
						google.maps.event.addListener(marker, 'click', function() {
							infowindow.open(map, marker);
						});

						// Event that closes the Info Window with a click on the map
						google.maps.event.addListener(map, 'click', function() {
							infowindow.close();
						});

						// *
						// START INFOWINDOW CUSTOMIZE.
						// The google.maps.event.addListener() event expects
						// the creation of the infowindow HTML structure 'domready'
						// and before the opening of the infowindow, defined styles are applied.
						// *
						google.maps.event.addListener(infowindow, 'domready', function() {

						    // Reference to the DIV that wraps the bottom of infowindow
						    var iwOuter = $('.gm-style-iw');

						    /* Since this div is in a position prior to .gm-div style-iw.
						     * We use jQuery and create a iwBackground variable,
						     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
						    */
						    var iwBackground = iwOuter.prev();

						    // Removes background shadow DIV
						    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

						    // Removes white background DIV
						    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

						    // Moves the infowindow 115px to the right.
						    //iwOuter.parent().parent().css({left: '115px'});

						    // Moves the shadow of the arrow 76px to the left margin.
						    //iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

						    // Moves the arrow 76px to the left margin.
						    //iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

						    // Changes the desired tail shadow color.
						    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

						    // Reference to the div that groups the close button elements.
						    var iwCloseBtn = iwOuter.next();

						    // Apply the desired effect to the close button
						    iwCloseBtn.css({opacity: '1', right: '55px', top: '20px', border: '7px #48b5e9', 'border-radius': '13px'});

						    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
						    //if($('.iw-content').height() < 140){
						    //  $('.iw-bottom-gradient').css({display: 'none'});
						    //}

						    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
						    iwCloseBtn.mouseout(function(){
						      $(this).css({opacity: '1'});
						    });
						});
					};
			    };
			});
		};

	    self.initMap();
		//initialize locations list according to locations in model
		self.locationsList = ko.observableArray([]);
		model.locations.forEach(function(locationItem) {
			self.locationsList.push(new Location(locationItem));
		});

		self.clickMarker(model.map, model.layer);
		self.addInfoWindow(model.map);
	};

	self.initialize();

	// set big photo width and height according to avalaible area to display
	self.photosWidth = ko.computed(function() {
    	if ($(window).width() > 600)
			return ($(window).width() - 370);
		else
    		return 300;
    });

    // locations array to display in right sidebar accordint to search input value
    // if search is empty - display all locations
    // if search is not empty and there are continent, country or city in search that
    // is presented in array of locations then display locations according to this search
    // otherwise don't display anything
	self.filteredItems = ko.computed(function() {
		var filter = self.searchQuery();
		if (self.searchQuery())
	    	filter = filter.toLowerCase();
	    if (!filter) {
	    	ko.utils.arrayForEach(self.locationsList(), function (loc) {
	    		loc.marker().setVisible(true);
	    	});
	        return self.locationsList();
	    } else {
	    	ko.utils.arrayForEach(self.locationsList(), function (loc) {
	    		loc.marker().setVisible(false);
	    	});
	        var match = ko.utils.arrayFilter(self.locationsList(), function(item) {
	        	var matching = -1;
	        	ko.utils.arrayForEach(self.columnsToSearch(), function (c) {
                    var val = item[c]();
                    if (typeof val === 'number') {
                        val = val.toString();
                    }
                    matching+= val.toLowerCase().indexOf(filter.toLowerCase())+1;
                });
                return matching>=0;
	            //return stringStartsWith(item.city().toLowerCase(), filter);
	        });
	        for (var loc in match)
	        	match[loc].marker().setVisible(true);
	        return match;
	    }
	});

    self.toggleHiddenRight = function() {
    	// if it is hidden show it and vice versa
        self.isHiddenRight(!self.isHiddenRight());
        // if left menu is shown hide it
        if (!self.isHiddenLeft())
            self.toggleHiddenLeft();
    };

    self.toggleHiddenLeft = function() {
        self.isHiddenLeft(!self.isHiddenLeft());
    };

	self.showMarker = function(location) {
		var myLatLng = new google.maps.LatLng(location.lat(),location.lng());
		var marker = location.marker();
		model.map.setCenter(myLatLng);
		model.map.setZoom(12);
		if (marker.getAnimation() !== null) {
   			marker.setAnimation(null);
  		} else {
    		marker.setAnimation(google.maps.Animation.BOUNCE);
  		}
	};

	self.fullMap = function() {
		myLatLng = new google.maps.LatLng(39.104892, 9.456656);
		model.map.setCenter(myLatLng);
		model.map.setZoom(3);
		model.layer.setMap(model.map);
	};

	// show photos in left sidebar according to selected location
    // parameter:
    // 		location - selected from right sidebar location
    self.showPhotos = function(location) {
    	self.currentLocation = location;
    	self.currentPhotos([]);
    	self.currentBigPhoto();
		//var flickrCollectionRequestTimeout = setTimeout(function() {
		//	console.log('fail in flickrCollectionRequestTimeout');
		//    alert('Failed to get Flickr resources');
		//}, 8000);


		// url to use Flickr API to receive all my collections
		//var collections = 'https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=6123d03adcf80439f7f840ff40e2cf5f&format=json&nojsoncallback=1&auth_token=72157658661848010-e40ca7f10290a5d5&api_sig=b3cfdfe69623ac3a5eeb49d7fee15e05';
		var photosets = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=c69f4fb5685159e37196cb8b2b5273cb&user_id=136434920%40N04&format=json&nojsoncallback=1';
		$.ajax({
		    url: photosets,
		    dataType: 'json',
		    success: function(response) {
		        handlePhotosets(response);
		        //clearTimeout(flickrCollectionRequestTimeout);
		    },
	        error: function (xhr, ajaxOptions, thrownError) {
		        alert(xhr.status + ' failed to get Flickr resources for city ' + location.city() + '\nUrl requested: \n' + photosets);
		    }
		});

		var handlePhotosets = function(responseData) {
		    var photosetsList = responseData.photosets.photoset;
		    for (var i = 0; i < photosetsList.length; i++) {
		    	if (photosetsList[i].title._content == self.currentLocation.city()) {
					var city = photosetsList[i].title._content;
			    	var photosetId = photosetsList[i].id;
			        getPhotos(city, photosetId);
		    	}
			}
		};

		var getPhotos = function(city, photosetId) {
			//var flickrPhotosRequestTimeout = setTimeout(function() {
		    //	console.log('fail in flickrPhotosRequestTimeout');
		    //    alert('Failed to get Flickr resources');
		    //}, 8000);

			var photos = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=c69f4fb5685159e37196cb8b2b5273cb&photoset_id=' + photosetId + '&user_id=136434920%40N04&format=json&nojsoncallback=1';
			if (self.currentLocation.photos().length) {
					self.currentPhotos(self.currentLocation.photos());
					self.currentBigPhoto({
						imgAlt: self.currentLocation.photos()[0].imgAlt,
						imgSrc: self.currentLocation.photos()[0].imgSrc,
						imgSize: determineBigSize()
					});
					//clearTimeout(flickrPhotosRequestTimeout);
			} else {
			    $.ajax({
			        url: photos,
			        dataType: 'json',
			        success: function(response) {
			            handlePhotos(response);
			            //clearTimeout(flickrPhotosRequestTimeout);
			        },
			        error: function (xhr, ajaxOptions, thrownError) {
				        alert(xhr.status + ' failed to get Flickr resources for city ' + city + '\nUrl requested: \n' + photos);
				    }
			    });
			}
		};

		var determineBigSize = function() {
			var side = Math.min(Math.max(320, $(window).width() - 370), $(window).height() - 150);
			var photoSize = '.jpg';
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

		var handlePhotos = function(responseData) {
			var firstPhoto = responseData.photoset.photo[0];
			self.currentBigPhoto({
					imgAlt: firstPhoto.title,
					imgSrc: 'https://farm' +
	    					 firstPhoto.farm +
	    					 '.staticflickr.com/' +
	    					 firstPhoto.server +
	    					 '/' +
	    					 firstPhoto.id +
	    					 '_' +
	    					 firstPhoto.secret,
	    			imgSize: determineBigSize()
	        	});
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

	self.changeBigPhoto = function(photo) {
		var size = self.currentBigPhoto().imgSize;
		self.currentBigPhoto({
			imgAlt: photo.imgAlt,
					imgSrc: photo.imgSrc,
	    			imgSize: size
		});
	};

};

$(document).ready(function() {
	var vm = new viewModel();
	ko.applyBindings(vm);
});
