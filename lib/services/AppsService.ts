import ScalingoClient from '../ScalingoClient';

export default class AppsService {

  private readonly client: ScalingoClient;

  constructor(scalingoClient: ScalingoClient) {
    this.client = scalingoClient;
  }

  async createApplication(appName: string, appGitSource?: string, appStackId?: string, dryRun: boolean = false) {
    const uri = 'apps';
    const data = {
      app: {
        name: appName,
        git_source: appGitSource,
        stack_id: appStackId
      }
    };
    const headers = {
      'X-Dry-Run': dryRun
    };
    const response = await this.client.query(uri, 'post', data, headers);
    return response.data;
  }

  async listApplications() {
    const uri = 'apps';
    const response = await this.client.query(uri, 'get');
    return response.data;
  }

  async getApplication(app: string) {
    const uri = `apps/${app}`;
    const response = await this.client.query(uri, 'get');
    return response.data;
  }

  async getContainersList(app: string) {
    const uri = `apps/${app}/containers`;
    const response = await this.client.query(uri, 'get');
    return response.data;
  }

  async restartApplication(app: string, scope?: string[]) {
    const uri = `apps/${app}/restart`;
    const data = {scope};
    const response = await this.client.query(uri, 'post', data);
    return response.data;
  }

}
