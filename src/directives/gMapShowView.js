/* global google */

function gMapShowView() {
  return {
    retrict: 'A',
    scope: {
      center: '=',
      userLocation: '='
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        center: { lat: 52.4, lng: -0.078 },
        zoom: 16
      });

      // let userLocation;

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log('userLocation--->',userLocation);
        });
      }

      const marker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        animation: google.maps.Animation.DROP
      });

      $scope.$watch('center', () => {
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
      });

      $scope.$watch('userLocation', () => {
        map.setCenter($scope.userLocation);
        marker.setPosition($scope.userLocation);
      });
    }
  };
}
export default gMapShowView;
