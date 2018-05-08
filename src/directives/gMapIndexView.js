/* global google */

function gMapIndexView() {
  return {
    retrict: 'A',
    scope: {
      userLocation: '=?',
      jobListings: '=',
      distance: '=?'
    },
    link($scope, $element) {

      let listingMarkers = [];

      const map = new google.maps.Map($element[0], {
        center: { lat: 51.515, lng: -0.078 },
        zoom: 14
      });

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          $scope.userLocation = pos;
          $scope.$apply();
          map.setCenter(pos);
          userMarker.setPosition(pos);
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
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
      });

      $scope.$watch('jobListings', () => {
        listingMarkers.forEach(marker => marker.setMap(null));
        listingMarkers = $scope.jobListings.map((job) => {
          return new google.maps.Marker({
            position: job.location,
            map: map
          });
        });
      });

    }
  };
}
export default gMapIndexView;
