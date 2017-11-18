var app = angular.module("myApp", ['ngRoute']);

app.controller("dataOneController", ['$http', function($http) {
    var main = this;
    this.loadAllResults = function() {
        $http({
            method: 'GET',
            url: "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
        }).then(function successCallback(response) { //debugger;
            console.log(response.data);
            main.firstData = response.data; 
            //console.log(main.blogs);

        }, function errorCallback(response) {
            alert("some error occurred. Check the console.");
            console.log(response);
        });
    }
    this.loadAllResults();
    this.matchView="firstMatch.html";
}]);

app.controller("dataTwoController", ['$http', function($http) {
    var main = this;
    this.loadAllResults = function() {
        $http({
            method: 'GET',
            url: "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
        }).then(function successCallback(response) { //debugger;
            console.log(response.data);
            main.secondData = response.data;
            //console.log(main.blogs);

        }, function errorCallback(response) {
            alert("some error occurred. Check the console.");
            console.log(response);
        });
    }
    this.loadAllResults();
}]);

app.controller("homeController", function() {
   main.message = "SOCCER";
   }
        
);