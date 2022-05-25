# Moon Bird APP

- Execute yarn in the root of the project to install all app dependencies: `yarn`
- adding a dependency to the monorepo root: `yarn -W add YOUR_DEPENDENCY` (add `-D` in case of installing dev dependency)
- adding a dependency to a workspace: `yarn workspace @moon-bird/api add YOUR_DEPENDENCY` (`@moon-bird/api` is the name of the `package.json`)
- run api: `yarn start:api`
- run app: `yarn start:app`
