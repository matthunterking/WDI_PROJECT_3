/* global google */

function gAutocomplete() {
  return {
    restrict: 'A',
    scope: {
      handleChange: '&'
    },
    link($scope, $element) {
      const autocomplete = new google.maps.places.Autocomplete($element[0]);
      autocomplete.addListener('place_changed', () => {
        $scope.handleChange({ location:
          {
            lng: autocomplete.getPlace().geometry.location.toJSON().lng,
            lat: autocomplete.getPlace().geometry.location.toJSON().lat
          }
        });
      });
    }
  };
}

export default gAutocomplete;
