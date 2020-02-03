import * as sinon from 'sinon';
import CollaboratorsService from '../../../lib/services/CollaboratorsService';
import ScalingoClient from '../../../lib/ScalingoClient';
import {AxiosRequestConfig, AxiosResponse} from 'axios';

class StubResponse implements AxiosResponse {
  config: AxiosRequestConfig;
  data: any;
  headers: any;
  status: number;
  statusText: string;

  constructor(data: any) {
    this.data = data;
  }
}

describe('listAppCollaborators', () => {

  test('query Scalingo client with good params', async () => {
    // given
    const appName = 'test-app';
    const scalingoClient = new ScalingoClient('api_token', 'api_endpoint');
    const axiosResponse = new StubResponse('success');
    sinon.stub(scalingoClient, 'query').withArgs('apps/test-app/collaborators', 'get').resolves(axiosResponse);
    const collaboratorsService = new CollaboratorsService(scalingoClient);

    // when
    const actual = await collaboratorsService.listAppCollaborators(appName);

    // then
    expect(actual).toEqual('success');
  });
});

describe('deleteAppCollaborators', () => {

  test('query Scalingo client with good params', async () => {
    // given
    const appName = 'test-app';
    const collaboratorId = 'abcd-1234';
    const scalingoClient = new ScalingoClient('api_token', 'api_endpoint');
    const axiosResponse = new StubResponse('success');
    sinon.stub(scalingoClient, 'query').withArgs('apps/test-app/collaborators/abcd-1234', 'delete').resolves(axiosResponse);
    const collaboratorsService = new CollaboratorsService(scalingoClient);

    // when
    const actual = await collaboratorsService.deleteAppCollaborator(appName, collaboratorId);

    // then
    expect(actual).toEqual('success');
  });
});
