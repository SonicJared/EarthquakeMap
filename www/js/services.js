angular.module('EarthquakeMap.services', [])

.factory('filters', function() {
  var filters = {
    mag: true,
    date: true
  };

  return {
    filters: filters,

    get: function() {
      return filters;
    },
    update: function(magVal, dateVal){
      filters.mag = magVal;
      filters.date = dateVal;
      return filters;
    }
  }

});

