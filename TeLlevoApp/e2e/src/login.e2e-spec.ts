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
            //hacer click en ¿Olvidaste tu contraseña?
            await element(by.id('btnRestablecerLogin')).click();
            await browser.driver.sleep(500);
            //rellenar input 
            await element(by.id('resetUser')).sendKeys('usuariotest');
            await browser.driver.sleep(500);
            //click en restablecer
            await element(by.id('btnRestablecer')).click();
            await browser.driver.sleep(2500);
            // la clase .feliz solo se creará cuando el usuario sea válido
            const x = await element(by.css('.feliz'));
            expect(await x.isPresent())
        });
        it('Existe botón ingresar?', async() => {
          await browser.driver.sleep(500);
          await browser.waitForAngularEnabled(false);
          await browser.driver.sleep(500);
          const x = await element(by.id('btnIngresarLogin'));
              expect(await x.isPresent())
        });
        it('Existe botón crear cuenta?', async() => {
          await browser.driver.sleep(500);
          await browser.waitForAngularEnabled(false);
          await browser.driver.sleep(500);
          const x = await element(by.id('btnCrearCuentaLogin'));
              expect(await x.isPresent())
        });
        it('Existe botón restablecer?', async() => {
          await browser.driver.sleep(500);
          await browser.waitForAngularEnabled(false);
          await browser.driver.sleep(500);
          const x = await element(by.id('btnRestablecerLogin'));
              expect(await x.isPresent())
        });
        it('Existe campo de nombre de usuario?', async() => {
          await browser.driver.sleep(500);
          await browser.waitForAngularEnabled(false);
          await browser.driver.sleep(500);
          const x = await element(by.id('inUsernameLogin'));
              expect(await x.isPresent())
        });
        it('Existe campo de contraseña?', async() => {
          await browser.driver.sleep(500);
          await browser.waitForAngularEnabled(false);
          await browser.driver.sleep(500);
          const x = await element(by.id('inPasswordLogin'));
              expect(await x.isPresent())
        });
    });
    