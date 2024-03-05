 window.onload = function() {
    var container = document.getElementById('map');  // 불러올 지도를 담는 박스의 id
    var options = {
      center: new daum.maps.LatLng(37.571424558609, 126.98347599050514),
      level: 2,
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition = new daum.maps.LatLng(
      37.571424558609,
      126.98347599050514
    ); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
}