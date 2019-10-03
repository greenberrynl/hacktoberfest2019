# Hacktoberfest 2019 @ Greenberry

This repo is used for the workshop given at the kickoff Meetup of Hacktoberfest 2019 at Greenberry in Utrecht.

## 🤔 What to do?

Add your info to the `people.json`

**Example format**

```json
//...
{
  "name": "Ramon Gebben",
  "github": "@RamonGebben",
  "twitter": "@RamonGebben",
  "linkedin": "https://www.linkedin.com/in/ramon-gebben-88039b85"
}
//...
```

Submit your PR.

## 🧐 What's inside?

A quick look at the files and directories you'll see in this project.

```
.
├── node_modules
├── cypress
  ├── fixtures
  ├── integration         <--- Integration tests live here
    ├── auth
        ├── sign-up.js
        ├── sign-in.js
        ├── sign-out.js
├── src
  ├── components
    ├── MyComponent
        ├── index.js
        ├── index.spec.js
  ├── images
  ├── pages
    ├── route-name.js     <--- Pages folder is used by Gatsby to generate pages
    ├── about.js
  ├── templates
    ├── PostTemplate
        ├── index.js
        ├── index.spec.js
  ├── utils
    ├── myUtil
        ├── index.js
        ├── index.spec.js
├── .gitignore
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package.json
├── yarn.lock
└── README.md
```

## 🎮 Scripts

**build**
Will generate the optimized static website.

```
yarn build
```

**develop**
Will start development server

```
yarn develop
```

**start**
Is a short cut to `yarn develop`

```
yarn start
```

**serve**
Uses Gatsby's webserver to serve the static build

```
yarn serve
```

**lint**
Ensures proper code format

```
yarn lint
```

**test**
Runs all tests

```
yarn test
```

## Testing

**Cypress**
For end-to-end/integration testing we use [Cypress](https://www.cypress.io).
All integration tests are kept in `/cypress/integration/` folder.
To keep this folder organized, convention is to create folders per flow or type of scenario.

Let's say we have an application with 2 roles. Each role might have a different journey through the signing flow.
Both flows would be "sign-in" however the tests should be different, so we would structure the files like so;

```txt
/cypress
  /integration
    /role-admin
      - sign-in.js
    /role-user
      - sign-in.js
```

**Percy**
[Percy](https://percy.io) is an all-in-one visual review platform.
It is integrated with Cypress so we are able to create visual reference points to validate across different versions of the app/website.

Usage:

```js
//...Within a Cypress test
it('should be able to visit to /posts', () => {
  cy.visit(`${Cypress.env('appUrl')}/posts`);

  // Create snapshot
  cy.percySnapshot();
});
```
