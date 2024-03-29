/**
 * Created by nikes on 11/09/2015.
 */

angular.module("crmApp").controller("EditActionController", function ($scope, $routeParams, $filter, $location, FileUploader, ActionService) {
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
        $scope.actionFormData.name = $scope.selectedAction.Info.name;
        $scope.actionFormData.customersId = $scope.selectedAction.Info.customers_id;
        $scope.actionFormData.type = $scope.selectedAction.Info.type;
        $scope.actionFormData.reminder = $scope.selectedAction.Info.reminder == "Y";
        $scope.actionFormData.dateReminder = $filter("DateFilter")($scope.selectedAction.Info.date_reminder);
    }
})