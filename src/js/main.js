/*globals $, MashupPlatform */
window.onload = function () {
    "use strict";

    $("#container").highcharts({});

    MashupPlatform.wiring.registerCallback("options", function (data) {
        var jdata = JSON.parse(data);
        $("#container").highcharts(jdata);
    });
};
