import ScalingoClient from './ScalingoClient';
import VariablesService from './services/VariablesService';
import AppsService from './services/AppsService';
import CollaboratorsService from './services/CollaboratorsService';

export default class ScalingoApi {

  private readonly client: ScalingoClient;
  public readonly apps: AppsService;
  public readonly env: VariablesService;
  public readonly collaborators: CollaboratorsService;

  constructor(apiToken: string, apiEndpoint: string) {
    this.client = new ScalingoClient(apiToken, apiEndpoint);
    this.apps = new AppsService(this.client);
    this.env = new VariablesService(this.client);
    this.collaborators = new CollaboratorsService(this.client);
  }

}