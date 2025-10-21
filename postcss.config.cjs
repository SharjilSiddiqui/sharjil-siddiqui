// postcss.config.js
module.exports = {
  plugins: {
    // ⚠️ CHANGE THIS LINE: 
    // Use the new package name from your dependencies
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};