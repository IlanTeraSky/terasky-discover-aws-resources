"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api_gateways = exports.lambda = exports.s3 = exports.ec2 = exports.awsConfig = void 0;
const AWS = require("aws-sdk");
// Set up your AWS credentials. Make sure you have configured your AWS CLI or environment variables.
exports.awsConfig = {
    region: 'us-east-1', // You can change the default region if needed
};
AWS.config.update(exports.awsConfig);
// Create an AWS service object
exports.ec2 = new AWS.EC2();
exports.s3 = new AWS.S3();
exports.lambda = new AWS.Lambda();
exports.api_gateways = new AWS.APIGateway();
// Add more service objects for other AWS services you want to query
//# sourceMappingURL=aws.js.map