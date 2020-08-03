module.exports = {
  stories: ['../src/**/*.stories.tsx', '../src/**/*.stories.mdx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
};
