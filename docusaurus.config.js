// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Floorp Docs',
  tagline: 'Documentation for the Floorp Browser',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.floorp.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Floorp-Projects', // Usually your GitHub org/user name.
  projectName: 'floorp-docs-neo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@Components': path.resolve(__dirname, 'src/components/MarkdownComponents'),
          '@img': path.resolve(__dirname, 'static/img'),
        },
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['ja', 'en', 'ru'],
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
      zh: {
        label: "中文",
      }
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true
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
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Floorp Docs',
        logo: {
          alt: 'Floorp Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            href: 'https://discord.floorp.app',
            position: 'right',
            className: "fa-brands fa-discord",
            alt: 'Discord'
          },
          {
            href: 'https://github.com/Floorp-Projects/floorp-docs-neo',
            position: 'right',
            className: "fa-brands fa-github",
            alt: 'Github'
          },
          {
            type: "localeDropdown", position: "right", queryString: '?persistLocale=false',
          }
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //       {
      //         label: 'Discord',
      //         href: 'https://discord.floorp.app',
      //         image: 'img/favicon.png',
      //       },
      //       {
      //       label: 'X',
      //           href: 'https://x.com/floorp_browser',
      //       },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Ablaze. Built with Docusaurus.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
        options: {
          gantt: {
            fontSize: 27.5,
            taskFontSize: 27.5,
            sectionFontSize: 27.5,
            taskMargin: 20,
            gridLineStartPadding: 400,
            leftPadding: 200,
            topPadding: 80,
            rightPadding: 120,
            bottomPadding: 80,
            barHeight: 100,
          },
        },
      },
    }),

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
  ],
};

export default config;
