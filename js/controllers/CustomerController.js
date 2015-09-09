/**
 * Created by nikes on 21/08/2015.
 */

angular.module("crmApp").controller("CustomerController", function ($scope, $filter, $location, CustomerService) {

        $scope.csvHeader = ["id", "customertypes_id", "bedrijfsnaam", "telefoon", "e-mail", "facturatie-adres", "facturatie-postcode", "facturatie-gemeente", "facturatie-provincie", "facturatie-land", "kantoor-adres", "kantoor-postcode", "kantoor-gemeente", "kantoor-provincie", "kantoor-land", "BTW-nummer", "datum-actief", "datum-aangemaakt", "datum-bewerkt", "actief", "gearchiveerd", "customertypes_name"];
        $scope.sortElement = "Info.name";
        $scope.customerFormData = {};

        //get all customers
        CustomerService.getCustomers().then(function (data) {

            // convert object to associative array
            $scope.customers = Object.keys(data).map(function (k) {
                return data[k];
            });

            console.log("CUSTOMERS", $scope.customers);
        });

        //go to details page when click on customer-row in table
        $scope.goToDetails = function (index) {
            $location.path("klanten/details/" + index);
        };

        //get a list of  the filtered customers (for CSV export) 2
        $scope.exportCustomers = function () {
            var filteredCustomers = $filter('filter')($scope.customers, $scope.searchCustomer);
            var output = filteredCustomers.map(function (cust) {
                return cust.Info;
            });

            return output;
        }


    }
)

