var initialLocation;
var pathToAsteroidsFile = 'mockNearEarthAstroids.csv';
var browserSupportFlag =  new Boolean();
var maptype = google.maps.MapTypeId.HYBRID
var bostonLocation = new google.maps.LatLng(42.3601, -71.0589);
// Origins, anchor positions and coordinates of the marker
// increase in the X direction to the right and in
// the Y direction down.
var objectImage = {
  url: 'images/asteroid.png',
  // This marker is 20 pixels wide by 32 pixels tall.
  size: new google.maps.Size(20, 32),
  // The origin for this image is 0,0.
  origin: new google.maps.Point(0,0),
  // The anchor for this image is the base of the flagpole at 0,32.
  anchor: new google.maps.Point(0, 32)
};
// Shapes define the clickable region of the icon.
// The type defines an HTML &lt;area&gt; element 'poly' which
// traces out a polygon as a series of X,Y points. The final
// coordinate closes the poly by connecting to the first
// coordinate.
var objectShape = {
    coords: [1, 1, 1, 20, 18, 20, 18 , 1],
    type: 'poly'
};

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  // Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
      var marker1 = new google.maps.Marker({
          position: initialLocation,
          map: map,
          title: 'YOU ARE HERE',
          zIndex: 1
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

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = bostonLocation;
    } else {
      alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
      initialLocation = bostonLocation;
    }
    map.setCenter(initialLocation);
    var marker1 = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: 'YOU ARE HERE',
        zIndex: 1
    });
  }
  
  readTextFile(pathToAsteroidsFile);
  
  var marker2 = new google.maps.Marker({
      position: bostonLocation,
      map: map,
      icon: objectImage,
      shape: objectShape,
      title: 'BOSTON CENTER',
      zIndex: 1
  });
}

function readTextFile(file) {
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
                alert(csvArray[0]);
            }
        }
    }
    rawFile.send(null);
}

function csvToArray(csvString) {
  // The array we're going to build
  var csvArray   = [];
  // Break it into rows to start
  var csvRows    = csvString.split(/\n/);
  // Take off the first line to get the headers, then split that into an array
  var csvHeaders = csvRows.shift().split(',');

  // Loop through remaining rows
  for(var rowIndex = 0; rowIndex < csvRows.length; ++rowIndex){
    var rowArray  = csvRows[rowIndex].split(',');

    // Create a new row object to store our data.
    var rowObject = csvArray[rowIndex] = {};
    
    // Then iterate through the remaining properties and use the headers as keys
    for(var propIndex = 0; propIndex < rowArray.length; ++propIndex){
      // Grab the value from the row array we're looping through...
      var propValue = rowArray[propIndex].replace(/^"|"$/g,'');
      // ...also grab the relevant header (the RegExp in both of these removes quotes)
      var propLabel = csvHeaders[propIndex].replace(/^"|"$/g,'');;

      rowObject[propLabel] = propValue;
    }
  }
  return csvArray;
}
