angular.module('EarthquakeMap.controllers', [])

.controller('MapCtrl', function($scope, $timeout, filters) {

  $scope.updateFilters = function updateFilters(filter) {
      if(filter == 'mag') $scope.magSlide.value = $scope.magSlide.min;
      else if(filter == 'date') $scope.dateSlide.value = $scope.dateSlide.max;
      console.log($scope.magFilter);
    
  }

  if($scope.magFilter == false) $scope.magSlide.value = $scope.magSlide.min;
  if($scope.dateFilter == false) $scope.dateSlide.value = $scope.dateSlide.max;

  var self = this;
  var map;
  $scope.positions = [];

  $scope.magFilter = true;
  $scope.dateFilter = true;

  var coords;
  $scope.magSlide = {
    value: '7',
    max: '7',
    min: '2'
  }

  $scope.dateSlide = {
    value: '14',
    min: '14',
    max: '22'
  }

  self.injected = false;


  //self.init = initMap;

  self.fill = function(){

    $scope.positions = [];

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');

    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    if(self.injected == false){
        document.getElementsByTagName('head')[0].appendChild(script);
        self.injected = true;
    }
    console.log(self.positions);
    }

    window.eqfeed_callback = function(results){
        for(var i=0; i < results.features.length; i++){
            coords = results.features[i].geometry.coordinates;
            //console.log(results.features[i].properties.mag);
            var d = new Date(0);
            d.setUTCSeconds(results.features[i].properties.time);

            $scope.positions.push({pos: [coords[1], coords[0]], mag: (results.features[i].properties.mag).toString(), size: (results.features[i].properties.mag) * 5, when: d});
            console.log($scope.positions[i].when.getDate());
        }

        console.log($scope.positions);
    }

})
