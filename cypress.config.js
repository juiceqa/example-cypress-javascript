const { defineConfig } = require('cypress')

export default defineConfig({
    fixturesFolder: false,
    video: false,
    e2e: {
        chromeWebSecurity: false,
        baseUrl: 'https://illuccixhcp.com/',
        requestTimeout: 3000,
        experimentalInteractiveRunEvents: true,
        experimentalSourceRewriting: true,
        screenshotOnRunFailure: true,
        screenshotsFolder: "cypress/result/screenshots/temp",
        videosFolder: "cypress/result/videos",
        defaultCommandTimeout: 3000,
        waitForAnimations: true,
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {},
    },
})

require('@applitools/eyes-cypress')(module)