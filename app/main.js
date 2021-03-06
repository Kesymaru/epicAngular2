System.register(['angular2/platform/browser', './chat/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, index_1, index_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
                index_2 = index_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(index_1.ChatComponent, [index_2.ChatService]);
        }
    }
});
//# sourceMappingURL=main.js.map