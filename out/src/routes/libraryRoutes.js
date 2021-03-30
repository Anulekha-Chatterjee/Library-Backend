"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes = function (app) {
    app
        .get("/library", function (req, res) { return res.send("GET successful"); })
        .post("/library", function (req, res) { return res.send("POST successful"); });
};
exports.default = routes;
//# sourceMappingURL=libraryRoutes.js.map