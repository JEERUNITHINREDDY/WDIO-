const { When, Then } = require('@wdio/cucumber-framework');
const { expect, browser, $ } = require('@wdio/globals');
import loginPage from '../pageobjects/login.page';
import logindata from '../data/login.data.json';

When('I am on the login page', async function() {
    await loginPage.open()
    await browser.maximizeWindow()
});

Then('I login with email and password and I should see success or error', async function() {
  for (const data of logindata) {
    await browser.reloadSession();
    await loginPage.open();
    await browser.maximizeWindow();
    await loginPage.login(data.email, data.password);
    await browser.pause(3000);
    if (data.isvalid) {
      await expect($('=Log out')).toBeClickable();
      console.log('#######################################################')
      console.log('Success: Login successful for ' + data.email);
      console.log('#######################################################')
    } else {
      const errormes = await $('.validation-summary-errors').getText();
      await expect($('=Log out')).not.toBeExisting();
      console.log('#######################################################')
      console.log('Error: Login failed for ' + data.email);
      console.log('Error Message: ' + errormes);
      console.log('#######################################################')
    }
  }
});
