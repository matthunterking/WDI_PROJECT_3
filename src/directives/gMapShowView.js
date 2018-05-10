/* global google */

function gMapShowView() {
  return {
    restrict: 'A',
    scope: {
      userLocation: '=?',
      jobLocation: '=',
      distance: '=?'
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        center: { lat: 52.4, lng: -0.078 },
        zoom: 16
      });

      const directionService = new google.maps.DirectionsService();
      const directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          $scope.userLocation = pos;
          map.setCenter(pos);
          userMarker.setPosition(pos);
          $scope.$apply();
        });
      }

      function displayRoute() {
        directionService.route({
          origin: $scope.userLocation,
          destination: $scope.jobLocation,
          travelMode: 'WALKING'
        }, (res) => {
          $scope.distance = res.routes[0].legs[0].distance.text;
          $scope.$apply();
          directionsDisplay.setDirections(res);
        });
      }

      const userMarker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#D4EDF4',
          fillOpacity: 1,
          scale: 8,
          strokeColor: '#4298B5',
          strokeWeight: 4
        },
        animation: google.maps.Animation.DROP
      });

      const marker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        animation: google.maps.Animation.DROP
      });

      $scope.$watch('userLocation', () => {
        if(!$scope.userLocation) return false;
        map.setCenter($scope.userLocation);
        userMarker.setPosition($scope.userLocation);
        displayRoute();
      });

      $scope.$watch('jobLocation', () => {
        marker.setPosition($scope.jobLocation);
      });
    }
  };
}
export default gMapShowView;
