/**
 * Created by nikes on 11/09/2015.
 */


angular.module("crmApp").controller("DetailsSubactionController", function ($scope, $routeParams, $filter, $location, ActionService) {

    $scope.subactionFormData = {};

    //get subaction by id
    ActionService.getSubactionById($routeParams.subid).then(function (data) {
        $scope.selectedSubAction = data[$routeParams.subid];
        console.log("selectedSubaction", $scope.selectedSubaction);

        ////get attachments by subactions_id
        //ActionService.getActionAttachmentsByActionsId($routeParams.id).then(function (actionAttachments) {
        //    $scope.selectedActionAttachments = actionAttachments;
        //
        //    console.log("selectedActionAttachments", $scope.selectedActionAttachments);
        //});

        initFields();
    });

    //init ng-model (because value doesn't work)
    function initFields() {
        $scope.subactionFormData.name = $scope.selectedSubaction.Info.name;
        $scope.subactionFormData.customersId = $scope.selectedSubaction.Info.customers_id;
        $scope.subactionFormData.type = $scope.selectedSubaction.Info.type;
        $scope.subactionFormData.dateCreate = $scope.selectedSubaction.Info.date_create;
        $scope.subactionFormData.reminder = $scope.selectedSubaction.Info.reminder;
        $scope.subactionFormData.dateReminder = $filter("DateFilter")($scope.selectedSubaction.Info.date_reminder);
    }
})