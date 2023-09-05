import * as AWS from 'aws-sdk';

// Set up your AWS credentials. Make sure you have configured your AWS CLI or environment variables.
export const awsConfig = {
    region: 'us-east-1', // You can change the default region if needed
  };

AWS.config.update(awsConfig);

// Create an AWS service object
export const ec2 = new AWS.EC2();
export const s3 = new AWS.S3();
export const lambda = new AWS.Lambda();
export const api_gateways = new AWS.APIGateway();
export const appConfig = new AWS.AppConfig();
export const athena = new AWS.Athena();
export const backup = new AWS.Backup();
export const cloud_formation = new AWS.CloudFormation();
// Add more service objects for other AWS services you want to query