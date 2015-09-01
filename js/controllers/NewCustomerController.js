/**
 * Created by nikes on 24/08/2015.
 */

angular.module("crmApp")
    .controller("NewCustomerController", function ($scope) {

        $scope.billingCountry = 'Belgi�';
        $scope.selectedContacts = [];
        $scope.selectedContacts["Contacts"] = {};

        //init datepicker
        angular.element('#date-picker').daterangepicker({
            singleDatePicker: true,
            format: 'DD/MM/YYYY'
        });
    });
