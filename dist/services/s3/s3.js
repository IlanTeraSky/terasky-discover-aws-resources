"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getS3Details = void 0;
const aws_1 = require("../aws");
async function getS3Details() {
    return await aws_1.s3.listBuckets().promise();
    ;
}
exports.getS3Details = getS3Details;
//# sourceMappingURL=s3.js.map