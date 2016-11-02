/* globals $, MashupPlatform */

window.onload = function () {
    "use strict";

    $("#container").highcharts({});

    var sendData = function sendData(data) {
        var toSend = {};
        toSend.category = data.category || "";
        toSend.percentage = data.percentage || 0.0;
        toSend.x = data.x;
        toSend.y = data.y;
        MashupPlatform.wiring.pushEvent("selected", JSON.stringify(toSend));
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

        if (typeof data === "string") {
            try {
                data = JSON.parse(data);
            } catch (e) {
                throw new MashupPlatform.wiring.EndpointTypeError("Event data must be encoded using JSON");
            }
        }

        data = hijackEvents(data);
        $("#container").highcharts(data);
    });

    MashupPlatform.wiring.registerCallback("highstock", function (data) {

        if (typeof data === "string") {
            try {
                data = JSON.parse(data);
            } catch (e) {
                throw new MashupPlatform.wiring.EndpointTypeError("Event data must be encoded using JSON");
            }
        }

        data = hijackEvents(data);
        $("#container").highcharts("StockChart", data);
    });
};
