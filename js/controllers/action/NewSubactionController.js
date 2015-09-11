
/**
 * Created by nikes on 11/09/2015.
 */

angular.module("crmApp").controller("NewSubactionController", function ($scope, $routeParams, $location, $filter, FileUploader, ActionService) {
    //init uploader (store customersId in formData)
    var uploader = $scope.uploader = new FileUploader({
        url: '/php/post/upload_files.php',
        formData: [{
            customersId: $scope.selectedCompany == null ? 0 : $scope.selectedCompany.Info.id
        }]
    });

    //upload attachments & submit newActionForm
    $scope.uploadAndSubmitForm = function () {
        //check if there are items to upload
        if ($scope.uploader.queue.length > 0) $scope.uploader.uploadAll();
        else $scope.submitForm(); //<-- see uploader.onCompleteAll function for submission form after every file has been uploaded
    }


    $scope.submitForm = function () {
        $scope.newSubactionFormData.actionsId = $routeParams.id;

        console.log("subactionFormData", $scope.newSubactionFormData);
        //post action
        ActionService.postSubaction($scope.newSubactionFormData).then(function (id) {

            //post attachments
            angular.forEach($scope.uploader.queue, function (item) {
                console.log("FILE", item.file);
                $scope.attachmentFormData = {
                    actionsId: $routeParams.id,
                    subactionsId: id.data,
                    name: item.file.name
                }

                console.log("attachmentFormData", $scope.attachmentFormData);

                ActionService.postAttachment($scope.attachmentFormData).then(function (id) {

                });
            });

            //show details of action
            $location.path("acties/details/" + $routeParams.id);
        });
    }
})