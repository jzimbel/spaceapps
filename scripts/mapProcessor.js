var pathToAsteroidsFile = 'nearEarthAsteroids.csv';
var browserSupportFlag =  new Boolean();
var maptype = google.maps.MapTypeId.ROADMAP
var defaultZoom = 14
var userLocation;
var bostonLocation = new google.maps.LatLng(42.3601, -71.0589);
var earthx = -9.288690677218622E-01;
var earthy = -3.686172168756586E-01;
var earthz = -1.341590106057282E-04;

var asteroidHeight = 32;
var asteroidWidth  = 20;
var sunHeight = 32;
var sunWidth = 32;
var asteroidIcon = {
  url: "images/asteroid_dealwithit.png", // url
  scaledSize: new google.maps.Size(asteroidWidth, asteroidHeight), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(10, 16)  // anchor
};
var sunIcon = {
  url: "images/sun_dealwithit.png", // url
  scaledSize: new google.maps.Size(sunWidth, sunHeight), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(16, 16)  // anchor
}
var earthIcon = {
  url: "images/earth_dealwithit.png", // url
  scaledSize: new google.maps.Size(sunWidth, sunHeight), // scaled size
  origin: new google.maps.Point(0, 0), // origin
  anchor: new google.maps.Point(16, 16)  // anchor
}
var asteroidOrbit = new google.maps.Polyline({
  path: [ new google.maps.LatLng(0,0),
          new google.maps.LatLng(0,1) ],
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2,
  zIndex: 9
});

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: defaultZoom,
    mapTypeId: maptype
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  // Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        processCoords(position.coords.latitude, position.coords.longitude, map);
      },
      function() {
        processCoords(bostonLocation.lat, bostonLocation.lng, map);
      }
    );
  }
  else {
    processCoords(bostonLocation.lat, bostonLocation.lng, map);
  }
}

function processCoords(lat, lng, map) {
  var userLocation = new google.maps.LatLng(lat, lng);
  map.setCenter(userLocation);
  userMarker = new google.maps.Marker({
    position: userLocation,
    map: map,
    icon: earthIcon,
    title: 'YOU ARE HERE',
    zIndex: 3
  });
  var sunLocation = getSunLatLng(earthx, earthy, lat, lng)
  var sunLocationLatLng = new google.maps.LatLng(sunLocation.lat, sunLocation.lng);
  
  var sunMarker = new google.maps.Marker({
      position: sunLocationLatLng,
      map: map,
      icon: sunIcon,
      title: 'YOU ARE HERE',
      zIndex: 1
  });
  var csvObjects = csvToArray(readTextFile(pathToAsteroidsFile));
  var asteroidList = getAsteroidObjects(csvObjects, sunLocationLatLng);
  asteroidList = demoModeAsteroids(asteroidList);
  drawMarkers(map, asteroidList, sunLocationLatLng);
}

function readTextFile(file) {
    debugger;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var csvArray = csvToArray(allText)
            }
        }
    }
    rawFile.send(null);
    return rawFile.response;
}

function csvToArray(csvString) {
  // The array we're going to build
  var csvArray   = [];
  // Break it into rows to start
  var csvRows    = csvString.split(/\n/);
  // Take off the first line to get the headers, then split that into an array
  var csvHeaders = csvRows.shift().split(',');
  // Loop through remaining rows
  for (var rowIndex = 0; rowIndex < csvRows.length; ++rowIndex)
  {
    var rowArray  = csvRows[rowIndex].split(',');
    // Create a new row object to store our data.
    var rowObject = csvArray[rowIndex] = {};
    // Then iterate through the remaining properties and use the headers as keys
    for (var propIndex = 0; propIndex < rowArray.length; ++propIndex)
    {
      // Grab the value from the row array we're looping through...
      var propValue = rowArray[propIndex].replace(/^"|"$/g,'');
      // ...also grab the relevant header (the RegExp in both of these removes quotes)
      var propLabel = csvHeaders[propIndex].replace(/^"|"$/g,'');
      rowObject[propLabel] = propValue;
    }
  }
  return csvArray;
}

function getAsteroidObjects(csvArray, sunCoords) {
  var asteroidList = [];
  for (csvElement of csvArray)
  {
    var asteroidLocation = getLatLng(csvElement.x, csvElement.y, sunCoords);
    var asteroidOrbit = constructEllipse(parseFloat(csvElement.q), parseFloat(csvElement.Q), parseFloat(csvElement.e),
                                         parseFloat(csvElement.i), parseFloat(csvElement.w), sunCoords);
    var asteroidZInMeters = Math.round(100*(csvElement.z * 1000))/100;
    var asteroidXInLatLng = Math.round(10000*(csvElement.x))/10000;
    var asteroidYInLatLng = Math.round(10000*(csvElement.y))/10000;
    var toolTip = "<table><tr><td><b>name:  </b></td><td>".concat(csvElement.Object);
    toolTip = toolTip.concat("<td></tr><tr><td><b>altitude:  </b></td><td>".concat(asteroidZInMeters.toString()));
    toolTip = toolTip.concat("m</td></tr><tr><td><b>dx from sun:  </b></td><td>".concat(asteroidXInLatLng.toString()));
    toolTip = toolTip.concat("km</td></tr><tr><td><b>dy from sun:  </b></td><td>".concat(asteroidYInLatLng.toString()));
    toolTip = toolTip.concat("km</td></tr></table>");
    var asteroid = { name: csvElement.Object, location: asteroidLocation, orbit: asteroidOrbit, tooltip: toolTip };
    asteroidList.push(asteroid);
  }
  return asteroidList;
}

function demoModeAsteroids(asteroidList) {
  for (asteroid of asteroidList) {
    var index = Math.floor((Math.random() * 83));
    asteroid.location = asteroid.orbit[index];
  }
  return asteroidList;
}

function drawMarkers(map, asteroidList, sunLocation) {
  for (asteroid of asteroidList)
  {
    asteroidPosition = new google.maps.LatLng(asteroid.location.lat, asteroid.location.lng);
    var marker = new google.maps.Marker({
      position: asteroidPosition,
      map: map,
      icon: asteroidIcon,
      title: asteroid.name,
      zIndex: 4
    });
    attachListener(marker, asteroid.tooltip, asteroidList);
  }
}

function attachListener(marker, toolTip, asteroidList) {
  
  var map = marker.get('map');
  var asteroidNew;
  
  for (asteroid of asteroidList)
  {
    if (asteroid.name === marker.getTitle())
    {
      asteroidNew = asteroid;
      break
    }
  }
  
  var infowindow = new google.maps.InfoWindow({
    content: toolTip
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    asteroidOrbit.setMap(null);
    
    var orbitCoordinates = [];
    for (asteroidOrbitCoordinate of asteroidNew.orbit)
    {
      orbitCoordinates.push(new google.maps.LatLng(asteroidOrbitCoordinate.lat, asteroidOrbitCoordinate.lng))
    }
    asteroidOrbit = new google.maps.Polyline({
      path: orbitCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      zIndex: 9
    });
    var map = marker.get('map');
    asteroidOrbit.setMap(map);
    infowindow.open(map, marker);
  });
}
