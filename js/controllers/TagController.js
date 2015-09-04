/**
 * Created by nikes on 03/09/2015.
 */

angular.module("crmApp").controller("TagsController", function ($scope, TagService) {

        //get all tags
        TagService.getTags().then(function (data) {
            console.log(data);

            $scope.tags = data;
        });
    });