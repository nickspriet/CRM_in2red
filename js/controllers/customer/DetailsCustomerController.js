/**
 * Created by nikes on 27/08/2015.
 */


angular.module("crmApp").
    controller("DetailsCustomerController", function ($scope, $routeParams, $location, CustomerService, $filter, ActionService) {

        var selectedCustomer;
        $scope.selectedCustomer = [];
        $scope.selectedContacts = [];
        $scope.selectedTags = [];


        $scope.deletedContacts = [];


        $scope.loadInfo = function () {
            //get customer by id
            CustomerService.getCustomerById($routeParams.id).then(function (data) {

                //convert object to associative array
                selectedCustomer = Object.keys(data).map(function (a) {
                    return data[a];
                });

                //init variables
                console.log("sc", selectedCustomer);
                $scope.selectedCustomer = selectedCustomer[0].Info;
                $scope.selectedContacts = selectedCustomer[0].Contacts;
                $scope.selectedTags = selectedCustomer[0].Tags;
            });
        };

        $scope.loadOffers = function () {
            console.log("loadoffers");
        };


        $scope.loadActions = function () {
            //get actions by customers_id
            ActionService.getActionsByCustomersId($routeParams.id).then(function (data) {
                // convert object to associative array
                $scope.actions = Object.keys(data).map(function (k) {
                    return data[k];
                });

                console.log("actions", $scope.actions);
            });
        };

        //show+hide subactions
        $scope.toggleList = function (event) {
            var target = angular.element(event.target);
            if (target.hasClass("fa-caret-right"))
            {
                target.removeClass("fa-caret-right").addClass("fa-caret-down");
                target.parent().find("ul").removeClass("hidden");
            }
            else {
                target.removeClass("fa-caret-down").addClass("fa-caret-right");
                target.parent().find("ul").addClass("hidden");
            }
        };



    });


