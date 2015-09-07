/**
 * Created by nikes on 07/09/2015.
 */


angular.module("crmApp").controller("DetailsActionController", function ($scope, $routeParams, ActionService) {

    //get action by id
    ActionService.getActionById($routeParams.id).then(function (data) {

        $scope.selectedAction = data[0];

        //get attachmens by actions_id
        ActionService.getAttachmentsByActionsId($routeParams.id).then(function (attachments) {

            console.log("dfsd",attachments);
            $scope.selectedAttachments = attachments;
        })
    });



});