import { cloud_front } from '../aws';

export async function listDitributions() {
return await cloud_front.listDistributions().promise();
}