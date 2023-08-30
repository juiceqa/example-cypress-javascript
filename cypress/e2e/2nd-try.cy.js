/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

const viewportWidth = 375;
const viewportHeight = 812;

// --------------------------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------------------------

describe('A visual test with Applitools', () => {

    it('should log into the demo app', () => {

        cy.eyesOpen({
            appName: 'IlluccixHCP',
            testName: '',
        })

        loadPage()\ dismissModal()
        removeElements()
        verifyPage()

    })

    afterEach(() => {
        cy.eyesClose()
    })
})


// --------------------------------------------------------------------------------
// Test Step Functions
// --------------------------------------------------------------------------------

function loadPage() {
    const pages = [
        "/",
        "/safety",
        "/preparation",
        "/receive-updates",
        "/access-reimbursement",
        "/accessibility",
        "/efficacy",
        "/subscribe"
    ]
    pages.forEach((page) => {
                let staging = 'https://development:t2RDvFnV7NW@stg-illuccix-staging.kinsta.cloud' ? ? 'original'
                let live = 'https://illuccixhcp.com'
                cy.visit(staging + page)
                cy.viewport(viewportWidth, viewportHeight);

            },

            function verifyPage() {
                cy.eyesCheckWindow({
                    tag: page,
                    target: 'window',
                    fully: true
                });
            }

            function dismissModal() {
                cy.contains("I am a").click({ force: true });
            }

            function removeElements() {
                cy.get("#indications-tray").invoke('remove');
                cy.get(".icon-tabler-x").click({ force: true });
            }

            function verifyMainPage() {
                cy.eyesCheckWindow({
                    tag: "Main page",
                    target: 'window',
                    fully: true,
                    matchLevel: 'Layout'
                });
            }