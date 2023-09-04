import { api_gateways } from '../aws';

export async function getRestAPIs() {
return await api_gateways.getRestApis().promise();
}