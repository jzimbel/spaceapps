var pathToAsteroidsFile = 'mockNearEarthAsteroids_byInclination.csv';
var browserSupportFlag =  new Boolean();
var maptype = google.maps.MapTypeId.ROADMAP
var defaultZoom = 14
var initialLocation;
var bostonLocation = new google.maps.LatLng(42.3601, -71.0589);

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
var asteroidOrbit;
var asteroidList = [
  { name: '9081 APM', location: { lat:42.3633, long:-71.0566 }, orbit: [ { lat:42.3633, long:-71.0566 },
                                                                         { lat:42.3608, long:-71.0566 },
                                                                         { lat:42.3608, long:-71.0641 },
                                                                         { lat:42.3633, long:-71.0566 }] },
  { name: '9082 APM', location: { lat:42.3433, long:-71.0566 }, orbit: [ { lat:42.3433, long:-71.0566 },
                                                                         { lat:42.3408, long:-71.0566 },
                                                                         { lat:42.3408, long:-71.0641 },
                                                                         { lat:42.3433, long:-71.0566 }] },
  { name: '9083 APM', location: { lat:42.3233, long:-71.0566 }, orbit: [ { lat:42.3233, long:-71.0566 },
                                                                         { lat:42.3208, long:-71.0566 },
                                                                         { lat:42.3208, long:-71.0641 },
                                                                         { lat:42.3233, long:-71.0566 }] },
  { name: '9084 APM', location: { lat:42.3033, long:-71.0566 }, orbit: [ { lat:42.3033, long:-71.0566 },
                                                                         { lat:42.3008, long:-71.0566 },
                                                                         { lat:42.3008, long:-71.0641 },
                                                                         { lat:42.3033, long:-71.0566 }] },
  { name: '9085 APM', location: { lat:42.2833, long:-71.0566 }, orbit: [ { lat:42.2833, long:-71.0566 },
                                                                         { lat:42.2808, long:-71.0566 },
                                                                         { lat:42.2808, long:-71.0641 },
                                                                         { lat:42.2833, long:-71.0566 }] },
  { name: '9086 APM', location: { lat:42.2633, long:-71.0566 }, orbit: [ { lat:42.2633, long:-71.0566 },
                                                                         { lat:42.2608, long:-71.0566 },
                                                                         { lat:42.2608, long:-71.0641 },
                                                                         { lat:42.2633, long:-71.0566 }] }
];

var flightPlanCoordinates = [
    new google.maps.LatLng(42.3610, -71.0560),
    new google.maps.LatLng(42.3710, -71.0560),
    new google.maps.LatLng(42.3660, -71.0610),
    new google.maps.LatLng(42.3610, -71.0560)
];

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
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
      var userMarker = new google.maps.Marker({
          position: initialLocation,
          map: map,
          icon: earthIcon,
          title: 'YOU ARE HERE',
          zIndex: 3
      });
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }
  
  var sunMarker = new google.maps.Marker({
      position: bostonLocation,
      map: map,
      icon: sunIcon,
      title: 'YOU ARE HERE',
      zIndex: 1
  });
  
  drawMarkers(map)
  
  drawOrbit(map, '9081 APM')
  drawOrbit(map, '9082 APM')
  
  //drawOrbit(map, '9081 APM')
  //readCsvFile(pathToAsteroidsFile);
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag == true) {
    alert("Geolocation service failed. We've placed you in Boston");
    initialLocation = bostonLocation;
  } else {
    alert("Your browser doesn't support geolocation. We've placed you in Boston.");
    initialLocation = bostonLocation;
  }
  map.setCenter(initialLocation);
  var userMarker = new google.maps.Marker({
    position: initialLocation,
    map: map,
    icon: earthIcon,
    title: 'YOU ARE HERE',
    zIndex: 3
  });
}

function drawMarkers(map) {
  for (asteroid of asteroidList)
  {
    asteroidPosition = new google.maps.LatLng(asteroid.location.lat, asteroid.location.long);
    var marker = new google.maps.Marker({
      position: asteroidPosition,
      map: map,
      icon: asteroidIcon,
      title: asteroid.name,
      zIndex: 4
    });
    google.maps.event.addListener(marker, 'click', function() {
      drawOrbit(map, marker.getTitle());
    });
  }
}

function drawOrbit(map, nameOfAsteroid) {
  for (asteroid of asteroidList)
  {
    if (asteroid.name === nameOfAsteroid)
    {
      var orbitCoordinates = [];
      for (asteroidOrbitCoordinate of asteroid.orbit)
      {
        orbitCoordinates.push(new google.maps.LatLng(asteroidOrbitCoordinate.lat, asteroidOrbitCoordinate.long))
      }
      asteroidOrbit = new google.maps.Polyline({
        path: orbitCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        zIndex: 9
      });
      asteroidOrbit.setMap(map);
      return
    }
  }
}

function readCsvFile(file) {
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
        alert(csvArray[0].Object);
      }
    }
  }
    rawFile.send(null);
}

function evalSciNotation(coordString) {
  var baseNum = parseFloat(coordString.slice(0, coordString.indexOf("E")));
  var expoNum = parseFloat(coordString.slice(coordString.indexOf("E")+1));
  return baseNum * Math.pow(10, expoNum);
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
    rowObject['x'] = evalSciNotation(rowObject['x']);
    rowObject['y'] = evalSciNotation(rowObject['y']);
    rowObject['z'] = evalSciNotation(rowObject['z']);
  }
  return csvArray;
}
