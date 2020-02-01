import ScalingoClient from '../ScalingoClient';

export default class VariablesService {

  private readonly client: ScalingoClient;

  constructor(scalingoClient: ScalingoClient) {
    this.client = scalingoClient;
  }

  async listEnvironmentVariables(appName: string) {
    const uri = `apps/${appName}/variables`;
    const response = await this.client.query(uri, 'get');
    return response.data;
  }

}
