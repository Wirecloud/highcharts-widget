/*globals $, MashupPlatform */
window.onload = function () {
    "use strict";

    $("#container").highcharts({});

    MashupPlatform.wiring.registerCallback("highcharts", function (data) {
        var jdata = JSON.parse(data);
        $("#container").highcharts(jdata);
    });

    MashupPlatform.wiring.registerCallback("highstock", function (data) {
        var jdata = JSON.parse(data);
        $("#container").highcharts("StockChart", jdata);
    });
};
