"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestAPIs = void 0;
const aws_1 = require("../aws");
async function getRestAPIs() {
    return await aws_1.api_gateways.getRestApis().promise();
}
exports.getRestAPIs = getRestAPIs;
//# sourceMappingURL=api-gateway.js.map