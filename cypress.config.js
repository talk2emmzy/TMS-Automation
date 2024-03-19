const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nnrrzu",
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://qa.fgntreasury.gov.ng",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
