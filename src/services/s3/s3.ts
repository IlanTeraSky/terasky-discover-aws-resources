import { s3 } from '../aws';

export async function getS3Details() {
return await s3.listBuckets().promise();;
}