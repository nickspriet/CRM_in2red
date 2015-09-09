/**
 * Created by nikes on 07/09/2015.
 */


angular.module("crmApp").controller("DetailsActionController", function ($scope, $routeParams, FileUploader, ActionService) {

    $scope.actionFormData = {};

    //files to show modal
    $scope.modalFiles = ['pdf', 'png', 'jpg', 'jpeg'];

    //get action by id
    ActionService.getActionById($routeParams.id).then(function (data) {
        $scope.selectedAction = data[0];

        //get attachmens by actions_id
        ActionService.getAttachmentsByActionsId($routeParams.id).then(function (attachments) {
            $scope.selectedAttachments = attachments;
        });

        initFields();
    });


    //show modal if document is PDF or Image
    $scope.openModal = function (fileName) {
        //get extension of file (pdf, png, jpg, jpeg...) + source
        var ext = fileName.split(".").pop().toLowerCase();
        var source = "/_userfiles/" + $scope.selectedAction.customers_id + "/" + fileName;

        //clear content of modal
        $scope.pdfSource = $scope.imgSource = null;

        //check if file is pdf-document or image
        if (ext == "pdf" || ext == "docx") $scope.pdfSource = source;
        if (ext == "png" || ext == "jpg" || ext == "jpeg") $scope.imgSource = "/_userfiles/" + $scope.selectedAction.customers_id + "/" + fileName;

        //add filename + show the modal
        $scope.filename = fileName;
        $('#myModal').modal('show');

    }


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






