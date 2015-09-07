/**
 * Created by nikes on 28/08/2015.
 */

angular.module("crmApp")
    .controller("DatePickerController", function ($scope) {

        //init datepicker
        angular.element('#date-picker').daterangepicker({
            singleDatePicker: true,
            format: 'DD/MM/YYYY'
        });


        $scope.jumpToDate = function () {
            angular.element("#calendar").fullCalendar('gotoDate', moment($scope.jumpdate, "DD/MM/YYYY").format("YYYY-MM-DD"));
        }
    });