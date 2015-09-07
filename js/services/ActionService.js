/**
 * Created by nikes on 03/09/2015.
 */


angular.module("crmApp").factory("ActionService", function ($http) {

    return {
        getActions: function () {
            return $http.get("/php/get/actions").then(function (response) {
                console.log("data", response.data);
                return response.data;
            });
        }
    }
});