declare global {
    const browser: WebdriverIO.Browser;
    const $: WebdriverIO.Browser['$'];
    const $$: WebdriverIO.Browser['$$'];
    const expect: WebdriverIO.Matchers<any, any>;
}

export {};
