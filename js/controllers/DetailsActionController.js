/**
 * Created by nikes on 07/09/2015.
 */


angular.module("crmApp").controller("DetailsActionController", function ($scope, $routeParams, FileUploader, ActionService) {

    $scope.actionFormData = {};

    //get action by id
    ActionService.getActionById($routeParams.id).then(function (data) {
        $scope.selectedAction = data[$routeParams.id];
        console.log("selectedAction", $scope.selectedAction);

        //get attachments by actions_id
        ActionService.getAttachmentsByActionsId($routeParams.id).then(function (actionAttachments) {
            $scope.selectedActionAttachments = actionAttachments;
        });


        //get attachments by subactions_id
        ActionService.getAttachmentsBySubactionsId($routeParams.id).then(function (subactionAttachments) {
            $scope.selectedSubactionAttachments = subactionAttachments;
        });



        initFields();
    });





    var uploader = $scope.uploader = new FileUploader({
        url: '/php/post/upload_files.php',
        formData: [{
           // customersId: $scope.selectedAction.customers_id
        }]
    });





    //init ng-model (because value doesn't work)
    function initFields() {
        $scope.actionFormData.name = $scope.selectedAction.name;
        $scope.actionFormData.customersId = $scope.selectedAction.customers_id;
        $scope.actionFormData.type = $scope.selectedAction.type;
        $scope.actionFormData.dateCreate = $scope.selectedAction.date_create;
        $scope.actionFormData.reminder = $scope.selectedAction.reminder;
        $scope.actionFormData.dateReminder = $scope.selectedAction.date_reminder;
    }
});






