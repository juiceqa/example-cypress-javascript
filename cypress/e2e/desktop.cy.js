/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

const viewportWidth = 1440;
const viewportHeight = 900;
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
            appName: 'Staging vs Live',
            testName: Cypress.currentTest.title,
            testConcurrency: 2,
            browser: { width: viewportWidth, height: viewportHeight, name: chrome },
            baselineEnvName: 'desktop',
            saveNewTests: true,
            waitBeforeCapture: 1000
        });
    });

    // This method performs cleanup after each test.
    afterEach(() => {
        cy.eyesClose();
    });
});

urls.forEach((url) => {
    it(`should capture snapshots for comparison between envs on ${url}`, () => {
        cy.visit(url);
        cy.viewport(viewportWidth, viewportHeight);
        cy.contains("I am a").click({ force: true });
        cy.get("#indications-tray").invoke('remove');
        //    cy.get(".icon-tabler-x").click({ force: true });

        // Extract the path from the URL
        const urlPath = new URL(url).pathname;

        // Capture a visual snapshot using Applitools with the path as the tag
        cy.eyesCheckWindow({
            tag: 'desktop' + urlPath, // Using the path as a tag for the snapshot
            target: 'window',
            hideScrollbar: true,
            fully: true, // Capture the full page
            waitBeforeCapture: 1000,
            matchLevel: 'Strict',
            lazyLoad: {},
            polyfillAdoptedStyleSheets: true,
            useDom: true,
            stitchMode: CSS,
            sendDom: true

        });
    });
});