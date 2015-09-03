/**
 * Created by nikes on 26/08/2015.
 */

angular.module("crmApp").factory("CustomerService", function ($http) {
    var customers = [];
    var selectedCustomer = [];
    var postedCustomer = [];
    var postedContacts = [];
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
                console.log("data", response.data);
                postedCustomer = response;
                return postedCustomer;
            })
        },

        postContacts: function (formdata) {
            return $http.post("/php/contactsPOST", formdata).then(function(response){
                console.log("data-contactsPOST", response.data);
                postedContacts = response;
                return postedContacts;
            })
        }
    }
});