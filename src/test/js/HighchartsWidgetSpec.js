/* globals MashupPlatform, MockMP, beforeAll, beforeEach, it, expect, describe*/
(function () {
    "use strict";

    describe("Test HighchartsWidget", function () {
        // var widget;
        beforeAll(function () {
            window.MashupPlatform = new MockMP.MockMP();
        });

        beforeEach(function () {
            MashupPlatform.reset();
            // widget = new HighchartsWidget();
        });

        it("Dummy test", function () {
            expect(true).toBeTruthy();
        });

    });
})();
