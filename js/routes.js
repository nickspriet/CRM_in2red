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
            .when("/instellingen", {
                templateUrl: "templates/pages/instellingen/index.html"
            })

            // klanten
            .when("/klanten", {
                templateUrl: "templates/pages/klanten/index.html",
                controller: "CustomerController"
            })
            .when("/klanten/nieuw", {
                templateUrl: "templates/pages/klanten/nieuw.html",
                controller: "NewCustomerController"
            })
            .when("/klanten/details/:id", {
                templateUrl: "templates/pages/klanten/details.html",
                controller: "DetailsCustomerController"
            })
            .when("/klanten/bewerken/:id", {
                templateUrl: "templates/pages/klanten/bewerken.html",
                controller: "DetailsCustomerController"
            })

            // offertes
            .when("/offertes", {
                templateUrl: "templates/pages/offertes/index.html",
                controller: "OfferController"
            })
            .when("/offertes/nieuw", {
                templateUrl: "templates/pages/offertes/nieuw.html",
                controller: "NewOfferController"
            })
            .when("/offertes/details/:id", {
                templateUrl: "templates/pages/offertes/details.html"
            })
            .when("/offertes/bewerken", {
                templateUrl: "templates/pages/offertes/bewerken.html"
            })

            // acties
            .when("/acties", {
                templateUrl: "templates/pages/acties/index.html",
                controller: "ActionController"
            })
            .when("/acties/nieuw", {
                templateUrl: "templates/pages/acties/nieuw.html",
                controller: "NewActionController"
            })
            .when("/acties/details/:id", {
                templateUrl: "templates/pages/acties/details.html",
                controller: "DetailsActionController"
            })
            .when("/acties/bewerken/:id", {
                templateUrl: "templates/pages/acties/bewerken.html",
                controller: "DetailsActionController"
            })
            .when("/acties/:id/subacties/nieuw", {
                templateUrl: "templates/pages/acties/subacties/nieuw.html",
                controller: "NewActionController"
            })
            .when("/acties/:id/subacties/bewerken/:subid", {
                templateUrl: "templates/pages/acties/subacties/bewerken.html",
                controller: "DetailsActionController"
            })

            .otherwise("/");
    });
