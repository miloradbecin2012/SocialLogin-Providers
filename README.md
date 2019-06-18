# OAuth Provider

This project demonstrates how to get renew accessToken in Social Login(such as Linkedin, Google, Facebook, Twitter and so on) to a React application with Auth0.

## Getting Started

If you haven't already done so, [sign up](https://auth0.com) for your free Auth0 account and create a new client in the [dashboard](https://manage.auth0.com). Find the **domain** and **client ID** from the settings area and add the URL for your application to the **Allowed Callback URLs** box. The default URL is `http://localhost:3000/callback`. Also configure **Allowed Web Origins** to the default application URL `http://localhost:3000`.

Clone the repo or download it from the React quickstart page in Auth0's documentation.

Open the demo.

```bash
cd 01-Login
```

Install the dependencies for the app.

```
npm install
```

## Set the Client ID and Domain

If you download the sample from the quickstart page, it will come pre-populated with the **client ID** and **domain** for your application. If you clone the repo directly from Github, rename the `auth0-variables.js.example` file to `auth0-variables.js` and provide the **client ID** and **domain** there. This file is located in `src/Auth/`.

## Run the Application

The demo comes ready to serve locally using react-scripts.

```bash
npm start
```

The application will be served at `http://localhost:3000`.

## Run the Application With Docker

In order to run the example with docker you need to have `docker` installed.

You also need to set the environment variables as explained [previously](#set-the-client-id-and-domain).

Execute in command line `sh exec.sh` to run the Docker in Linux, or `.\exec.ps1` to run the Docker in Windows.

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.





