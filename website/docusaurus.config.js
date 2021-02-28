module.exports = {
  title: 'React Easy Diagram',
  tagline: 'The tagline of React Easy Diagram',
  url: 'https://lucid-ritchie-113206.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tokarchyn', // Usually your GitHub org/user name.
  projectName: 'react-easy-diagram', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'React Easy Diagram',
      logo: {
        alt: 'React Easy Diagram',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/tokarchyn/react-easy-diagram',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Tokarchyn Vitalii.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tokarchyn/react-easy-diagram',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};
