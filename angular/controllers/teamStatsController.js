//controller for teamStats view
app.controller('teamStatsController', ['$http', function($http) {
    var main = this;
    this.stats = {};

    this.getStats = function() {

        function getTeamStats(response, year) {
            var data = response.data.rounds;
            var stats = main.stats;

            for (var i in data) {
                for (var j in data[i].matches) {
                    var match = data[i].matches[j];
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

                    if (stats[team1][year].matches) {
                        stats[team1][year].matches++;
                    } else {
                        stats[team1][year].matches = 1;
                    }

                    if (stats[team1][year].goals) {
                        stats[team1][year].goals += match.score1;
                    } else {
                        stats[team1][year].goals = match.score1;
                    }

                    if (stats[team2][year].matches) {
                        stats[team2][year].matches++;
                    } else {
                        stats[team2][year].matches = 1;
                    }

                    if (stats[team2][year].goals) {
                        stats[team2][year].goals += match.score1;
                    } else {
                        stats[team2][year].goals = match.score2;
                    }
                    if (stats[team1][year].wins == null) {
                        stats[team1][year].wins = 0;
                    } 
                    if (stats[team2][year].losses == null) {
                        stats[team2][year].losses = 0;
                    } 
                    if (stats[team2][year].wins == null) {
                        stats[team2][year].wins = 0;
                    } 
                    if (stats[team1][year].losses == null) {
                        stats[team1][year].losses = 0;
                    } 
                    if (stats[team1][year].ties == null) {
                        stats[team1][year].ties = 0;
                    } 
                    if (stats[team2][year].ties == null) {
                        stats[team2][year].ties = 0;
                    } 

                    if (match.score1 > match.score2) {
                        stats[team1][year].wins++;
                        stats[team2][year].losses++;

                    } else if (match.score2 > match.score1) {

                        stats[team2][year].wins++;
                        stats[team1][year].losses++;
                    } else {
                        stats[team1][year].ties++;
                        stats[team2][year].ties++;
                    }
                    stats[team1][year].winPercent = ((stats[team1][year].wins * 100) / (stats[team1][year].matches)).toFixed(2);
                    stats[team2][year].lossPercent = ((stats[team2][year].losses * 100) / (stats[team2][year].matches)).toFixed(2);
                    stats[team2][year].winPercent = ((stats[team2][year].wins * 100) / (stats[team2][year].matches)).toFixed(2);
                    stats[team1][year].lossPercent = ((stats[team1][year].losses * 100) / (stats[team1][year].matches)).toFixed(2);

                }

            }

            console.log(year, stats);
        }// end of getTeamStats function

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
        }();// end of getStats2015 function

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
        }();// end of getStats2016 function


    }();// end of getStats function

}]);// end of teamStatsController function