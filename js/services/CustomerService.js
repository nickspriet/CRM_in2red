/**
 * Created by nikes on 26/08/2015.
 */

angular.module("crmApp").factory("CustomerService", function ($http, $location) {
    var customers = [];
    var selectedCustomer = [];
    var postedCustomer = [];
    var postedContact = [];


    return {
        //get customers (+ contacts + tags)
        getCustomers: function () {
            return $http.get("/php/get/customers").then(function (response) {
                console.log("data", response.data);
                customers = response.data;
                return customers;
            })
        },

        getCustomerById: function (identity) {
            return $http.get("/php/get/customers/?id=" + identity).then(function (response) {
                console.log("data", response.data);
                selectedCustomer = response.data;
                return selectedCustomer;
            }).catch(function (response) {
                $location.path("404");
            })
        },

        postCustomer: function (formdata) {
            return $http.post("/php/post/customer", formdata).then(function (response) {
                console.log("data-customerPOST", response.data);
                postedCustomer = response;
                return postedCustomer;
            })
        },

        updateCustomer: function (formdata) {
            return $http.put("/php/update/customer", formdata).then(function (response) {
                console.log("data-customerUPDATE", response.data);
                return response;
            })
        },

        //contacts
        postContact: function (formdata) {
            return $http.post("/php/post/contact", formdata).then(function (response) {
                console.log("data-contactPOST", response.data);
                postedContact = response;
                return postedContact;
            })
        },

        //tags
        postTag: function (formdata) {
            return $http.post("/php/post/tag", formdata).then(function (response) {
                console.log("data-tagPOST", response.data);
                return response;
            })
        }
    }
});