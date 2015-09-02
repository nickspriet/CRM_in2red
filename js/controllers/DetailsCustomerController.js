/**
 * Created by nikes on 27/08/2015.
 */


angular.module("crmApp").
    controller("DetailsCustomerController", function ($scope, $http, $routeParams, CustomerService) {
        $scope.customerFormData = {};
        $scope.customerFormData.Info = {};

        // get customer by id
        CustomerService.getCustomerById($routeParams.id).then(function(data){

            //convert object to associative array
            $scope.selectedCustomer = Object.keys(data).map(function (a) {
                return data[a];
            });

            $scope.customerFormData.Info.billingCountry = $scope.selectedCustomer[0].Info.billing_country;
            $scope.customerFormData.Info.billingCounty = $scope.selectedCustomer[0].Info.billing_county;
            $scope.customerFormData.Info.officeCountry = $scope.selectedCustomer[0].Info.office_country;
            $scope.customerFormData.Info.officeCounty = $scope.selectedCustomer[0].Info.office_county;
            $scope.customerFormData.Info.active = $scope.selectedCustomer[0].Info.active;

            $scope.selectedContacts = Object.keys(data).map(function (a) {
                return data[a].Contacts;
            });
        });


        //change tabs
        this.tab = 1;
        this.checkTab = function (checkTab) { return this.tab === checkTab; };
        this.setTab = function (setTab) { this.tab = setTab; };


        $scope.submit = function()
        {
            $scope.submitted = true;
        }
    });
