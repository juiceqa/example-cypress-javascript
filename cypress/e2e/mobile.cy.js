/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

const viewportWidth = 375;
const viewportHeight = 812;
const urls = [
    "https://illuccixhcp.com/",
    "https://illuccixhcp.com/safety/",
    "https://illuccixhcp.com/preparation/",
    "https://illuccixhcp.com/receive-updates/",
    "https://illuccixhcp.com/access-reimbursement/",
    "https://illuccixhcp.com/accessibility/",
    "https://illuccixhcp.com/efficacy/",
    "https://illuccixhcp.com/subscribe"

]

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});
urls.forEach((url) => {

    describe('ACME Bank', () => {
        // This method performs setup before each test.
        beforeEach(() => {
            cy.eyesOpen({
                appName: 'Staging vs Live',
                testName: Cypress.currentTest.title,
                testConcurrency: 5,
                deviceName: 'iPhone X',
                iosVersion: 'latest',
                screenOrientation: 'portrait',
                baselineEnvName: 'mobile',
                saveNewTests: true,
            });
        });

        it(`should capture snapshots for comparison between envs`, () => {
            cy.visit(url);
            cy.viewport(viewportWidth, viewportHeight);
            cy.contains("I am a").click({ force: true });
            cy.get("#indications-tray").invoke('remove');
            //    cy.get(".icon-tabler-x").click({ force: true });
            // Extract the path from the URL
            const urlPath = new URL(url).pathname;

            // Capture a visual snapshot using Applitools with the path as the tag
            cy.eyesCheckWindow({
                tag: 'mobile' + urlPath, // Using the path as a tag for the snapshot
                target: 'window',
                fully: true, // Capture the full page
                //    waitBeforeCapture: 1000,
                matchLevel: 'Strict',
                lazyLoad: {},
                //    polyfillAdoptedStyleSheets: true,
                //    useDom: true,
                stitchMode: CSS,
                //    sendDom: true
            });
            cy.eyesClose();
        });
    });
})