/**
 * Created by nikes on 24/08/2015.
 */

angular.module("crmApp")
    .controller("NewCustomerController", function ($scope, $http, $location, CustomerService) {

        $scope.billingCountry = 'België';
        $scope.selectedContacts = [];
        $scope.customertypes_name = "Klant";


        $scope.now = new Date();

        //submit newCustomerForm
        $scope.submitForm = function () {
            console.log("formdata", $scope.customerFormData.Info);

            //post customer (==> id.data contains customers_id of last inserted customer/row)
            CustomerService.postCustomer($scope.customerFormData.Info).then(function (id) {

                console.log($scope.customerFormData.Contacts);
                //post contacts for this customer
                angular.forEach($scope.customerFormData.Contacts, function (c) {
                    c.customersId = id.data;

                    console.log("a contact", c);
                    CustomerService.postContact(c).then(function (data) {
                        console.log("contactIds-after-submit", data);
                    });
                });

                //post tags for this customer
                //angular.forEach($scope.customerFormData.Tags, function (t) {
                //
                //})

                //after submit => go to details page of inserted customer
                $location.path("klanten/details/" + id.data);
            });
        }
    });
