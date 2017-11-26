var app = angular.module("myApp", ['ngRoute']);

//controller for the match15 view
app.controller("dataOneController", ['$http', function($http) {
    var main = this;
    this.loadAllResults = function() {
        $http({
            method: 'GET',
            url: "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
        }).then(function successCallback(response) { //debugger;
            console.log(response.data);
            main.firstData = response.data; 

        }, function errorCallback(response) {
            alert("some error occurred. Check the console.");
            console.log(response);
        });
    }
    this.loadAllResults();
    this.matchView="firstMatch.html";
}]);

//controller for the match16 view
app.controller("dataTwoController", ['$http', function($http) {
    var main = this;
    this.loadAllResults = function() {
        $http({
            method: 'GET',
            url: "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
        }).then(function successCallback(response) { //debugger;
            console.log(response.data);
            main.secondData = response.data;

        }, function errorCallback(response) {
            alert("some error occurred. Check the console.");
            console.log(response);
        });
    }
    this.loadAllResults();
}]);

//controller for the home view
app.controller("homeController", function() { 
    console.log(this);
  
   }
        
);

