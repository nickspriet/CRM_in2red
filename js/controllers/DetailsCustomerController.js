/**
 * Created by nikes on 27/08/2015.
 */


angular.module("crmApp").
    controller("DetailsCustomerController", function ($scope, $http, $routeParams, $location, CustomerService) {
        $scope.customerFormData = {};
        $scope.customerFormData.Info = {};
        $scope.customerFormData.Contacts = {};
        $scope.customerFormData.Tags = {};

        var selectedCustomer;
        $scope.selectedCustomer = [];
        $scope.selectedContacts = [];
        $scope.selectedTags = [];


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
            initFields($scope);
        });


        //change tabs
        this.tab = 1;
        this.checkTab = function (checkTab) { return this.tab === checkTab; };
        this.setTab = function (setTab) { this.tab = setTab; };



        //submit detailCustomerForm
        $scope.submitForm = function () {
            $scope.customerFormData.Info.id = $routeParams.id;
            console.log("formdata", $scope.customerFormData.Info);

            //update customer
            CustomerService.updateCustomer($scope.customerFormData.Info).then(function () {

                console.log($scope.customerFormData.Contacts);

                //post contacts for this customer
                //angular.forEach($scope.customerFormData.Contacts, function (c) {
                //    c.customersId = id.data;
                //
                //    console.log("a contact", c);
                //    CustomerService.postContact(c).then(function (data) {
                //        console.log("contactIds-after-submit", data);
                //    });
                //});

                //post tags for this customer
                //angular.forEach($scope.customerFormData.Tags, function (t) {
                //
                //})

                //after submit => go to details page of inserted customer
                $location.path("klanten/details/" + $routeParams.id);
            });
        }
    });


function initFields($scope)
{
    $scope.customerFormData.Info.name = $scope.selectedCustomer.name;
    $scope.customerFormData.Info.customertypesId = $scope.selectedCustomer.customertypes_id;
    $scope.customerFormData.Info.vat = $scope.selectedCustomer.vat;
    $scope.customerFormData.Info.phone = $scope.selectedCustomer.phone;
    $scope.customerFormData.Info.email = $scope.selectedCustomer.email;
    $scope.customerFormData.Info.billingStreet= $scope.selectedCustomer.billing_street;
    $scope.customerFormData.Info.billingZipcode= $scope.selectedCustomer.billing_zipcode;
    $scope.customerFormData.Info.billingCity= $scope.selectedCustomer.billing_city;
    $scope.customerFormData.Info.billingCountry = $scope.selectedCustomer.billing_country;
    $scope.customerFormData.Info.billingCounty = $scope.selectedCustomer.billing_county;
    $scope.customerFormData.Info.officeStreet = $scope.selectedCustomer.office_street;
    $scope.customerFormData.Info.officeZipcode = $scope.selectedCustomer.office_zipcode;
    $scope.customerFormData.Info.officeCity = $scope.selectedCustomer.office_city;
    $scope.customerFormData.Info.officeCountry = $scope.selectedCustomer.office_country;
    $scope.customerFormData.Info.officeCounty = $scope.selectedCustomer.office_county;
    $scope.customerFormData.Info.dateCreate  = $scope.selectedCustomer.date_create;
    $scope.customerFormData.Info.active = $scope.selectedCustomer.active;
}
