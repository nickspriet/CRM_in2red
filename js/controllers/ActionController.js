/**
 * Created by nikes on 24/08/2015.
 */

angular.module("crmApp")
    .controller("ActionController", function ($scope, $location, ActionService) {

        var actionEvents = [];

        //get all actions
        ActionService.getActions().then(function (data) {
            console.log(data);

            $scope.actions = data;

            var eventColors = {
                "telefoon" : "green",
                "e-mail" : "#399bff",
                "afspraak": "#f39c12",
            }


            actionEvents = data.map(function (a) {
                console.log(a);
                return {
                    "id": a.id,
                    "title": a.name,
                    "start": a.date_create,
                    "color": a.reminder == 'Y' ? 'red' : eventColors[a.type.toLowerCase()]
                };
            });


            console.log("actionEvents", actionEvents);

            //init calendar (Jquery, this is not basic angular usage)
            if (angular.element('#calendar')[0] != null) {
                angular.element("#calendar").fullCalendar({
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,basicWeek,basicDay'
                    },
                    lang: 'nl',
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    events: actionEvents,
                    eventClick: function (calEvent, jsEvent, view) {
                        location.href = "#/acties/details/" + calEvent.id;
                    }
                });
            }
        });


        $scope.goToDetails = function (id) {
            $location.path("acties/details/" + id);
        }

    });