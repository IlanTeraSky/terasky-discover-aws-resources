import { ec2 } from '../aws';

export async function getEC2Details() {
return await ec2.describeInstances().promise();
}

export async function getVPCDetails() {
    return await ec2.describeVpcs().promise();
}