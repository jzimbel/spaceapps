var initialLocation;
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
      initialLocation = newyork;
    } else {
      alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
      initialLocation = siberia;
    }
    map.setCenter(initialLocation);
    var marker1 = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: 'YOU ARE HERE',
        zIndex: 1
    });
  }
  
  var marker2 = new google.maps.Marker({
      position: bostonLocation,
      map: map,
      icon: objectImage,
      shape: objectShape,
      title: 'BOSTON CENTER',
      zIndex: 1
  });
}
