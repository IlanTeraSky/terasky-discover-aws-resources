import { lambda } from '../aws';

export async function getLambdaFunctions() {
return await lambda.listFunctions().promise();
}