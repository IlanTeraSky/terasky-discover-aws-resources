import { getEC2Details, getVPCDetails } from './services/ec2/ec2';
import { getS3Details } from './services/s3/s3';
import { getLambdaFunctions } from './services/lambda/lambda';
import { getRestAPIs } from './services/api-gateway/api-gateway';
import { ec2, awsConfig } from './services/aws'

// Function to list AWS services in all regions
async function listServicesInAllRegions() {
    const regions = await ec2.describeRegions().promise();
    const serviceNames = [
        'EC2', // Amazon Elastic Compute Cloud
        'S3',  // Amazon Simple Storage Service
        'Lambda', // Amazon Lambda functions
        'VPC', // Amazon Virtual Private Cloud
        'APIGateway' // Amazon API Gateway
        // Add more service names here as needed
    ];
    if (regions.Regions) {
        for (const region of regions.Regions) {
            const regionName = region.RegionName;

            for (const serviceName of serviceNames) {
                console.log(`Region: ${regionName}, Service: ${serviceName}`);
                try {
                    await getServiceDetails(regionName ? regionName : awsConfig.region, serviceName);
                } catch (error) {
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
async function getServiceDetails(region: string, serviceName: string) {
    switch (serviceName) {
        case 'EC2':
            const instances = await getEC2Details();
            console.log(`EC2 Instances in ${region}:`, JSON.stringify(instances, null, 4));
            break;
        case 'S3':
            const buckets = await getS3Details();
            console.log(`S3 Buckets in ${region}:`, JSON.stringify(buckets, null, 4));
            break;
        case 'Lambda':
            const lambdas = await getLambdaFunctions();
            console.log(`Lambda functions in ${region}:`, JSON.stringify(lambdas, null, 4));
            break;
        case 'VPC':
            const vpcs = await getVPCDetails();
            console.log(`VPCs in ${region}:`, JSON.stringify(vpcs, null, 4));
            break;
        case 'APIGateway':
            const apis = await getRestAPIs();
            console.log(`REST APIs in ${region}:`, JSON.stringify(apis, null, 4));
            break;
        // Add cases for other services here
        default:
            console.log(`No details available for ${serviceName} in ${region}`);
    }
}

// Start the script
listServicesInAllRegions();