const { ScalingoApi } = require('../dist');

const API_TOKEN = '<your_api_token>'; // Enter your own API token
const API_ENDPOINT = 'https://api.osc-fr1.scalingo.com/v1';

const scalingoApi = new ScalingoApi(API_TOKEN, API_ENDPOINT);

scalingoApi.apps.listApplications().then(console.log);
