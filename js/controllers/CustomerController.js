/**
 * Created by nikes on 21/08/2015.
 */

angular.module("crmApp")
    .controller("CustomerController", function ($scope, $http, $location, CustomerService) {

        $scope.csvHeader = ["id", "Bedrijfsnaam", "telefoon", "e-mail", "facturatie-adres", "facturatie-postcode", "facturatie-gemeente", "facturatie-provincie", "facturatie-land", "kantoor-adres", "kantoor-postcode", "kantoor-gemeente", "kantoor-provincie", "kantoor-land", "BTW-nummer", "datum-actief", "datum-aangemaakt", "datum-bewerkt", "actief", "gearchiveerd"];
        $scope.sortElement = "Info.name";
        $scope.customerFormData = {};


        //get all customers
        CustomerService.getCustomers().then(function (data) {

            // convert object to associative array
            $scope.customers =  Object.keys(data).map(function (k) {
                return data[k];
            });
        });

        //go to details page when click on customer-row in table
        $scope.goToDetails = function (index) {
            console.log("index", index);

            $location.path("klanten/details/" + index);
        };


        //get a list of  the filtered customers (for CSV export)
        $scope.filterCustomers = function (customers, searchCustomer) {
            var filtered = {};

            angular.forEach(customers, function (value, key) {
                if (!value.hasOwnProperty(searchCustomer)) filtered[key] = value;
            });


            console.log("custs", customers);
            console.log("search", searchCustomer);

            return filtered;
        };

        //get a list of  the filtered customers (for CSV export) 2
        $scope.exportCustomers = function () {
            var newArray = [];

            for (var i = 0; i < $scope.filteredCustomers.length; i++) {
                console.log("na", $scope.filteredCustomers[i]);

                if ($scope.filteredCustomers[i].Contacts) {
                    for (var j = 0; j < $scope.filteredCustomers[i].Contacts.length; j++) {
                        console.log("testje", $scope.filteredCustomers[i].Contacts[j]);
                    }
                }

                newArray.push($scope.filteredCustomers[i]["Info"]);
            }


            console.log("exportCustomers", $scope.filteredCustomers);
            console.log("newArray", newArray);


            return newArray;
        }



    }
)

