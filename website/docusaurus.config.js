module.exports = {
  title: 'Redux-Saga',
  tagline: 'An intuitive Redux side effect manager',
  url: 'https://redux-saga.js.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'static/img/favicon/favicon.ico',
  organizationName: 'redux-saga',
  projectName: 'redux-saga',
  themeConfig: {
    navbar: {
      title: 'Redux-Saga',
      logo: {
        alt: 'Redux-Saga Logo',
        src: 'static/img/Redux-Saga-Logo.png',
      },
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/facebook/docusaurus',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'React-Redux',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/redux-saga/redux-saga/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React-Redux. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/',
          routeBasePath: 'docs/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/react-redux/react-redux/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
