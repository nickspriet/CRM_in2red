/**
 * Created by nikes on 03/09/2015.
 */


angular.module("crmApp").factory("ActionService", function ($http) {

    return {
        //actions
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

        postAction: function (formdata) {
            return $http.post("/php/post/action", formdata).then(function (response) {
                console.log("data-actionPOST", response.data);
                return response;
            })
        },

        //subactions
        getSubactionById: function (formdata) {
          return $http.get("/php/get/actions", formdata).then(function (response){
              console.log("data-getSubactionById", response.data);
              return response;
          })
        },

        postSubaction: function (formdata) {
            return $http.post("/php/post/subaction", formdata).then(function (response) {
                console.log("data-subactionPOST", response.data);
                return response;
            })
        },

        //attachments
        getActionAttachmentsByActionsId: function (actions_id) {
            return $http.get("/php/get/attachments/?actions_id=" + actions_id).then(function (response) {
                console.log("data-getAttachmentsByActionsId", response.data);
                return response.data;
            })
        },

        postAttachment: function (formdata) {
            return $http.post("/php/post/attachment", formdata).then(function (response) {
                console.log("data-attachmentPOST", response.data);
                return response;
            })
        }
    }
});