import ScalingoClient from '../ScalingoClient';
import Service from './Service';

export default class VariablesService  extends Service {

  async listEnvironmentVariables(appName: string) {
    const uri = `apps/${appName}/variables`;
    const response = await this.client.query(uri, 'get');
    return response.data;
  }

}
