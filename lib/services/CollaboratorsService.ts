import Service from './Service';

export default class CollaboratorsService  extends Service {

  async listAppCollaborators(app: string): Promise<any> {
    const uri = `apps/${app}/collaborators`;
    const response = await this.client.query(uri, 'get');
    return response.data;
  }

  async inviteAppCollaborator(app: string, collaboratorEmail: string): Promise<any> {
    const uri = `apps/${app}/collaborators`;
    const data = {
      collaborator: {
        email: collaboratorEmail
      }
    };
    const response = await this.client.query(uri, 'post', data);
    return response.data;
  }

  async deleteAppCollaborator(app: string, collaboratorId: string): Promise<void> {
    const uri = `apps/${app}/collaborators/${collaboratorId}`;
    const response = await this.client.query(uri, 'delete');
    return response.data;
  }

}
