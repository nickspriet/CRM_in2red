/**
 * Created by nikes on 25/08/2015.
 */

angular.module("crmApp")
    .controller("OfferController", function ($scope, $routeParams, $location, OfferService) {

        //get all offers
        OfferService.getOffers().then(function (data) {
            $scope.offers = data;
            console.log("offers", $scope.offers);
        });

        //get offers by customersId
        if ($routeParams.id) {
            OfferService.getOffersByCustomersId($routeParams.id).then(function (data) {
                $scope.customerOffers = data;

                console.log("customerOffers", $scope.customerOffers);
            });
        }

    });