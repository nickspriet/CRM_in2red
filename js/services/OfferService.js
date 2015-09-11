/**
 * Created by nikes on 26/08/2015.
 */

angular.module("crmApp").factory("OfferService", function ($http, $location) {
    var offers = [];

    return {
        getOffers: function () {
            return $http.get("/php/get/offers").then(function(response){
                console.log("getOffersData", response.data);
                return response.data;
            })
        },

        getOffersByCustomersId: function (customers_id) {
            return $http.get("/php/get/offers/?customers_id=" + customers_id).then(function(response){
                console.log("getOffersByCustomersIdData", response.data);
                return response.data;
            })
        }
    }
});