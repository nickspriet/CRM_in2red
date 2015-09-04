/**
 * Created by nikes on 26/08/2015.
 */

angular.module("crmApp").factory("CustomerService", function ($http) {
    var customers = [];
    var selectedCustomer = [];
    var postedCustomer = [];
    var postedContact = [];


    return {
        getCustomers: function () {
            return $http.get("/php/customersGET").then(function (response) {
                console.log("data", response.data);
                customers = response.data;
                return customers;
            })
        },

        getCustomerById: function (identity) {
            return $http.get("/php/customersGET/?id=" + identity).then(function (response) {
                console.log("data", response.data);
                selectedCustomer = response.data;
                return selectedCustomer;
            })
        },

        postCustomer: function (formdata) {
            return $http.post("/php/customerPOST", formdata).then(function (response) {
                console.log("data-customerPOST", response.data);
                postedCustomer = response;
                return postedCustomer;
            })
        },

        postContact: function (formdata) {
            return $http.post("/php/contactPOST", formdata).then(function(response){
                console.log("data-contactPOST", response.data);
                postedContact = response;
                return postedContact;
            })
        },

        postTag: function (formdata)
        {
            return $http.post("/php/tagPOST", formdata).then(function(response){
                console.log("data-tagPOST", response.data);
                return response;
            })
        }
    }
});