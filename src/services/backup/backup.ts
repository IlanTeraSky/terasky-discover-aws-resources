import { backup } from '../aws';

export async function listBackupPlans() {
return await backup.listBackupPlans().promise();
}