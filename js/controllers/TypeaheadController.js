/**
 * Created by nikes on 25/08/2015.
 */


angular.module("type", ["ui.bootstrap"])

// setup controller and pass data source
    .controller("TypeaheadController", function ($scope, CustomerService) {

        $scope.selected = undefined;
        console.log($scope.selected);

        //get all customers
        CustomerService.getCustomers().then(function (data) {

            // convert object to associative array
            $scope.customers =  Object.keys(data).map(function (k) {
                return data[k];
            });
        });

    });