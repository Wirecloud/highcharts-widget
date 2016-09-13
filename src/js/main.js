/*globals $, MashupPlatform */
window.onload = function () {
    "use strict";

    $("#container").highcharts({});
    var dataHandler;

    var sendData = function sendData(data) {
        var toSend = {};
        var filters;
        // If there's a dataHandler send filter data.
        if (dataHandler) {
            filters = dataHandler(data);
            MashupPlatform.wiring.pushEvent("selectedFilters", filters);
        }

        toSend.category = data.category || "";
        toSend.percentage = data.percentage || 0.0;
        toSend.x = data.x;
        toSend.y = data.y;
        MashupPlatform.wiring.pushEvent("selected", toSend);
    };

    var hijackEvents = function hijackEvents(data) {
        data.plotOptions = data.plotOptions || {};
        data.plotOptions.series = data.plotOptions.series || {};
        data.plotOptions.series.point = data.plotOptions.series.point || {};
        data.plotOptions.series.point.events = {}; // Let's clean all the events because can't be sended via wiring
        data.plotOptions.series.point.events.click = function (e) {
            sendData(this); // this :: Point
        };
        return data;
    };

    MashupPlatform.wiring.registerCallback("highcharts", function (data) {
        var jdata;
        // UnStringify input if JSONed
        if (typeof (data) === "string") {
            jdata = JSON.parse(data);
            dataHandler = null;
        } else {
            dataHandler = data.dataHandler || null; //save the dataHandler if exists.
            jdata = JSON.parse(JSON.stringify(data)); // Some sneaky thing makes it crash otherwise :/
            jdata = data;
        }
        jdata = hijackEvents(jdata);
        $("#container").highcharts(jdata);
    });

    MashupPlatform.wiring.registerCallback("highstock", function (data) {
        var jdata;
        // UnStringify input if JSONed
        if (typeof (data) === "string") {
            jdata = JSON.parse(data);
            dataHandler = null;
        } else {
            dataHandler = data.dataHandler || null; //save the dataHandler if exists.
            jdata = JSON.parse(JSON.stringify(data)); // Some sneaky thing makes it crash otherwise :/
            jdata = data;
        }
        jdata = hijackEvents(jdata);
        $("#container").highcharts("StockChart", jdata);
    });
};
