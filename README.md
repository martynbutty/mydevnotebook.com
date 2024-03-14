# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Dependancies
Node >=16.14 (hint, try [NVM]())

Then install yarn, which is now recommended to be installed via [corepack](https://yarnpkg.com/getting-started/install)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy

# Real example, but requires valid SSH key setup
$ GIT_USER=martynbutty USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
