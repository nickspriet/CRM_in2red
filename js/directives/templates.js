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
        .directive("loadscripts", function(){
            return {
                restrict: "E",
                templateUrl: "templates/loadscripts.html"
            }
        })


        //kantooradres
        .directive("kantoorAdres", function(){
            return {
                restrict: "E",
                templateUrl: "templates/pages/klanten/kantooradres.html"
            }
        })