# gupy-swapi
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwescoder%2Fgupy-swapi.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwescoder%2Fgupy-swapi?ref=badge_shield)


> Node/React application showcasing SWAPI (swapi.co) data

## Setup

> This project assumes you have `npm` or `yarn` pre-installed

- First download or clone this repository to your machine
- Then go to the project directory and run:
  ```bash
  yarn # If you have `yarn`

  npm install # If you have `npm`
  ```
  > This will install all needed dependencies

- Then you can start the application with:
  ```bash
  yarn start # If you have `yarn`

  npm start # If you have `npm`
  ```
  > This will run a seed script for the database and start a daemon server (powered by [PM2](http://pm2.keymetrics.io/)) with the application runing on the port 3000 by default and the endpoint [http://localhost:3000/graphql](http://localhost:3000/graphql) for the GraphQL API

## TODO checklist

- [ ] Create relations between entities (25% done)
- [ ] Link remaining relation links on views
- [ ] Implement some UI like `material-ui`
- [ ] Implement unit tests
- [ ] Treat errors in a user friendly way
- [ ] Develop a Guide for the home page
- [ ] Create mutations queries on graphql (create, update, delete)
- [ ] Create views for creations (each model)
- [ ] Create views for update (each model)
- [ ] Create views for delete (each model)
- [ ] Implement search (preferably with fuzzy search)
- [ ] Implement filters (for measurable/enumerable properties)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwescoder%2Fgupy-swapi.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwescoder%2Fgupy-swapi?ref=badge_large)