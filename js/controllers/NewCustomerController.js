/**
 * Created by nikes on 24/08/2015.
 */

angular.module("crmApp")
    .controller("NewCustomerController", function ($scope, $http) {

        $scope.billingCountry = 'België';
        $scope.selectedContacts = [];
        $scope.selectedContacts["Contacts"] = {};

        //init datepicker
        angular.element('#date-picker').daterangepicker({
            singleDatePicker: true,
            format: 'DD/MM/YYYY'
        });

        $scope.submitForm = function () {

            console.log("formdata", $scope.customerFormData.Info);

            $http.post('/php/customersPOST', $scope.customerFormData.Info).success(function (data, status, header, config) {
                console.log("data-after-submit", data, status, header, config);
            }).error(function (data) {
                console.log("error-after-submit", data);
            })
        }
    });
