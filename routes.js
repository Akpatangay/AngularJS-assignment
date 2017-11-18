app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            // location of the template
        	templateUrl		: 'home.html',
        	// Which controller it should use 
            controller 		: 'homeController',
            // what is the alias of that controller.
        	controllerAs 	: 'home'
        })
        .when('/match2015',{
        	templateUrl     : 'match15.html',
        	controller 		: 'dataOneController',
        	controllerAs 	: 'dataOne'
        })
        .when('/match2016',{

        	templateUrl     : 'match16.html',
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

