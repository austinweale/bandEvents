var urlBase = "http://api.bandsintown.com/artists/"
var urlEnd = "/events.json?callback=?&app_id=ramesh"


var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
    $scope.data = []
    $scope.band = "american football";
    

    $scope.getData = function(){
        $scope.data = [];

        $.getJSON(urlBase + $scope.band + urlEnd, function(result) {
            $scope.processEvents(result);
        });
        
    }

    $scope.processEvents = function(results){

        for(var i = 0; i < results.length; i++){
            var current = results[i].venue;
            var eventName = current.name;
            var latitude = current.latitude;
            var longitude = current.longitude;
            var eventObject = {
                name: eventName,
                lat: latitude,
                lon: longitude
            }
            $scope.data.push(eventObject);
            $scope.$apply();
            console.log()
            console.log(eventObject);
        }

    }

});