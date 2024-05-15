// Import the Preview type from '@storybook/react'
/** @type { import('@storybook/react').Preview } */

// Define the preview configuration
const preview = {
  parameters: {
    controls: {
      matchers: {
        // Define a regex matcher for color controls
        // This will match any control that ends with 'background' or 'color' (case insensitive)
        color: /(background|color)$/i,
        // Define a regex matcher for date controls
        // This will match any control that ends with 'Date' (case insensitive)
        date: /Date$/i,
      },
    },
  },
};

// Export the preview configuration as the default export
export default preview;
