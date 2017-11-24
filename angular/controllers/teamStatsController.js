 app.controller('teamStatsController', ['$http', function($http) {
     var main = this;
     this.obj1={};
     this.obj2={};

     this.getStats = function() { debugger;
         main.stats = {};
         function getTeamStats(response, year) {
             main.data = response.rounds;
             var stats = main.stats;

             for (var i in main.data) {
                 for (var j in main.data[i].matches) {
                     var match = main.data[i].matches[j];
                     var team1 = match.team1.name;
                     var team2 = match.team2.name;

                     if (stats[team1] == null) {
                         stats[team1] = {};
                     }
                     if (stats[team1][year] == null) {
                         stats[team1][year] = {};
                     }
                     if (stats[team2] == null) {
                         stats[team2] = {};
                     }
                     if (stats[team2][year] == null) {
                         stats[team2][year] = {};
                     }

                     main.obj1 = stats[team1][year];
                     if (main.obj1.matches) {
                         main.obj1.matches++;
                     } else {
                         main.obj1.matches = 1;
                     }

                     if (main.obj1.goals) {
                         main.obj1.goals += match.score1;
                     } else {
                         main.obj1.goals = match.score1;
                     }

                     main.obj2 = stats[team2][year];
                     if (main.obj2.matches) {
                         main.obj2.matches++;
                     } else {
                         main.obj2.matches = 1;
                     }

                     if (main.obj2.goals) {
                         main.obj2.goals += match.score1;
                     } else {
                         main.obj2.goals = match.score2;
                     }

                     if (match.score1 > match.score2) {
                         if (stats[team1][year].wins) {
                             stats[team1][year].wins++;
                             stats[team2][year].losses++;

                         } else {
                             stats[team1][year].wins = 1;
                             stats[team2][year].losses = 1;
                         }
                     } else if (match.score2 > match.score1) {
                         if (stats[team2][year].wins) {
                             stats[team2][year].wins++;
                             stats[team1][year].losses++;

                         } else {
                             stats[team2][year].wins = 1;
                             stats[team1][year].losses = 1;
                         }
                     } else {
                         if (stats[team1][year].ties) {
                             stats[team1][year].ties++;
                             stats[team2][year].ties++;
                         } else {
                             stats[team1][year].ties = 1;
                             stats[team2][year].ties = 1;
                         }
                         main.obj1.winPercent = ((stats[team1][year].wins * 100) / (obj1.matches)).toFixed(2);
                         main.obj2.lossPercent = ((stats[team2][year].losses * 100) / (obj2.matches)).toFixed(2);
                         main.obj2.winPercent = ((stats[team2][year].wins * 100) / (obj2.matches)).toFixed(2);
                         main.obj1.lossPercent = ((stats[team1][year].losses * 100) / (obj1.matches)).toFixed(2);

                     }

                 }
             }

         }
         main.getStats2015 = function() {
             $http({
                 method: 'GET',
                 url: "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
             }).then(function(response) {
                     console.log(response);
                     var year = '2015';
                     getTeamStats(response, year);
                 },
                 function(error) {
                     alert("An error has occured!\n Check the console.");
                     console.log(error);
                 });
         }();

         main.getStats2016 = function() {
             $http({
                 method: 'GET',
                 url: "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
             }).then(function(response) {
                     console.log(response);
                     var year = '2016';
                     getTeamStats(response, year);
                 },
                 function(error) {
                     alert("An error has occured!\n Check the console.");
                     console.log(error);
                 });
         }();
     }

 }]);