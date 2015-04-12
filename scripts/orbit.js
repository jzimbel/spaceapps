/*
 * Created by Jeff Kennedy @ 4/11/2015
 *
 * This function returns a list of {lat, lng} pairs that correspond to
 * the orbit of an entity in our solar system that orbits our Sun, where
 * the Sun is a point on the Earth. All orbits, originally based in AU,
 * are translated at a 1:1 ratio to km (1 AU = 1 km).
 *
 * This function requires the following variables:
 *   q: Perihelion distance of the orbit, measured in AU. (q < Q)
 *   Q: Aphelion distance of the orbit, measured in AU. (q < Q)
 *   e: Eccentricity of the orbit, no units
 *   i: Inclination of the orbit with respect to the ecliptic plane, measured
 *      measured in degrees
 *   w: Argument of perihelion, measured in degrees
 *   sun: the location of the Sun as a google.maps.LatLng object (for offset)
 */
function constructEllipse(q, Q, e, i, w, sun)
{
  // Generic... calculate 21 points
  var a = (Q + q)/2;
  var b = e * (Q + q) / 2;
  var offset = Q - (Q + q) / 2;
  
  console.log(q);
  
  var points = new Array();
  for(i = 0; i <= 20; i++) // top right quadrant
  {
    x_temp = a * (i/20);
    var y_temp = b * Math.sqrt(1 - (x_temp*x_temp/(a*a)));
    points.push({x:(x_temp * Math.cos(toRadians(i))), y:(y_temp)});
  }
  // Mirror all points to complete ellipse
  for(index = 20; index >= 0; index--) // bottom right quadrant
  {
  points.push({x:(points[index].x), y:(points[index].y * -1)});
  }
  for(index = 0; index < 21; index++) // bottom left quadrant
  {
  points.push({x:(points[index].x * -1), y:(points[index].y * -1)});
  }
  for(index = 20; index >= 0; index--) // top left quadrant
  {
  points.push({x:(points[index].x * -1), y:(points[index].y)});
  }
  // Shift over points by offset (move Sun to (0,0))
  for(index = 0; index < points.length; index++)
  {
  points[index].x += offset;
  }
  // Rotate points by argument of perihelion
  for(index = 0; index < points.length; index++)
  {
  points[index] = rotate(points[index].x, points[index].y, w);
  }
  
  var coords = new Array();
  for(index = 0; index < points.length; index++)
  {
    coords.push(getLatLng(points[index].x, points[index].y, sun));
  }
  return coords;
}

/*
 * This function converts degrees to radians.
 */
function toRadians(angle)
{
  return angle * (Math.PI / 180);
}

/*
 * This function converts AU coordinates of an astronomical body to {lat, lng} coordinates
 */
function getLatLng(x_old, y_old, sun)
{
  var y = (y_old / 110.54) + sun.lat(); // convert to lat, offset by sun
  var x = (x_old / (111.32 * Math.cos(toRadians(y)))) + sun.lng(); // convert to lng, offset by sun
  return {lat:y, lng:x};
}

/*
 * This function rotates a point in an orbit based on w, the argument of perihelion
 */
function rotate(x, y, w)
{
  w = toRadians(w);
  var dist = Math.sqrt(x*x + y*y); // distance between Sun and that point
  var alpha = Math.atan(y/x); // rads
  var theta = w + alpha; // rads
  var Cy = dist * Math.sin(theta);
  var Cx = dist * Math.cos(theta);
  if(x < 0)
  {
    Cx = Cx * -1;
    Cy = Cy * -1;
  }
  return {x:Cx, y:Cy};
}

/*
 * This function returns a {lat, lng} object representing the AU position of the sun relative
 * to the current location of the user (representing the current location of the Earth)
 */
function getSunLatLng(earthX, earthY, earthLat, earthLng)
{
  var sunX = earthX * -1;
  var sunY = earthY * -1;
  return getLatLng(sunX, sunY, new google.maps.LatLng(earthLat, earthLng));
}
