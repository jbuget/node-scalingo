import ScalingoApi from '../lib/ScalingoApi';

const apiToken = '<your_api_token>';
const apiEndpoint = 'https://api.osc-fr1.scalingo.com/v1';
const scalingoApi = new ScalingoApi(apiToken, apiEndpoint);

async function main() {
  // This is a basic example
  scalingoApi.apps.listApplications().then(console.log);
}

main();
