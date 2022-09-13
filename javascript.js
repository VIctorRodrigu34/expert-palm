function iniciarMap(){
    var mapDiv = document.getElementById("mymap");
    var mapOptions = {
      center: new google.maps.LatLng (32.59534 ,33.4431949),
      zoom: 4,
      mapTypeId : google.maps.MapTypeId.ROADMAP 
    };
    var map = new google.maps.Map(mapDiv, mapOptions);

    var destinations = [];
    destinations.push (new google.maps.LatLng(30.59534 ,35.4431949));
    destinations.push (new google.maps.LatLng(31.59534 ,34.4431949));
    destinations.push (new google.maps.LatLng(33.59534 ,36.4431949));

    var polylineOptions = {path: destinations,
      strokeColor:"#ff000", strokeWeight: 4};
      var polyline = new google.maps.Polyline (polylineOptions);
      polyline.setMap(map);
}
window.onload = iniciarMap;