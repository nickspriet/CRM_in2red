/**
 * Created by nikes on 26/08/2015.
 */

angular.module("crmApp").factory("CustomerService", function ($http) {
    var customers = [];
    var selectedCustomer = [];
    return {
        getCustomers: function () {
            return $http.get("/php/customers").then(function(response){
                customers = response.data;
                console.log("data", response.data);
                return customers;
            })
        }/*,

        getCustomerById: function (identity) {
            return $http.get("/php/customers?id=" + identity).then(function(response){
                selectedCustomer = response.data;
                console.log("data", response.data);
                return selectedCustomer;
            })
        }*/
    }
});