const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress E2E Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // HTML reporter setup
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    baseUrl: "https://www.agoda.com/",
    
    // Video recording configuration
    video: true,
    videoUploadOnPasses: true,
    videoCompression: 32,
    
    // Screenshot configuration
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    
    // Test configuration
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Environment variables
    env: {
      agoda_url: "https://www.agoda.com/",
      youtube_url: "https://www.youtube.com/gaming",
      amazon_url: "https://www.amazon.com/",
      passenger_first_name: "John",
      passenger_last_name: "Doe",
      passenger_email: "john.doe@example.com",
      passenger_phone: "8123456789"
    }
  },
});
