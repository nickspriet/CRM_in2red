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
        },

        getActionById: function (id) {
            return $http.get("/php/get/actions/?id=" + id).then(function (response) {
                console.log("data", response.data);
                return response.data;
            })
        },

        getActionsByCustomersId: function (customers_id) {
            return $http.get("/php/get/actions/?customers_id=" + customers_id).then(function (response) {
                console.log("data-getActionsbyCustomersId", response.data);
                return response.data;
            })
        },

        getAttachmentsByActionsId: function(actions_id){
            return $http.get("/php/get/attachments/?actions_id=" + actions_id).then(function (response) {
                console.log("data-getAttachmentsByActionsId", response.data);
                return response.data;
            })
        },


        getAttachmentsBySubactionsId: function(subactions_id){
            return $http.get("/php/get/attachments/?subactions_id=" + subactions_id).then(function (response) {
                console.log("data-getAttachmentsBySubactionsId", response.data);
                return response.data;
            })
        }
    }
});