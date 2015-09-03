/**
 * Created by nikes on 24/08/2015.
 */

angular.module("crmApp")
    .controller("NewCustomerController", function ($scope, $http, CustomerService) {

        $scope.billingCountry = 'België';
        $scope.selectedContacts = [];


        //init datepicker
        angular.element('#date-picker').daterangepicker({
            singleDatePicker: true,
            format: 'DD/MM/YYYY'
        });


        //submit newCustomerForm
        $scope.submitForm = function () {

            console.log("formdata", $scope.customerFormData.Info);

            //post customer + contacts + tags
            CustomerService.postCustomer($scope.customerFormData.Info).then(function (id) {
                console.log("data-after-submit", id);

                //forEach()
                //contacts

            });


            //after submit => go to details page of inserted customer
            $scope.goToDetails = function (index) {
                $location.path("klanten/details/" + index);
            };

        }
    });
