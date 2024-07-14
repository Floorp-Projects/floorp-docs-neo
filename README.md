# Floorp Browser Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install 
```

### Local Development

```
$ npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npx docusaurus build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Commit style
Every commit message **must** be named as following:
* Language
```
docs | lang: changes

Example: docs | ru: fix description
```
* Other change
```
docs | what was changed: changes

Example: docs | packages: bump dependencies
```