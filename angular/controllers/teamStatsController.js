app.controller("teamStatsController", ['$http', function($http) {  debugger;
    var main = this;
    this.stats = {};
    this.getStats = function() {
        function getTeamStats(response) {
            data = response.data.rounds;
            var stats = main.stats;
            for (var i in data) {
                for (var j in data[i].matches) {
                    var match = data[i].matches[j];
                    var team1 = match.team1.code;
                    var team2 = match.team2.code;

                    if (stats[team1]) {
                        stats[team1].goals += match.score1;
                        stats[team1].matchesPlayed++;
                    } else {
                        stats[team1] = {};
                        stats[team1].goals = match.score1;
                        stats[team1].matchesPlayed = 1;
                        stats[team1].wins = 0
                        stats[team1].losses = 0;
                    }
                    if (stats[team2]) {
                        stats[team2].goals += match.score2;
                        stats[team2].matchesPlayed++;
                        stats[team2].wins = 0
                        stats[team2].losses = 0;
                    } else {
                        stats[team2] = {};
                        stats[team2].goals = match.score2;
                        stats[team2].matchesPlayed = 1;
                    }
                    if (match.score1 > match.score2) {
                        stats[team1].wins++;
                        stats[team2].losses++;
                    } else {
                        stats[team2].wins++;
                        stats[team1].losses++;
                    }
                }
            }
            return stats;
        }
        main.getStats2015 = function() {
            $http({
                    method: 'GET',
                    url: "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
                }).then(function(response) {
                    main.results15 = getTeamStats(response);
                },
                function (error) {
                    alert("An error has occured!\n Check the console.");
                    console.log(error);
                });
        }();
        main.getStats2016 = function() {
            $http({
                    method: 'GET',
                    url: "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
                }).then(function(response) {
                    main.results16 = getTeamStats(response);
                },
                function (error) {
                    alert("An error has occured!\n Check the console.");
                    console.log(error);
                });
        }();
    }();
}])