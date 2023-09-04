"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ec2_1 = require("./services/ec2/ec2");
const s3_1 = require("./services/s3/s3");
const lambda_1 = require("./services/lambda/lambda");
const api_gateway_1 = require("./services/api-gateway/api-gateway");
const aws_1 = require("./services/aws");
// Function to list AWS services in all regions
async function listServicesInAllRegions() {
    const regions = await aws_1.ec2.describeRegions().promise();
    const serviceNames = [
        'EC2',
        'S3',
        'Lambda',
        'VPC',
        'APIGateway' // Amazon API Gateway
        // Add more service names here as needed
    ];
    if (regions.Regions) {
        for (const region of regions.Regions) {
            const regionName = region.RegionName;
            for (const serviceName of serviceNames) {
                console.log(`Region: ${regionName}, Service: ${serviceName}`);
                try {
                    await getServiceDetails(regionName ? regionName : aws_1.awsConfig.region, serviceName);
                }
                catch (error) {
                    let errorMessage = "Failed to service info";
                    if (error instanceof Error) {
                        errorMessage = error.message;
                    }
                    console.error(`Error getting details for ${serviceName} in ${regionName}: ${errorMessage}`);
                }
            }
        }
    }
}
// Function to get detailed information for a specific AWS service in a region
async function getServiceDetails(region, serviceName) {
    switch (serviceName) {
        case 'EC2':
            const instances = await (0, ec2_1.getEC2Details)();
            console.log(`EC2 Instances in ${region}:`, JSON.stringify(instances, null, 4));
            break;
        case 'S3':
            const buckets = await (0, s3_1.getS3Details)();
            console.log(`S3 Buckets in ${region}:`, JSON.stringify(buckets, null, 4));
            break;
        case 'Lambda':
            const lambdas = await (0, lambda_1.getLambdaFunctions)();
            console.log(`Lambda functions in ${region}:`, JSON.stringify(lambdas, null, 4));
            break;
        case 'VPC':
            const vpcs = await (0, ec2_1.getVPCDetails)();
            console.log(`VPCs in ${region}:`, JSON.stringify(vpcs, null, 4));
            break;
        case 'APIGateway':
            const apis = await (0, api_gateway_1.getRestAPIs)();
            console.log(`REST APIs in ${region}:`, JSON.stringify(apis, null, 4));
            break;
        // Add cases for other services here
        default:
            console.log(`No details available for ${serviceName} in ${region}`);
    }
}
// Start the script
listServicesInAllRegions();
//# sourceMappingURL=index.js.map