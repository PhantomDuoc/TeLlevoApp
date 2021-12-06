import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Entrada a Home', async () => {
    await browser.driver.sleep(500);
    await browser.waitForAngularEnabled(false);
    await browser.driver.sleep(500);
    await browser.get('/home');
    await browser.driver.sleep(500);
    const x = await element(by.id('homeTitle'));
    expect(await x.isPresent());
  });
  /* it('Entrada a Home y cambio vista', async () => {
    await browser.driver.sleep(500);
    await browser.waitForAngularEnabled(false);
    await browser.driver.sleep(500);
    await browser.get('/home');
    await browser.driver.sleep(500);
    await element(by.css('.nuevoViaje')).click();
    await browser.driver.sleep(500);
    const x = await element(by.id('tituloViajes'));
    expect(await x.isPresent());
  }); */
  
});
