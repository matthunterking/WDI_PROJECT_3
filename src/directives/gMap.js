/* global google */

function gMap() {
  return {
    retrict: 'A',
    scope: {
      center: '=',
      listings: '='
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
        label: "😃",
        animation: google.maps.Animation.DROP
      });

      let listingMarkers = [];

      $scope.$watch('center', () => {
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
      });

      $scope.$watch('listings', () => {
        listingMarkers.forEach(marker => marker.setMap(null));
        listingMarkers = $scope.listings.map((listing) => {
          return new google.maps.Marker({
            position: listing.location,
            map: map
          });
        });
      });

    }
  };
}
export default gMap;
