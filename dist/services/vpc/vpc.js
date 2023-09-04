"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVPCDetails = void 0;
const aws_1 = require("../aws");
async function getVPCDetails() {
    return await aws_1.vpc.getService().promise(); //s3.listBuckets().promise();;
}
exports.getVPCDetails = getVPCDetails;
//# sourceMappingURL=vpc.js.map