/* global google */

function gMap() {
  return {
    retrict: 'A',
    scope: {
      center: '='
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        center: { lat: 51.515, lng: -0.078 },
        zoom: 16
      });

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
          marker.setPosition(pos);
        });
      }

      const marker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        animation: google.maps.Animation.DROP
      });

      const locations = [
        { lat: 51.515, lng: -0.078 },
        { lat: 51.515, lng: -0.068 },
        { lat: 51.515, lng: -0.078 },
        { lat: 51.715, lng: -0.078 },
        { lat: 51.915, lng: -0.078 },
        { lat: 51.565, lng: -0.078 },
        { lat: 51.555, lng: -0.078 },
        { lat: 51.645, lng: -0.078 },
        { lat: 51.345, lng: -0.078 }
      ];

      locations.map(function(location) {
        return new google.maps.Marker({
          position: location,
          map: map
        });
      });

      $scope.$watch('center', () => {
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
      });

    }
  };
}
export default gMap;
