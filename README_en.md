[English Translation](README_en.md)

# Floorp Browser Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Foundation

### Installation

```
$ pnpm install 
```

### Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## How to Add a New Language

### 0. Create a Branch for New Language
To get started, create a new branch named after your target language and switch to it.
```
git checkout -b new-locale
```
This will create and switch to a new branch for your localization work.

### 1. Add a New Localization to the Config File
To add a new locale, update the [Docusaurus config file](/docusaurus.config.js) with the new locale.
```js
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'new-locale'],
  },
  'new-lang': {
    label: 'Language'
  }
};
```
### 2. Translate Your Content
For each document, page, or blog post you want to translate, create a version in the target language. Place these files in the appropriate directory within the i18n folder of your Docusaurus project. For example, to add Spanish translations for a document, place the translated file in `i18n/es/docusaurus-plugin-content-docs/current/your-doc.md`.

### 3. Translate Static and Theme Text
Use the same `i18n` directory to add translations for static texts like labels, buttons, etc., that are part of site's theme or UI. These translations typically go in the `i18n/es/code.json` file for a locale `es`.

### 4. Test the Localized Site
Run the following command to test your localized version:
```
pnpm start --locale new-locale
```

### 5. Contribute to the Floorp Docs
Create a pull request and wait for it to be tested and reviewed. If everything is approved, it will be merged.

```
git push origin new-language-branch
```

## Commit style
Every commit message **must** be written in lowercase and follow this format:
* Language
```
lang: changes

Example: lang | ru: fix description
```
* Other change
```
type of change | what was changed: changes

Example: deps: bump dependencies
```