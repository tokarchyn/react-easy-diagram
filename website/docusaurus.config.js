module.exports = {
  title: 'React Easy Diagram',
  tagline: 'Open source library to build highly customazible fast React diagrams.',
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
          label: 'Examples',
          position: 'right',
          items: [
            {
              label: 'Basic',
              to: 'examples/basic',
            },
            {
              label: 'Simple',
              to: 'examples/simple',
            },
            {
              label: 'Calculator',
              to: 'examples/calculator',
            },
            {
              label: 'Configure Default Link',
              to: 'examples/configureDefaultLink',
            },
            {
              label: 'Configure Default Port',
              to: 'examples/configureDefaultPort',
            },
            {
              label: 'Performance',
              to: 'examples/performance',
            },
            {
              label: 'Port Position',
              to: 'examples/portPosition',
            },
          ],
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
            'https://github.com/tokarchyn/react-easy-diagram/edit/main/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};
