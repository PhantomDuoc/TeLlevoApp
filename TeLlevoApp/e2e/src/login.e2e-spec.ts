import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

    describe('new App', () => {
      let page: AppPage;

      
    
      beforeEach(() => {
        page = new AppPage();
      });
    
      it('Restablecer contraseña', async () => {
            await browser.driver.sleep(500);
            await browser.waitForAngularEnabled(false);
            await browser.driver.sleep(500);
            await element(by.id('btnRestablecerLogin')).click();
            await browser.driver.sleep(500);
            await element(by.id('resetUser')).sendKeys('usuariotest');
            await browser.driver.sleep(500);
            await element(by.id('btnRestablecer')).click();
            await browser.driver.sleep(2500);
            /* await browser.switchTo().alert().accept(); */
            const x = await element(by.css('.feliz'));
            expect(await x.isPresent())
        });
    });
    