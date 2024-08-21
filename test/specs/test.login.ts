describe('login page', () => {
  it('check the login inputs', async () => {
      
      await browser.url('https://www.saucedemo.com/');

      const name = $('//input [@id="user-name"]');

     await  name.setValue('standard_user');
     await name.waitForDisplayed();

      const pass = $ ('//input [@id="password"]');
     await  pass.setValue('secret_sauce');
      
      const clicked = $('//input [@id="login-button"]');
      await clicked.click();
 
  });
});
