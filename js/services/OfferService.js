/**
 * Created by nikes on 26/08/2015.
 */

angular.module("crmApp").factory("OfferService", function ($http) {
    var offers = [];

    return {
        getOffers: function () {
            return $http.get("/php/offersGET").then(function(response){
                offers = response.data;
                console.log("data", response.data);
                return offers;
            })
        }
    }
});