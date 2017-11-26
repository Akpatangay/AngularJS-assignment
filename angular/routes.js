app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/home.html',
        	// Which controller it should use 
            controller 		: 'homeController',
            // what is the alias of that controller.
        	controllerAs 	: 'home'
        })
        .when('/match15',{
        	templateUrl     : 'views/match15.html',
        	controller 		: 'dataOneController',
        	controllerAs 	: 'dataOne'
        })
        .when('/match16',{

        	templateUrl     : 'views/match16.html',
        	controller 		: 'dataTwoController',
        	controllerAs 	: 'dataTwo'
        })
         .when('/match/:code1/:code2/:date',{
            templateUrl     : 'views/singleMatch.html',
            controller      : 'singleMatchController',
            controllerAs    : 'match'
        })
         .when('/teamStats',{
            templateUrl     : 'views/teamStats.html',
            controller      : 'teamStatsController',
            controllerAs    : 'statsCtrl'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
    }
]);

