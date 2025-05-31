const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

(async function submitFormTest() {
  const driver = await new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options()).build();

  try {
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

    await driver.findElement(By.name('my-text')).sendKeys('John Doe');
    await driver.findElement(By.name('my-password')).sendKeys('password123');
    await driver.findElement(By.name('my-textarea')).sendKeys('This is a test message.');

    await driver.findElement(By.css('button[type="submit"]')).click();

    const messageElement = await driver.wait(until.elementLocated(By.id('message')), 5000);
    const message = await messageElement.getText();

    if (message.includes('Received!')) {
      console.log('✅ Form submitted successfully and success message received!');
    } else {
      console.log('❌ Unexpected message:', message);
    }

  } catch (err) {
    console.error('❌ Test failed:', err);
  } finally {
    await driver.quit();
  }
})();
