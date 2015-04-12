function constructEllipse(q, Q, e, i, w)
{
  // Generic... calculate 21 points
  var a = (Q + q)/2;
  var b = e * (Q + q) / 2;
  var offset = Q - (Q + q) / 2;
  
  var points = new Array();
  for(x_temp = 0; x_temp <= a; x_temp+=(a/20)) // top right quadrant
  {
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
    coords.push(getLatLng(points[index].x, points[index].y));
  }
  return coords;
}

function toRadians(angle)
{
  return angle * (Math.PI / 180);
}

function getLatLng(x_old, y_old)
{
	var y = (y_old / 110.54) + boston.lat(); // convert to lat, offset by boston
	var x = (x_old / (111.32 * Math.cos(toRadians(y)))) + boston.lng(); // convert to lng, offset by boston
	return {lat:y, lng:x};
}

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