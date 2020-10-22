require('../src/index.css');
const  React =  require("react");
const { addDecorator } = require ("@storybook/react");
const { MemoryRouter } = require( "react-router");

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
}