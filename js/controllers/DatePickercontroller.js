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
    });