# hacker-news

A simple Hacker News client built with Nuxt.js and Vuetify. It consumes the Algolia HN Search API for fetching the data.

## Set up

Once the repository is cloned, download the dependencies using your package manager of choice (e.g. `npm install` or `yarn install`). The app can be run in development mode using `npm run dev` or `yarn dev`. To build the app for production, run `npm run build` or `yarn build`.

A `.env` file may be used to define the URL of the backend API, which queries the HN API and returns the data in a more convenient format. The default value is `http://localhost:3000/api/stories`. The `.env.example` file can be used as a template.
