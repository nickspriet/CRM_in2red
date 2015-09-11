/**
 * Created by nikes on 28/08/2015.
 */

angular.module("crmApp").filter("DateFilter", function () {
    return function (dateString) {
        //convert date format from "yyyy-mm-dd h:m:s" to "DD/MM/YYYY"
        var date = new Date(dateString);

        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        var output = dd + '/' + mm + '/' + yyyy;

        ////TODO: move this to another place, it doesn't belong here !!
        //if (angular.element("#date-picker")[0]) {
        //    angular.element("#date-picker").daterangepicker(
        //        {
        //            singleDatePicker: true,
        //            startDate: output,
        //            format: "DD/MM/YYYY"
        //        });
        //}

        return output;
    }
});