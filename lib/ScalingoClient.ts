import axios, {AxiosInstance, AxiosResponse, Method} from 'axios';
import * as moment from 'moment';

export default class ScalingoClient {

  private readonly apiToken: string;
  private readonly apiEndpoint: string;
  private httpClient: AxiosInstance;
  private authEndpoint: string = 'https://auth.scalingo.com/v1/tokens';
  private bearerToken: string;
  private bearerTokenExpirationDateTime: moment.Moment;

  constructor(apiToken: string, apiEndpoint: string) {
    this.apiToken = apiToken;
    this.apiEndpoint = apiEndpoint;
  }

  async _setOrUpdateBearerToken(): Promise<void> {
    if (this.bearerToken && this.bearerTokenExpirationDateTime.isAfter(moment())) {
      return;
    }

    try {
      const url = `${this.authEndpoint}/exchange`;
      const response = await axios.post(url, {}, {
        auth: {
          username: '',
          password: this.apiToken
        }
      });
      this.bearerToken = response.data.token;
      console.log('bearerToken', this.bearerToken);
      this.bearerTokenExpirationDateTime = moment().add(1, 'hour');

      this.httpClient = axios.create({
        baseURL: this.apiEndpoint,
        headers: {
          'Authorization': `Bearer ${this.bearerToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async query(uri: string, method: Method, data?: object, headers?: object): Promise<AxiosResponse> {

    await this._setOrUpdateBearerToken();

    const url = `${this.apiEndpoint}/${uri}`;

    try {
      return this.httpClient.request({url, method, data, headers});
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}