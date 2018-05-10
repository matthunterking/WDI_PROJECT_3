/* global google */

function gMapIndexView() {
  return {
    restrict: 'A',
    scope: {
      userLocation: '=?',
      jobListings: '=',
      distance: '=?',
      position: '=',
      setLocation: '&'
    },
    link($scope, $element) {

      let listingMarkers = [];

      const map = new google.maps.Map($element[0], {
        center: { lat: 51.515, lng: -0.078 },
        zoom: 14,
        scrollwheel: false
      });

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          $scope.setLocation({ pos });
          $scope.$apply();
          $scope.userLocation = pos;
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
        $scope.getUserLocation();
      });


      var infowindow = new google.maps.InfoWindow();

      $scope.$watch('jobListings', () => {
        console.log('joblistings changed');
        listingMarkers.forEach(marker => marker.setMap(null));
        listingMarkers = $scope.jobListings.map((job) => {
          const marker = new google.maps.Marker({
            position: job.location,
            map: map
          });
          listingMarkers.push(marker);
          marker.addListener('click', () => {
            showInfoWindow(job, marker);
          });
          return marker;
        });
      }, true);

      function showInfoWindow(job, marker){
        infowindow.close();
        infowindow.setContent(`<div style='width: 150px'>
          <div class="profile-image-small" style="background-image: url(${job.createdBy.image})"></div>

          <h1 class='bodyText'>${job.category} for ${job.createdBy.firstname}</h1>
          <p class='subText'>${job.description}</p>
        <br /><p class='subText'><strong><a href='/#!/jobs/${job._id}'>Get more information</a></strong></p>
      </div>`);
        infowindow.open(map, marker);
        map.setCenter(marker.getPosition());
      }



      //when you click on your location marker, infowindow says 'you are here'...
      userMarker.addListener('click', (function () {
        infowindow.setContent('<strong>You are here!</strong>');
        infowindow.open(map, userMarker);
      }));

    }
  };
}


export default gMapIndexView;
