# Weather App

Weather App in Svelte that calls and handles a RESTful API.
Allows you to add a card per city.

## Install

To install the necessary dependencies, run the following commands:

```bash
npm install
npm run build
```

Afterwards, create a .env file in this directory following the notation of the .example-env file, changing 'YOUR_API_KEY' with your own key.
You can get one for free at https://www.weatherapi.com/

## Preview

To preview this application, first clone the project and then simply run the following command:

```bash
npm run preview
```

## Deploying

In order to deploy it, you can either set the host and port in build/index.js and run:

```bash
node build
```

or set the the host and port when running the command itself:

```bash
HOST=127.0.0.1 PORT=4000 node build # example
```

For more information on deploying using SvelteKit using a Node server, check out [this link](https://kit.svelte.dev/docs/adapter-node#deploying).
