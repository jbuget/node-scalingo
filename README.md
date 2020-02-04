# node-scalingo

This library is an out-of-the-box HTTP client for the [Scalingo](https://scalingo.com/) API in Node.js.

You can find the detailed Scalingo API specifications on [the official API documentation website](https://developers.scalingo.com/).

## Usage

**1/** Get the following information from Scalingo:
- **api_token**: from [your account](https://my.scalingo.com/profile) or the Scalingo CLI, generate or get your Scalingo API token
- **api_endpoint**: from [the API documentation site](https://developers.scalingo.com/), get your targeted region endpoint:
    - Agora: https://api.agora-fr1.scalingo.com/v1
    - Outscale: https://api.osc-fr1.scalingo.com/v1

**2/** Install the dependency

```
npm install node-scalingo --save
```

**3/** In your code, define a new `ScalingoApi` object. Then use the services you need.

```javascript
const { ScalingoApi } = require('../dist');

const API_TOKEN = '<your_api_token>'; // Enter your own API token
const API_ENDPOINT = 'https://api.osc-fr1.scalingo.com/v1';  // ex: for Outscale region

const scalingoApi = new ScalingoApi(API_TOKEN, API_ENDPOINT);

async function main() {
  await scalingoApi.apps.listApplications().then(console.log);
  await scalingoApi.env.listEnvironmentVariables('<scalingo_app>').then(console.log);
  await scalingoApi.collaborators.inviteAppCollaborator('<scalingo_app>', '<collaborator_id>')
}

main();
```

> **Notice: this library is under construction.** If you miss a service, you can still use `ScalingoClient.query(uri, method, data, headers)` according to the [Scalingo developers documentation](https://developers.scalingo.com/).

## Documentation

Please refer to the [Scalingo API guides](https://developers.scalingo.com/) for help using `node-scalingo`.

## Contributing

### Installation

```
git clone git@github.com:jbuget/node-scalingo.git
cd node-scalingo
npm install
npm run build
npm test
```

### Publishing

```
npm run release
```

## License

This project is licensed under the [AGPL-3.0 License](https://github.com/jbuget/node-scalingo/blob/master/LICENSE).