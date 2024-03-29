/**
 * Created by nikes on 21/08/2015.
 */

angular.module("templates", [])

    //header
    .directive("header", function () {
        return {
            restrict: "E",
            templateUrl: "templates/header.html"
        }
    })

    //sidebar
    .directive("sidebar", function () {
        return {
            restrict: "E",
            templateUrl: "templates/sidebar.html"
        }
    })

    //footer
    .directive("footer", function () {
        return {
            restrict: "E",
            templateUrl: "templates/footer.html"
        }
    })

    //load jquery/scripts after DOM is COMPLETELY loaded
    .directive("loadscripts", function () {
        return {
            restrict: "E",
            templateUrl: "templates/loadscripts.html"
        }
    })


    //kantooradres
    .directive("kantoorAdres", function () {
        return {
            restrict: "E",
            templateUrl: "templates/pages/klanten/kantooradres.html"
        }
    })

    //oneAction
    .directive("oneAction", function () {
        return {
            restrict: "E",
            templateUrl: "templates/pages/acties/oneAction.html",
            scope: {
                action: "=action",
                selectedAttachments: '=selectedAttachments'
            },
            controller: function ($scope) {
                //files to show modal
                $scope.modalFiles = ['pdf', 'png', 'jpg', 'jpeg'];


                //show modal if document is PDF or Image
                $scope.openModal = function (fileName) {
                    //get extension of file (pdf, png, jpg, jpeg...) + source
                    var ext = fileName.split(".").pop().toLowerCase();
                    var source = "/_userfiles/" + $scope.action.customers_id + "/" + fileName;

                    //clear content of modal
                    $scope.$parent.pdfSource = $scope.$parent.imgSource = null;

                    //check if file is pdf-document or image
                    if (ext == "pdf" || ext == "docx") $scope.$parent.pdfSource = source;
                    if (ext == "png" || ext == "jpg" || ext == "jpeg") $scope.$parent.imgSource = source;

                    //add filename + show the modal
                    $scope.$parent.filename = fileName;
                    $('#myModal').modal('show');
                }
            }
        }
    })

    //modal
    .directive("modal", function () {
        return {
            restrict: "E",
            templateUrl: "templates/pages/acties/modal.html"
        }
    })


    //dashboard acties
    .directive("dashboardActies", function () {
        return {
            restrict: "E",
            templateUrl: "templates/pages/dashboard/acties.html"
        }
    })

    //dashboard offertes
    .directive("dashboardOffertes", function () {
        return {
            restrict: "E",
            templateUrl: "templates/pages/dashboard/offertes.html"
        }
    })

    //dashboard klanten
    .directive("dashboardKlanten", function () {
        return {
            restrict: "E",
            templateUrl: "templates/pages/dashboard/klanten.html"
        }
    })