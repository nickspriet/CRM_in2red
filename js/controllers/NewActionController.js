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
            return this.queue.length < 10;
        }
    });

    //CALLBCKS uploader
    uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function (fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function (addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function (item) {
        item.formData = uploader.formData;
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function (fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function (progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function (fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function (fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function (fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function () {
        console.info('onCompleteAll');
    };

    console.info('uploader', uploader);

    //submit newActionForm

    $scope.submitForm = function () {
        console.log("submit");
    }


    $scope.addFile = function (el) {
        console.log("el", el);
        console.log("fffffff", $scope.files);
    }
})