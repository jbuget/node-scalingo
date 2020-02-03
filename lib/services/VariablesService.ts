import Service from './Service';

export default class VariablesService  extends Service {

  async listEnvironmentVariables(appName: string): Promise<any> {
    const uri = `apps/${appName}/variables`;
    const response = await this.client.query(uri, 'get');
    return response.data;
  }

}
