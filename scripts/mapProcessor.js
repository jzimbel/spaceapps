var csvData =
"Object,a,e,i,w,Node,M,q,Q,P,H,MOID,ref,class,x,y,z\n" +
"(2004 FH),0.82,0.289,0.0,35.1,292.5,50.9,0.581,1.05,0.74,25.70,0.000023,20,ATE,-1.003500344053015E+00,2.007275655941689E-01,-4.594585000401057E-04\n" +
"(2009 EJ1),1.59,0.473,0.0,149.7,311.4,22.1,0.840,2.35,2.01,28.40,0.000190,5,APO,-1.176221679026513E+00,-1.172603707251980E-01,-5.504373975013108E-04\n" +
"(2013 GM3),0.84,0.288,0.0,321.3,28.2,291.1,0.596,1.08,0.76,26.30,0.000010,17,ATE,-3.304297259399045E-01,8.411175444685567E-01,-1.488909587495009E-05\n" +
"(2009 FG),1.97,0.530,0.0,82.0,42.6,15.9,0.925,3.01,2.76,25.50,0.000426,13,APO,-1.956262881910662E-01,-2.388647298540854E+00,-1.036977436416185E-03\n" +
"(2014 KC45),1.52,0.395,0.0,189.4,105.4,82.1,0.918,2.12,1.87,29.30,0.000393,4,APO,-3.274587090635875E-01,2.040892157938392E+00,-2.964555616136183E-04\n" +
"(2010 XW58),1.61,0.399,0.0,290.0,126.9,357.0,0.965,2.25,2.03,24.90,0.000475,18,APO,-1.400613838583410E+00,4.980531605678896E-01,4.181195259871796E-04\n" +
"(2008 VB4),2.35,0.618,0.1,171.3,189.3,8.7,0.900,3.81,3.61,28.20,0.000512,5,APO,-1.970863164214389E+00,-1.821305754175175E+00,1.391701514354804E-03\n" +
"(2009 TD17),1.13,0.220,0.1,82.3,219.0,165.4,0.879,1.38,1.20,27.70,0.000195,5,APO,-1.183548854618488E+00,-9.513889573262227E-02,-1.058643073414009E-03\n" +
"(2014 AG51),1.88,0.591,0.1,261.4,141.5,144.4,0.768,2.98,2.57,29.90,0.000348,3,APO,-2.033586592716091E+00,-2.166414943015674E+00,4.524995543748079E-03\n" +
"(2014 GQ17),0.85,0.247,0.1,331.8,78.0,75.8,0.643,1.07,0.79,27.10,0.000143,14,ATE,-1.291590619129482E-01,-1.004270898990522E+00,-2.711020554086140E-04\n" +
"(2005 TD49),2.69,0.622,0.1,191.9,196.4,26.7,1.016,4.36,4.41,26.40,0.020925,11,APO,-2.468604068398762E+00,1.062343574897217E+00,-3.024357700259487E-03\n" +
"(2010 JL88),1.42,0.503,0.1,45.7,274.5,216.8,0.707,2.14,1.70,26.80,0.001179,6,APO,-1.505442989250128E+00,-3.212975790205125E-01,-2.956745190574166E-03\n" +
"(2013 PG10),1.08,0.227,0.1,210.7,3.8,143.6,0.834,1.32,1.12,27.80,0.001423,8,APO,1.063060212565137E-01,1.190511060974747E+00,2.065928839938412E-03\n" +
"(2012 HG2),1.19,0.182,0.1,26.4,143.4,40.3,0.973,1.41,1.30,27.00,0.000064,29,APO,9.951254080142501E-01,-9.265330912619477E-01,1.471469858987006E-04\n" +
"(2000 SG344),0.98,0.067,0.1,275.1,192.1,156.0,0.912,1.04,0.97,24.70,0.000791,15,ATE,8.999247175079372E-01,3.634595720948047E-01,-4.733746080211124E-04\n" +
"(2015 BE511),2.49,0.616,0.1,177.5,279.7,353.7,0.956,4.03,3.93,28.60,0.000653,3,APO,-1.544324583528399E+00,-2.478364225530566E-01,8.687526799608538E-03\n" +
"(2009 OW6),1.96,0.483,0.1,230.8,94.8,339.9,1.011,2.90,2.73,25.40,0.001502,10,APO,1.058163998178197E+00,7.121212040503665E-01,-2.422147427100759E-03\n" +
"(2011 CA7),1.08,0.288,0.1,278.9,310.7,89.9,0.769,1.39,1.12,30.30,0.000330,6,APO,6.855563788200718E-01,1.201732470291359E+00,2.529189976744944E-03\n" +
"(2010 FN),0.99,0.211,0.1,126.1,161.5,199.7,0.781,1.20,0.98,26.60,0.000803,9,ATE,-4.960307251394335E-01,-6.773703097163706E-01,1.576684921087399E-03\n" +
"(2011 DE5),2.29,0.636,0.1,55.5,161.5,22.0,0.832,3.74,3.46,26.40,0.000063,7,APO,2.343904977821010E+00,-4.443648536858420E-01,-8.530939878238341E-04\n" +
"(2011 BA12),2.48,0.574,0.1,288.8,243.5,345.3,1.056,3.91,3.91,22.50,0.062879,38,AMO,-7.384530779908035E-01,-1.098750347785661E+00,-5.436078391778242E-04\n" +
"152685 (1998 MZ),1.35,0.573,0.1,40.8,120.6,238.6,0.575,2.12,1.56,19.30,0.001570,81,APO*,7.433056037753323E-01,8.762876890855660E-01,-2.919719867119760E-03\n" +
"(2004 XG29),1.41,0.313,0.2,110.1,302.6,3.7,0.968,1.85,1.67,25.30,0.001990,16,APO,-1.395227695324897E+00,3.653258214504121E-01,-2.780101057604660E-03\n" +
"(2010 CQ19),2.77,0.641,0.2,271.7,211.5,4.3,0.993,4.54,4.60,27.10,0.009354,9,APO,-9.429369728346596E-01,-2.405690816384942E+00,4.102025995393999E-03\n" +
"(2015 EG7),1.99,0.569,0.2,57.0,175.4,311.2,0.858,3.13,2.81,27.35,0.000257,6,APO,-7.683614168372053E-01,-4.300052493942261E-01,1.250948504876322E-03\n" +
"(2010 JK1),1.03,0.150,0.2,137.4,202.1,47.3,0.875,1.18,1.04,24.40,0.001812,23,APO,-9.955925029597775E-01,6.278359009661760E-01,-2.921391311988902E-03\n" +
"(2013 RZ5),1.57,0.594,0.2,200.0,230.7,204.3,0.639,2.51,1.97,28.40,0.002719,4,APO,4.219097676762672E-01,-2.033762699063539E+00,4.526270730492343E-03\n" +
"(2015 FF36),2.10,0.536,0.2,205.0,6.3,318.5,0.975,3.23,3.05,26.51,0.000221,5,APO,-8.764901399837508E-01,-4.221517678408029E-01,-1.156937570678653E-03\n" +
"(2012 MY2),1.26,0.204,0.2,97.0,202.3,247.7,1.003,1.52,1.41,26.40,0.002903,26,APO,-1.722184644944041E-01,-1.028078222080727E+00,2.680835467241380E-03\n" +
"(2008 YD3),2.93,0.649,0.2,262.2,179.0,1.8,1.028,4.83,5.02,26.20,0.044052,7,AMO,-2.338501535278916E+00,-3.279169773063851E+00,1.060488596864698E-02\n" +
"(2012 EJ5),1.47,0.316,0.2,141.0,36.5,189.7,1.007,1.94,1.79,27.70,0.012100,4,APO,1.211530399577613E+00,1.182433332564156E+00,6.159672123939092E-04\n" +
"(2011 CL50),0.89,0.144,0.2,289.5,17.5,48.6,0.759,1.01,0.84,27.60,0.002037,7,ATE,-7.515451844764333E-01,6.731082360808199E-01,2.701849999289562E-03\n" +
"(2011 WQ4),1.81,0.471,0.2,238.4,207.9,82.7,0.957,2.66,2.43,27.40,0.001776,8,APO,-1.005631477663603E+00,-2.314149005812445E+00,5.145333980956041E-03\n" +
"(2013 YB),1.55,0.429,0.2,230.2,269.0,341.3,0.888,2.22,1.94,31.50,0.000126,3,APO,6.803424332842828E-01,9.964548993182104E-01,-3.342762271964253E-02\n" +
"(2006 HX57),1.81,0.495,0.2,160.3,111.0,178.2,0.912,2.70,2.43,25.20,0.001523,11,APO,-9.076643271693946E-01,2.390245173416493E+00,-1.676304761534647E-04\n" +
"(2013 VJ11),1.51,0.404,0.2,276.6,82.0,230.2,0.898,2.12,1.85,27.90,0.001990,9,APO,-5.570610116792736E-01,-1.363818755461670E+00,1.121415629215097E-03\n" +
"(2001 AV43),1.28,0.241,0.2,51.2,20.5,251.8,0.975,1.59,1.45,24.60,0.001672,41,APO,8.653596674417584E-01,5.443566208723936E-01,5.845551330171364E-04\n" +
"(2012 QG8),2.55,0.513,0.2,93.6,130.9,247.9,1.243,3.86,4.07,19.20,0.235234,14,AMO,1.095133540562125E-01,2.988626823835490E+00,-7.352703636776523E-03\n" +
"(2014 UY57),2.35,0.581,0.2,304.5,59.3,18.5,0.984,3.71,3.60,27.20,0.002447,6,APO,-1.307683132145269E+00,1.820505261129407E+00,7.763817200498560E-03\n" +
"(2002 RB182),2.50,0.644,0.2,254.2,165.5,347.1,0.891,4.11,3.96,23.10,0.002025,8,APO,-2.458198128305251E+00,-4.161612013856291E-01,3.851128774765713E-03";

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

