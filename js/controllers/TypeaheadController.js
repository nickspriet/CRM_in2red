/**
 * Created by nikes on 25/08/2015.
 */


angular.module("type", ["ui.bootstrap"])

// setup controller and pass data source
    .controller("TypeaheadController", function ($scope, CustomerService) {

        $scope.selected = undefined;
        console.log($scope.selected);
        console.log($scope.$index);

        CustomerService.getCustomers().then(function (customers) {

            // convert object to associative array
            $scope.customers =  Object.keys(customers).map(function (k) {
                return customers[k];
            });
        });
    });