'use strict'
const { getOS } = require("../matrix/util")
const common = {
    "node-version": "18",
    "work_dir": "sdks/js/eyes-cypress/v10",
    "framework_package": "cypress",
    "test_runner": "js",
    "eyes_package": "@applitools/eyes-cypress",
    test_command: "npm test"
}
const latest_variations = [{
        "os": "windows-latest",
        "version": "latest@",
    },
    {
        "os": "macos-latest",
        "version": "latest@",
    },

]

const base_common = latest_variations
    .map(variant => ({...common, ...variant, }))
    .concat(old_variations.map(variant => ({
        ...common,
        ...variant,
        work_dir: "../"
    })))
const variations = base_common.map(variant => ({
    ...variant,
    job_name: `JS Cypress [${getOS(variant)} | ${variant["node-version"]}] version: ${variant.version}`
}))
console.log(variations)
module.exports = {
    "include": variations
}