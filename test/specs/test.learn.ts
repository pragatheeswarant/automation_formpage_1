describe('test learn', () => {
    it('navigate to learn  website', async () => {

         await browser.url('http://localhost/Tolearn/input.html');
         await browser.fullscreenWindow();

         expect(await browser.getUrl()).toEqual('http://localhost/Tolearn/input.html');

    });
    it('Name field valid input validation', async () => {

        await browser.url('http://localhost/Tolearn/input.html');
        await browser.fullscreenWindow();


        const name = await $('//input[@id="name"]');

        await name.setValue('pragatheeswaran');
        await name.waitForDisplayed();

        const value = await name.getValue();
   
        expect(value).toBe('pragatheeswaran');

    });
    it('Name field invalid input validation', async () => {

        await browser.url('http://localhost/Tolearn/input.html');
        await browser.fullscreenWindow();
        const name = await $('//input[@id="name"]');

        await name.setValue('pragathees1234!');
        await name.waitForDisplayed();

        const value = await name.getValue();
   
        expect(value).not.toBe('pragatheeswaran');
}); 
it('DOB field valid input validation', async () => {

    await browser.url('http://localhost/Tolearn/input.html');
    await browser.fullscreenWindow();


    const name = await $('//input[@id="dob"]');

    await name.setValue('12102002');
    await name.waitForDisplayed();

    const value = await name.getValue();

    expect(value).toBe('12102002');

});
it('DOB field invalid input validation', async () => {

    await browser.url('http://localhost/Tolearn/input.html');
    await browser.fullscreenWindow();
    const name = await $('//input[@id="name"]');

    await name.setValue('12102222');
    await name.waitForDisplayed();

    const value = await name.getValue();

    expect(value).not.toBe('12102002');
});
});