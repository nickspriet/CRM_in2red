/**
 * Created by nikes on 07/09/2015.
 */


angular.module("crmApp").controller("DetailsActionController", function ($scope, $routeParams, $filter, FileUploader, ActionService) {

    $scope.actionFormData = {};

    //get action by id
    ActionService.getActionById($routeParams.id).then(function (data) {
        $scope.selectedAction = data[$routeParams.id];
        console.log("selectedAction", $scope.selectedAction);

        //get attachments by actions_id
        ActionService.getActionAttachmentsByActionsId($routeParams.id).then(function (actionAttachments) {
            $scope.selectedActionAttachments = actionAttachments;

            console.log("selectedActionAttachments", $scope.selectedActionAttachments);
        });

        initActionFields();
    });


    //get subaction by id
    ActionService.getSubactionById($routeParams.subid).then(function (data) {
        $scope.selectedSubAction = data[$routeParams.subid];
        console.log("selectedSubactino", $scope.selectedSubaction);

        ////get attachments by subactions_id
        //ActionService.getActionAttachmentsByActionsId($routeParams.id).then(function (actionAttachments) {
        //    $scope.selectedActionAttachments = actionAttachments;
        //
        //    console.log("selectedActionAttachments", $scope.selectedActionAttachments);
        //});

        initSubactionFields();
    });



    var uploader = $scope.uploader = new FileUploader({
        url: '/php/post/upload_files.php',
        formData: [{
            // customersId: $scope.selectedAction.customers_id
        }]
    });


    //init ng-model (because value doesn't work)
    function initActionFields() {
        $scope.actionFormData.name = $scope.selectedAction.Info.name;
        $scope.actionFormData.customersId = $scope.selectedAction.Info.customers_id;
        $scope.actionFormData.type = $scope.selectedAction.Info.type;
        $scope.actionFormData.dateCreate = $scope.selectedAction.Info.date_create;
        $scope.actionFormData.reminder = $scope.selectedAction.Info.reminder;
        $scope.actionFormData.dateReminder = $filter("DateFilter")($scope.selectedAction.Info.date_reminder);
    }

    //init ng-model (because value doesn't work)
    function initSubactionFields() {
        $scope.subactionFormData.name = $scope.selectedSubaction.Info.name;
        $scope.subactionFormData.customersId = $scope.selectedSubaction.Info.customers_id;
        $scope.subactionFormData.type = $scope.selectedSubaction.Info.type;
        $scope.subactionFormData.dateCreate = $scope.selectedSubaction.Info.date_create;
        $scope.subactionFormData.reminder = $scope.selectedSubaction.Info.reminder;
        $scope.subactionFormData.dateReminder = $filter("DateFilter")($scope.selectedSubaction.Info.date_reminder);
    }
});






