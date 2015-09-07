/**
 * Created by nikes on 03/09/2015.
 */

angular.module("crmApp").factory("TagService", function ($http) {

    return {
        getTags: function () {
            return $http.get("/php/get/tags").then(function (response) {
                console.log("data", response.data);
                return response.data;
            });
        }
    }
});