//var asteroidList = [
//  { name: '9081 APM', location: { lat:42.3633, lng:-71.0566 }, orbit: [ { lat:42.3633, lng:-71.0566 },
//                                                                        { lat:42.3608, lng:-71.0566 },
//                                                                        { lat:42.3608, lng:-71.0641 },
//                                                                        { lat:42.3633, lng:-71.0566 }] },
//  { name: '9082 APM', location: { lat:42.3433, lng:-71.0566 }, orbit: [ { lat:42.3433, lng:-71.0566 },
//                                                                        { lat:42.3408, lng:-71.0566 },
//                                                                        { lat:42.3408, lng:-71.0641 },
//                                                                        { lat:42.3433, lng:-71.0566 }] },
//  { name: '9083 APM', location: { lat:42.3233, lng:-71.0566 }, orbit: [ { lat:42.3233, lng:-71.0566 },
//                                                                        { lat:42.3208, lng:-71.0566 },
//                                                                        { lat:42.3208, lng:-71.0641 },
//                                                                        { lat:42.3233, lng:-71.0566 }] },
//  { name: '9084 APM', location: { lat:42.3033, lng:-71.0566 }, orbit: [ { lat:42.3033, lng:-71.0566 },
//                                                                        { lat:42.3008, lng:-71.0566 },
//                                                                        { lat:42.3008, lng:-71.0641 },
//                                                                        { lat:42.3033, lng:-71.0566 }] },
//  { name: '9085 APM', location: { lat:42.2833, lng:-71.0566 }, orbit: [ { lat:42.2833, lng:-71.0566 },
//                                                                        { lat:42.2808, lng:-71.0566 },
//                                                                        { lat:42.2808, lng:-71.0641 },
//                                                                        { lat:42.2833, lng:-71.0566 }] },
//  { name: '9086 APM', location: { lat:42.2633, lng:-71.0566 }, orbit: [ { lat:42.2633, lng:-71.0566 },
//                                                                        { lat:42.2608, lng:-71.0566 },
//                                                                        { lat:42.2608, lng:-71.0641 },
//                                                                        { lat:42.2633, lng:-71.0566 }] }
//];

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
  //drawOrbit(map, '9081 APM')
  //readCsvFile(pathToAsteroidsFile);
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
  var csvObjects = csvToArray(csvData);
  var asteroidList = getAsteroidObjects(csvObjects, sunLocationLatLng);
  drawMarkers(map, asteroidList, sunLocationLatLng);
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
    var toolTip = "name: \"".concat(csvElement.Object);
    toolTip = toolTip.concat("\", height: \"".concat(asteroidZInMeters.toString()));
    toolTip = toolTip.concat("\"m, dx from sun: \"".concat(asteroidXInLatLng.toString()));
    toolTip = toolTip.concat("\"km, dy from sun: \"".concat(asteroidYInLatLng.toString()));
    toolTip = toolTip.concat("\"km");
    var asteroid = { name: csvElement.Object, location: asteroidLocation, orbit: asteroidOrbit, tooltip: toolTip };
    asteroidList.push(asteroid);
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
