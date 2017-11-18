app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            // location of the template
        	templateUrl		: 'routes/home.html',
        	// Which controller it should use 
            controller 		: 'homeController',
            // what is the alias of that controller.
        	controllerAs 	: 'home'
        })
        .when('/match2015',{
        	templateUrl     : 'routes/match15.html',
        	controller 		: 'dataOneController',
        	controllerAs 	: 'dataOne'
        })
        .when('/match2016',{

        	templateUrl     : 'routes/match16.html',
        	controller 		: 'dataTwoController',
        	controllerAs 	: 'dataTwo'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);

