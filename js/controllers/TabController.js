/**
 * Created by nikes on 11/09/2015.
 */


angular.module("crmApp").controller("TabController", function ($scope) {

    //change tabs
    $scope.tab = 1;

    $scope.checkTab = function (checkTab) {
        return this.tab === checkTab;
    };

    $scope.setTab = function (setTab) {
        this.tab = setTab;
    };
})