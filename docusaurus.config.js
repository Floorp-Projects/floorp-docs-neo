// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Floorp Docs',
  tagline: 'Documentation for the Floorp Browser',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://regularentropy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/floorp-docs-ref/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'regularentropy', // Usually your GitHub org/user name.
  projectName: 'floorp-docs-ref', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@Components': path.resolve(__dirname, '/src/components/MarkdownComponents'),
        },
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['ja', 'en', 'ru', 'uk', 'hu'],
    path: 'i18n',
    localeConfigs: {
      ja: {
        label: "日本語",
      },
      en: {
        label: "English",
      },
      ru: {
        label: "Русский",
      },
      uk: {
        label: "Українська",
      },
      hu: {
        label: "Magyar",
      },
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        }
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'Floorp Docs',
          logo: {
            alt: 'Floorp Logo',
            src: 'img/favicon.png',
          },
          items: [
            {
              href: 'https://discord.com/invite/f8NFWjx6Rt',
              position: 'right',
              className: "fa-brands fa-discord",
              alt: 'Discord'
            },
            {
              href: 'https://github.com/Floorp-Projects/Floorp',
              position: 'right',
              className: "fa-brands fa-github",
              alt: 'Github'
            },
            {
              type: "localeDropdown", position: "right", queryString: '?persistLocale=true',
            }
          ],
        },
        // footer: {
        //   style: 'dark',
        //   links: [
        //       {
        //         label: 'Discord',
        //         href: 'https://discord.com/invite/f8NFWjx6Rt',
        //         image: 'img/favicon.png',
        //       },
        //       {
        //       label: 'X',
        //           href: 'https://twitter.com/floorp_browser',
        //       },
        //   ],
        //   copyright: `Copyright © ${new Date().getFullYear()} Ablaze. Built with Docusaurus.`,
        // },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
