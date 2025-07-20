
module.exports = {
  darkMode: "class", // or 'media'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite-react/**/*.js",
    // "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin')
  ],
};
// This configuration enables dark mode support and specifies the content files Tailwind should scan for class names.
// Ensure you have Tailwind CSS installed and configured in your project.
