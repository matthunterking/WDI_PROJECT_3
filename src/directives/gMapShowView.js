/* global google */

function gMapShowView() {
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

      const marker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        animation: google.maps.Animation.DROP
      });

      $scope.$watch('center', () => {
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
      });
    }
  };
}
export default gMapShowView;
