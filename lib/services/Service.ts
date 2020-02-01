import ScalingoClient from '../ScalingoClient';

export default abstract class Service {

  protected readonly client: ScalingoClient;

  constructor(scalingoClient: ScalingoClient) {
    this.client = scalingoClient;
  }

}