/**
 * Created by nikes on 24/08/2015.
 */

angular.module("crmApp")
    .controller("ActionController", function ($scope) {

        //init datepicker
        angular.element('#date-picker').daterangepicker({
            singleDatePicker: true,
            format: 'DD/MM/YYYY'
        });


        var actionEvents = [
            {
                title: 'All Day Event',
                start: '2015-08-01',
                color: '#9A80B9'
            },
            {
                title: 'Long Event',
                start: '2015-08-07',
                end: '2015-08-10',
                color: '#EF4836'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2015-08-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2015-08-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2015-082-3',
                end: '2015-08-5',
                color: '#E99844'
            },
            {
                title: 'Meeting',
                start: '2015-08-12T10:30:00',
                end: '2015-08-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2015-08-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2015-08-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2015-08-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2015-08-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2015-08-13T07:00:00',
                color: '#26A65B'
            },
            {
                title: 'Buy This Theme',
                url: 'http://themeforest.net/item/kode-responsive-admin-dashboard-template-/10814250?ref=egemem',
                start: '2015-08-22',
                color: '#D2527F'
            }
        ];

//init calendar
        angular.element("#calendar").fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            lang: 'nl',
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: actionEvents
        });
    });