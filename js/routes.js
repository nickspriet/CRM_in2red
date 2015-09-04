/**
 * Created by nikes on 21/08/2015.
 */

angular.module("routes", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider

            // dashboard
            .when("/", {
                templateUrl: "templates/pages/dashboard/index.html"
            })
            .when("/dashboard", {
                templateUrl: "templates/pages/dashboard/index.html"
            })

            //instellingen
            .when("/instellingen",{
                templateUrl: "templates/pages/instellingen/index.html"
            })

            // klanten
            .when("/klanten", {
                templateUrl: "templates/pages/klanten/index.html"
            })
            .when("/klanten/nieuw", {
                templateUrl: "templates/pages/klanten/nieuw.html"
            })
            .when("/klanten/details/:id", {
                templateUrl: "templates/pages/klanten/details.html"
            })
            .when("/klanten/bewerken/:id", {
                templateUrl: "templates/pages/klanten/bewerken.html"
            })

            // offertes
            .when("/offertes", {
                templateUrl: "templates/pages/offertes/index.html"
            })
            .when("/offertes/nieuw", {
                templateUrl: "templates/pages/offertes/nieuw.html"
            })
            .when("/offertes/details/:id", {
                templateUrl: "templates/pages/offertes/details.html"
            })
            .when("/offertes/bewerken", {
                templateUrl: "templates/pages/offertes/bewerken.html"
            })

            // acties
            .when("/acties", {
                templateUrl: "templates/pages/acties/index.html"
            })

            .otherwise("/");
    });
