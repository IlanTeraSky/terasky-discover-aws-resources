"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEC2Details = void 0;
const AWS = require("aws-sdk");
const ec2 = new AWS.EC2();
async function getEC2Details() {
    const instances = await ec2.describeInstances().promise();
}
exports.getEC2Details = getEC2Details;
//# sourceMappingURL=ec2.js.map