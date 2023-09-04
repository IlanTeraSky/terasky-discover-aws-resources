"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVPCDetails = exports.getEC2Details = void 0;
const aws_1 = require("../aws");
async function getEC2Details() {
    return await aws_1.ec2.describeInstances().promise();
}
exports.getEC2Details = getEC2Details;
async function getVPCDetails() {
    return await aws_1.ec2.describeVpcs().promise();
}
exports.getVPCDetails = getVPCDetails;
//# sourceMappingURL=ec2.js.map