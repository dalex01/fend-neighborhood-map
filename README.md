# Places in the World I've visited with my family and friends
This map represent different cities all over the world I have visited with my family and friends since 2009.

## How to use
Here is link to the map: http://dalex01.github.io/frontend-nanodegree-neighborhood-map

## Features

### Map
1. Visited cities are marked at the load of the map.
2. Places marked with heart was visited only with my family
3. Places merked with yellow pin was visited with my friends and family
4. Visited countries are filled in with green color
5. Click on marker will center and zoom to this place and open infowindow with additional information

### Right sidebar
1. List of all places are presented in right sidebar
2. It can be opened or closed by menu icon
3. By fullscreen menu icon from right sidebar map can be zoom out and centered to show all places
4. Click on location in the list you will be zoomed in and centered at this location and infowindow will be displayed
5. Click on 'Show map' link - the same as in item 4 above.
6. Click on 'Show details' will open additional details of visit: hotel, address, number of persons in company
7. Click on 'Show photos' will open left sidebar with photos from this place uploaded in Flickr

### Left sidebar
1. Display list of photos loaded to Flickr into album with the name of the city of clicked location
2. Photos in the list can be clicked to display big photos

### Search
1. In searchbar you can search location by:
  - continent
  - country
  - city
  - year of visit
  - month of visit

###TODO
1. Menu button in right menu should be fixed during scrolling
2. Create feature to add new locations via UI
3. Create feature to choose on which field we want to search.
4. Use localStorage and Firebase to configure locations and restore previous state of application
5. Convert all css to BEM
6. Make gray background during big photo displaying


## APIs used
Google Maps Javascript API
Google Fusion Tables
Flickr API
Wikipedia API
