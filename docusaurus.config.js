// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shira',
  tagline: 'Learn the skills needed to identify and defeat phishing attacks',
  favicon: 'img/shira.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://shira.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          sidebarCollapsible: false,
        },
        theme: {
          customCss: './src/css/custom.module.scss',
        },
      }),
    ],
  ],

   themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
          /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
          ({
            // ... Your options.
            // `hashed` is recommended as long-term-cache of index file is possible.
            hashed: true,

            // For Docs using Chinese, it is recomended to set:
            // language: ["en", "zh"],

            // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
            // forceIgnoreNoIndex: true,
          }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/shira-social-card.png',
      navbar: {
        logo: {
          alt: 'Shira Log',
          src: 'img/shira-logo.svg',
        },
        items: [
          {
            href: '/features',
            label: 'Features',
            position: 'left',
          },
          {
            href: 'https://quiz.shira.app/',
            sidebarId: 'takeQuizSidebar',
            position: 'left',
            label: 'Take a quiz',
          },
          {
            type: 'dropdown',
            label: 'Learn',
            position: 'left',
            items: [
              {
                label: 'What is Phishing?',
                href: '/phishing',
              },
              {
                label: 'Why phishing quizzes?',
                href: '/phishing-quizzes',
              },
            ],
          },
          {
            href: '/pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'HelpSidebar',
            position: 'left',
            label: 'Help',
          },
          {
            href: '/about',
            label: 'About',
            position: 'left',
          },

          {
            href: '/contact',
            label: 'Get Started',
            position: 'right',
            className: "backgroundDark",
            //className: {`${global.backgroundDark} ${global.button}`},
          },
          {
            type: 'search',
            position: 'right',
          },
        ],

      },
      footer: {
        logo: {
            alt: 'Shira Logo',
            src: 'img/shira-logo.svg',
            width: 160,
            height: 51,
          },
        style: 'dark',
        copyright: `Shira is a product of <a href="http://www.wearehorizontal.org">Horizontal</a>, a technology non-profit dedicated to making online security and privacy accessible to all. </br> <a href="mailto:contact@wearehorizontal.org">contact@wearehorizontal.org</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
