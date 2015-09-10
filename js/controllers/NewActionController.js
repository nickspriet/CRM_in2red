/**
 * Created by nikes on 08/09/2015.
 */

angular.module("crmApp").controller("NewActionController", function ($scope, $routeParams, FileUploader, ActionService) {

    var uploader = $scope.uploader = new FileUploader({
        url: '/php/post/upload_files.php',
        formData: [{
            customersId: $scope.selectedCompany == null ? 0 : $scope.selectedCompany.Info.id
        }]
    });


    //set customersId for upload folder after company is selected
    $scope.onSelect = function ($item, $model, $label) {
        $scope.uploader.formData = [{customersId: $item.Info.id}];
    };


    //FILTERS uploader
    uploader.filters.push({
        name: 'customFilter',
        fn: function (item /*{File|FileLikeObject}*/, options) {
            //maximum upload items is 10
            return this.queue.length < 10;
        }
    });

    //<editor-fold desc="CALLBACKS uploader">
    $scope.uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    $scope.uploader.onAfterAddingFile = function (fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    $scope.uploader.onAfterAddingAll = function (addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    $scope.uploader.onBeforeUploadItem = function (item) {
        item.formData = uploader.formData;
        console.info('onBeforeUploadItem', item);
    };
    $scope.uploader.onProgressItem = function (fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    $scope.uploader.onProgressAll = function (progress) {
        console.info('onProgressAll', progress);
    };
    $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    $scope.uploader.onErrorItem = function (fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    $scope.uploader.onCancelItem = function (fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    $scope.uploader.onCompleteItem = function (fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    $scope.uploader.onCompleteAll = function () {

        console.info('onCompleteAll');

        //submit the form when all files are uploaded
        $scope.submitForm();
    };

    console.info('uploader', uploader);
    //</editor-fold>



    //upload attachments & submit newActionForm
    $scope.uploadAndSubmitForm = function () {
        console.log("uploading... submit...");
        //check if there are items to upload
        if ($scope.uploader.queue.length > 0) $scope.uploader.uploadAll();
        else $scope.submitForm();  //<-- see uploader.onCompleteAll function for submission form after every file has been uploaded
    }


    $scope.submitForm = function () {

    }
});