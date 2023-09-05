import { appConfig } from '../aws';

export async function listAppConfigapplications() {
return await appConfig.listApplications().promise();
}