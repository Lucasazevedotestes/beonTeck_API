const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    //baseUrl: 'http://www.google.com', 
    baseUrl: 'https://petstore3.swagger.io/api/v3',
    failOnStatusCode: false,
    "chromeWebSecurity": false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



