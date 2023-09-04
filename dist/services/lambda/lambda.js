"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLambdaFunctions = void 0;
const aws_1 = require("../aws");
async function getLambdaFunctions() {
    return await aws_1.lambda.listFunctions().promise();
}
exports.getLambdaFunctions = getLambdaFunctions;
//# sourceMappingURL=lambda.js.map