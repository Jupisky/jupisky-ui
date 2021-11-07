# Jupisky

For support requests, please open up a [bug issue](https://github.com/Jupisky/jupisky-ui/issues/new?template=bug-report.md).

## Production deployments

This repository contains the code for the frontend code hosted at https://jupisky.com

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [Deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

We use [yarn](https://yarnpkg.com) in our infrastructure, so we decided to go with yarn in the README.
Please install yarn globally if you haven't already.

### Environment variables

The app grabs environment variables from the `.env` file. Copy our template to your own local file:

```
cp .env.example .env
```

To execute transactions, you'll need to create an [Infura](https://infura.io) project and set the project ID in the `.env` you've just created:

```
REACT_APP_INFURA_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Once done, you'll need to restart the app if it's already running.

### Installing and running

Install dependencies for the project:

```
yarn install
```

To use the Rinkeby services:

```
yarn start
```

If you prefer using the Mainnet ones:

```
yarn start-mainnet
```

If you prefer to use Docker:

```
docker-compose build && docker-compose up
```

### Building

For Rinkeby:

```
yarn build
```

For Mainnet:

```
yarn build-mainnet
```

## Running the tests

To run the tests:

```
yarn test
```

### Lint

ESLint will be run automatically before you commit. To run it manually:

```
yarn lint:fix
```

## Deployment

### Dev & staging

The code is deployed to a testing website automatically on each push via a GitHub Action.
The GitHub Action will create a new subdomain and post the link as a comment in the PR.

### Production

Deployment to production is done manually. Please see the [release procedure](docs/release-procedure.md) notes for details.

## Configuring the app for running on different networks

[Please check the network configuration documentation](./docs/networks.md)

## Built With

- [React](https://reactjs.org/) - A JS library for building user interfaces
- [Material UI 4.X](https://material-ui.com/) - React components that implement Google's Material Design
- [redux, immutable, reselect, final-form](https://redux.js.org/) - React ecosystem libraries

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
