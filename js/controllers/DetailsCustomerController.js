/**
 * Created by nikes on 27/08/2015.
 */


angular.module("crmApp").
    controller("DetailsCustomerController", function ($scope, $http, $routeParams, CustomerService) {
        $scope.customerFormData = {};
        $scope.customerFormData.Info = {};
        $scope.customerFormData.Contacts = {};
        $scope.customerFormData.Tags = {};

        var selectedCustomer;
        $scope.selectedCustomer = [];
        $scope.selectedContacts = [];


        //get customer by id
        CustomerService.getCustomerById($routeParams.id).then(function(data){

            //convert object to associative array
            selectedCustomer = Object.keys(data).map(function (a) {
                return data[a];
            });

            console.log("sc", selectedCustomer);
            $scope.selectedCustomer = selectedCustomer[0].Info;
            $scope.selectedContacts = selectedCustomer[0].Contacts;
            $scope.selectedTags = selectedCustomer[0].Tags;


            //init ng-model (because value doesn't work)
            $scope.customerFormData.Info.customertypesId = $scope.selectedCustomer.customertypes_name;
            $scope.customerFormData.Info.billingCountry = $scope.selectedCustomer.billing_country;
            $scope.customerFormData.Info.billingCounty = $scope.selectedCustomer.billing_county;
            $scope.customerFormData.Info.officeStreet = $scope.selectedCustomer.office_street;
            $scope.customerFormData.Info.officeZipcode = $scope.selectedCustomer.office_zipcode;
            $scope.customerFormData.Info.officeCity = $scope.selectedCustomer.office_city;
            $scope.customerFormData.Info.officeCountry = $scope.selectedCustomer.office_country;
            $scope.customerFormData.Info.officeCounty = $scope.selectedCustomer.office_county;

            $scope.customerFormData.Info.active = $scope.selectedCustomer.active;


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
