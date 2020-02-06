# node-scalingo

> 🚨 **This repository is no more developed, nor maintained.** When I started it, I did not see [the official Scalingo Node.js client](https://github.com/scalingo/scalingo.js). I recommand to use it instead of this one. 

This library is an out-of-the-box HTTP client for the [Scalingo](https://scalingo.com/) API in Node.js.

You can find the detailed Scalingo API specifications on [the official API documentation website](https://developers.scalingo.com/).

## Getting started

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
const { ScalingoApi } = require('node-scalingo');

const API_TOKEN = '<your_api_token>'; // Enter your own API token
const API_ENDPOINT = 'https://api.osc-fr1.scalingo.com/v1';  // ex: for Outscale region

const scalingoApi = new ScalingoApi(API_TOKEN, API_ENDPOINT);

scalingoApi.apps.listApplications().then(console.log);
```

## Usage

It is recommended to consume services through `ScalingoApi`.

If you miss a service, you can still use `ScalingoClient` and the `query()` method, according to the [Scalingo developers documentation](https://developers.scalingo.com/).

The following example do the same as previously, but with `ScalingoClient` instead of `ScalingoApi`.

```javascript
const { ScalingoClient } = require('node-scalingo');

const API_TOKEN = '<your_api_token>'; // Enter your own API token
const API_ENDPOINT = 'https://api.osc-fr1.scalingo.com/v1';  // ex: for Outscale region

const scalingoClient = new ScalingoClient(API_TOKEN, API_ENDPOINT);

scalingoClient.query('apps', 'get').then((response) => console.log(response.data));
```

## Documentation

Please refer to the [Scalingo API guides](https://developers.scalingo.com/) for help using `node-scalingo`.

## License

This project is licensed under the [AGPL-3.0 License](https://github.com/jbuget/node-scalingo/blob/master/LICENSE).
