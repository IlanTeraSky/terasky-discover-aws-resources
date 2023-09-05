import { cloud_formation } from '../aws';

export async function listStackSets() {
return await cloud_formation.listStackSets().promise();
}