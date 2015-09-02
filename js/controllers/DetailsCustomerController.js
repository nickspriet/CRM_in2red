/**
 * Created by nikes on 27/08/2015.
 */


angular.module("crmApp").
    controller("DetailsCustomerController", function ($scope, $http, $routeParams) {
        $scope.customerFormData = {};
        $scope.customerFormData.Info = {};

        // get customer by id
        $http.get("/php/customers/?id=" + $routeParams.id).then(function (response) {
            //convert object to associative array
            $scope.selectedCustomer = Object.keys(response.data).map(function (a) {
                return response.data[a];
            });

            $scope.billingCountry = $scope.selectedCustomer[0].Info.billing_country;
            $scope.billingCounty = $scope.selectedCustomer[0].Info.billing_county;
            $scope.officeCountry = $scope.selectedCustomer[0].Info.office_country;
            $scope.officeCounty = $scope.selectedCustomer[0].Info.office_county;
            $scope.customerFormData.Info.active = $scope.selectedCustomer[0].Info.active;

            $scope.selectedContacts = Object.keys(response.data).map(function (a) {
                return response.data[a].Contacts;
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
