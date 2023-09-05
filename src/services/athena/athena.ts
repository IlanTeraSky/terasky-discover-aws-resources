import { athena } from '../aws';

export async function listDataCatalogs() {
return await athena.listDataCatalogs().promise();
}