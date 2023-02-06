const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    //  reporter: "nyan",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      
    },
  },
});

// {
//   "defaultCommandTimeout": 4000
// }