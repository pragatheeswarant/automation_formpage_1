
describe('test amazon', () => {
    it('navigate to ecommerce website', async () => {

        await browser.url('https://www.google.com/');
        const google = await $('//textarea[@name="q"]');
        await google.waitForDisplayed();

        const a = await browser.getUrl();

        await expect(a).toEqual('https://www.google.com/');


     await  $('//textarea[@name="q"]').setValue(".amazon.com");

     await $('//input[@class="gNO89b"]').click();

     await $('//span[@class="x2VHCd OSrXXb ob9lvb"]').click();

    await $('//input[@class="nav-input nav-progressive-attribute"]').setValue('periyapuranam book');

     await $('//input[@class="nav-input nav-progressive-attribute"]').click();


    });
});









