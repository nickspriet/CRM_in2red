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
                //set removing to true to show warning
                $scope.removeContact = function (contact) {
                    //check if contact exists
                    var id = $scope.$parent.selectedContacts.indexOf(contact);
                    if (id > -1) $scope.removing = true;
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

                //remove contact from array
                $scope.proceedRemove = function (contact) {
                    //check if contact exists
                    var id = $scope.$parent.selectedContacts.indexOf(contact);
                    if (id > -1) {
                        //delete the contact
                        $scope.$parent.selectedContacts.splice(id, 1);
                        $scope.removing = false;

                        //collect an array of deleted contacts
                        $scope.$parent.deletedContacts.push(contact);
                    }
                };

                //do nothing
                $scope.cancelRemove = function () {
                    $scope.removing = false;
                };
            }
        }
    })

    .directive("addContact", function () {
        return {
            restrict: "A",
            scope: true,
            controller: function ($scope) {
                $scope.addNewContact = function (array) {

                    //add empty contact object (id is just for Name Attribute of each input field)
                    if (!array) array = $scope.$parent.selectedContacts = [];
                    var newContact = {id: counter++};

                    array.push(newContact);
                };
            }
        }
    });

//declare counter for Name Attribute of each input field
var counter = 0;