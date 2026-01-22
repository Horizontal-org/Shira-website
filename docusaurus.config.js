// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const signupBaseURL = process.env.SPACE_URL || 'https://alpha.space.shira.app';
const signupFormUrl = `${signupBaseURL}/get-started`;


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shira',
  staticDirectories: ['static'],

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


  markdown: {

    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  customFields: {
    signupFormUrl: signupFormUrl,
  },


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
          customCss: ['./src/css/custom.module.scss', './src/css/navbar.css'],
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

          indexPages: true,
          searchResultLimits: 8,
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          docsRouteBasePath: '/',

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
          alt: 'Shira Logo',
          src: 'img/shira-logo.png',
        },
        items: [
          {
            to: '/features',
            label: 'Features',
            position: 'left',
          },
          {
            to: 'https://quiz.shira.app/',
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
                to: '/phishing',
              },
              {
                label: 'Why phishing quizzes?',
                to: '/phishing-quizzes',
              },
            ],
          },
          {
            to: '/pricing',
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
            to: '/about',
            label: 'About',
            position: 'left',
          },

          {
            to: `${signupFormUrl}`,
            label: 'Sign up/Log in',
            position: 'right',
            className: 'button',
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
            src: 'img/shira-logo.png',
            height: 51,
          },
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Learn about phishing',
                to: '/phishing',
              },
              {
                label: 'Effective phishing education',
                to: '/phishing-quizzes',
              },
            ],
          },
          {
            title: 'Use Shira',
            items: [
              {
                label: 'Take a ready-made quiz',
                href: 'https://quiz.shira.app/',
              },
              {
                label: 'Explore Shira features',
                to: '/features',
              },
              {
                label: 'Build a custom quiz',
                href: signupFormUrl,
              },
            ],
          },
          {
            title: 'Get help',
            items: [
              {
                label: 'Visit our help center',
                to: '/help',
              },
              {
                label: 'Contact us',
                to: '/contact',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Learn about the Shira team',
                to: '/about',
              },
              {
                label: 'Shira is open source',
                href: 'https://github.com/Horizontal-org/shira/',
              },
            ],
          },
        ],
        copyright: `Shira is a product of <a href="http://www.wearehorizontal.org">Horizontal</a>, a technology non-profit dedicated to making online security and privacy accessible to all. </br> Licensed under the MIT 2.0. </br> <a href="mailto:contact@wearehorizontal.org">contact@wearehorizontal.org</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
