/**
 * Created by nikes on 25/08/2015.
 */

angular.module("crmApp")
    .controller("OfferController", function ($scope, $location, OfferService) {

        OfferService.getOffers().then(function (offers) {
            $scope.offers = angular.fromJson(offers);

            console.log("scope", $scope.offers);
        });
    });