// Import the StorybookConfig type from '@storybook/react-vite'
/** @type { import('@storybook/react-vite').StorybookConfig } */

// Define the Storybook configuration
const config = {
  // Specify the paths to the story files
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // Specify the addons to be used
  addons: [
    "@storybook/addon-links", // Addon for linking between stories
    "@storybook/addon-essentials", // Essential addons for a better development experience
    "@chromatic-com/storybook", // Addon for visual testing of Storybook components
    "@storybook/addon-interactions", // Addon for defining component interactions
  ],
  // Specify the framework to be used
  framework: {
    name: "@storybook/react-vite", // Use the '@storybook/react-vite' framework
    options: {}, // No additional options are specified
  },
  // Specify the documentation configuration
  docs: {
    autodocs: "tag", // Generate documentation automatically based on JSDoc comments
  },
};

// Export the configuration as the default export
export default config;
