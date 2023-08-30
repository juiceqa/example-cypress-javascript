/// <reference types="cypress" />

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

describe('ACME Bank', () => {
    // This method performs setup before each test.
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: Cypress.currentTest.title,
            browser: { width: viewportWidth, height: viewportHeight, name: chrome },
            baselineEnvName: 'desktop'
        });
    });

    urls.forEach((url) => {
        it(`should capture snapshots for comparison between envs on ${url}`, () => {
            cy.visit(url);
            cy.contains("I am a").click({ force: true });
            cy.get("#indications-tray").invoke('remove');
            //   cy.get(".icon-tabler-x").click({ force: true });
            cy.viewport(viewportWidth, viewportHeight);

            // Extract the path from the URL
            const urlPath = new URL(url).pathname;

            // Capture a visual snapshot using Applitools with the path as the tag
            cy.eyesCheckWindow({
                tag: urlPath, // Using the path as a tag for the snapshot
                fully: true, // Capture the full page
            });
        });
    });

    // This method performs cleanup after each test.
    afterEach(() => {
        cy.eyesClose();
    });
});