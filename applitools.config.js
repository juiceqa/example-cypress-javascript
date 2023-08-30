module.exports = {
    testConcurrency: 5,
    apiKey: 'q5K100101MEwl2OzhaH5vIzhqXv14KjUtCNosY101HVEDgRHQ1100',
    browser: [
        // Desktop
        { width: 1440, height: 900, name: 'chrome' },
        { width: 1440, height: 900, name: 'safari' },
        // Mobile
        { deviceName: 'iPhone X', screenOrientation: 'portrait' },
        { deviceName: 'Pixel 2', screenOrientation: 'portrait' },
        { deviceName: 'Galaxy S5', screenOrientation: 'portrait' },
        { deviceName: 'Nexus 10', screenOrientation: 'portrait' },
        { deviceName: 'iPad Pro', screenOrientation: 'landscape' },
    ],
    batchName: 'IlluccixHCP Cross-ENV Testing'
}