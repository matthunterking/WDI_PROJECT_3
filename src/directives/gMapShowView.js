/* global google */

function gMapShowView() {
  return {
    retrict: 'A',
    scope: {
      center: '=',
      distance: '=?'
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        center: { lat: 52.4, lng: -0.078 },
        zoom: 16
      });

      const distance = (() => {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            const service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
              {
                origins: [userLocation],
                destinations: [$scope.center],
                travelMode: 'WALKING'
              }, callback);
            function callback(response) {
              $scope.distance = response.rows[0].elements[0].distance.text;
              $scope.$apply();
            }
          });
        }
      });

      const marker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        animation: google.maps.Animation.DROP
      });

      $scope.$watch('center', () => {
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
        distance();
      });
    }
  };
}
export default gMapShowView;
