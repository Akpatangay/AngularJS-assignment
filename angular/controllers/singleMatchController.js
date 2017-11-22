app.controller('singleMatchController',['$routeParams', '$http', function($routeParams, $http){
	var main = this;
	this.heading = '';
	this.name1 = '';
	this.score1 = '';
	this.name2 = '';
	this.score2 = '';
	this.code1 = $routeParams.code1;
	this.code2 = $routeParams.code2;;
	this.verdict ='';
	this.date = $routeParams.date;

	this.getSingleMatch = function() { debugger;
		function singleMatchData(response) { 
			main.data = response.rounds;

			for(var i in main.data) {
				for(var j in main.data[i].matches) {
					if(main.data[i].matches[j].team1.code == main.code1 && main.data[i].matches[j].team2.code == main.code2 && main.date == main.data[i].matches[j].date) {
						main.name1 = main.data[i].matches[j].team1.name;
						main.name2 = main.data[i].matches[j].team2.name;
						main.score1 = main.data[i].matches[j].score1;
						main.score2 = main.data[i].matches[j].score2;
						main.heading = main.name1 + 'Vs' + main.name2;
						main.date = main.data[i].matches[j].date;

						if(main.score1 > main.score2)
							main.verdict = main.name1 + 'WON';	
						else if(main.score1 < main.score2) 
							main.verdict = main.name2 + 'WON';
						else main.verdict = "IT WAS A TIE";
					}
				}
			}
		}

		main.getSingleMatchesOf2015 = function() {
			$http({
				method: 'GET',
				url: "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
			}).then(function(info1){
				singleMatchData(info1.data);
			}, function(error) {
				alert("An error has occured!\n Check the console.");
				console.log(error); 
			});
		}();
		main.getSingleMatchesOf2016 = function() {
			$http({
				method:'GET',
				url: "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
			}).then(function(info2) {
				singleMatchData(info2.data);
			}, function(error) {
				alert("An error has occured!\n Check the console.");
				console.log(error);
			});
		}();

	}();
}]);



