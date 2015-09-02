/**
 * Created by nikes on 25/08/2015.
 */

angular.module("crmApp")

    .directive("newContact", function ($compile) {
        return {
            restrict: "E",
            scope: {
                contact: "=contactperson"
            },
            templateUrl: "templates/pages/klanten/newContact.html",
            controller: function ($scope) {
                $scope.removeContact = function (contact) {
                    var id = $scope.$parent.selectedContacts[0].indexOf(contact);
                    if (id > -1) {
                        $scope.removing = true;
                    }
                }
            }
        }
    })

    .directive("removeContact", function () {
        return {
            restrict: "E",
            templateUrl: "templates/pages/klanten/removeContact.html",
            controller: function ($scope) {
                $scope.removing = false;

                $scope.proceedRemove = function (contact) {
                    var id = $scope.$parent.selectedContacts[0].indexOf(contact);
                    if (id > -1) {
                        $scope.$parent.selectedContacts[0].splice(id, 1);
                        $scope.removing = false;
                    }
                }

                $scope.cancelRemove = function () {
                    $scope.removing = false;
                }
            }
        }
    })

    .directive("addContact", function () {
        return {
            restrict: "A",
            scope: true,
            controller: function ($scope) {
                $scope.addNewContact = function (array) {

                    if (array == $scope.selectedContacts[0]) var newContact = {};
                    else {
                        var newContact = {
                            id: counter++
                        };
                    }
                    array.push(newContact);
                };
            }
        }
    })
var counter = 0;