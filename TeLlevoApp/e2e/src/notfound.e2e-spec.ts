import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

    describe('new App', () => {
      let page: AppPage;

      
    
      beforeEach(() => {
        page = new AppPage();
      });
    
      it('Llegada a 404 Not Found', async () => {
            await browser.driver.sleep(500);
            await browser.waitForAngularEnabled(false);
            await browser.driver.sleep(500);
            await browser.get('/test');
            await browser.driver.sleep(500);
            const x = await element(by.id('404title'));
            expect(await x.isPresent())
        });

        
    });
    