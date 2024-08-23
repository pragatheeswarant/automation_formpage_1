describe('test google', () => {
    it('check the search and auto suggestion on google.com', async () => {

        // open the google.com and expect the actual value
        await browser.url('https://www.google.com/');

        //set the value on search box 
        const search = await $('//textarea[@class="gLFyf"]');
        await search.setValue('coretopia');

        //clicked the google search submit button
        await $('//input[@name="btnK"]').click();



        //clicked the textarea on loading page for check the  auto suggestion
        await $('//textarea[@class="gLFyf"]').waitForDisplayed();
        await $('//textarea[text()="coretopia"]').click();




        const suggest = await $$('//ul[@role="listbox"]//li//div[@role="option"]');


        for (let i = 0; i < (await suggest.length); i++) {
            if (i === 1) {
                await suggest[i].click();
                break;
            }
        }




    });
    it('  to check  the incorrect the url  with actual url ', async () => {


        await browser.url('https://www.google.com/');
        const actual = await browser.getUrl();
        await expect(actual).not.toBe('https://www.goole.com/');

    });

    it(' check the given input will be displayed', async () => {

        await browser.url('https://www.google.com/');

        const search = await $('//textarea[@class="gLFyf"]');
        await search.setValue('saravanampatti');

        await browser.keys(['Enter']);



        let input = await $('//h3[@class="LC20lb MBeuO DKV0Md"]');
        const display = await input.isDisplayed();
        await expect(display).toBe(true);

    });

    it('Verify the search  with invalid value', async () => {

        await browser.url('https://www.google.com/');

        const search = await $('//textarea[@class="gLFyf"]');
        await search.setValue('-2020');

        await browser.keys(['Enter']);

        const message = await $('//p');



        const messagetext = await message.getText();
        expect(messagetext).toContain('Your search - -2020 - did not match any documents.');
    });


    it('to verify the max length of search keyword', async () => {


        await browser.url('https://www.google.com/');

        const search = await $('//textarea[@class="gLFyf"]');
        await search.setValue('Johny, Johny. Yes, Papa?Eating sugar?No, Papa.Telling lies?No, Papa.Open your mouth.Ha-ha-ha.');

        await browser.keys(['Enter']);

        const out = await $('//div[@class="PZPZlf ssJ7i xgAzOe"]');
        await out.waitForDisplayed();

        expect(await out.isDisplayed()).toBe(true);

        const output = await out.getText();

        expect(output).toEqual('Johny Johny Yes Papa Nursery Rhyme');

    });



    it('verify the current location according to country name ', async () => {


        await browser.url('https://www.google.com/');

        const location = await $('//div[@class="uU7dJb"]');
        await location.waitForDisplayed();

        const currentlocation = await location.getText();


        const expectedlocation = 'India';

        expect(expectedlocation).toBe(currentlocation);
    });

    it('verify that auto suggestion do not appear for invalid inputs', async () => {

        await browser.url('https://www.google.com/');

        const search = await $('//textarea[@class="gLFyf"]');
        await search.setValue('!@$#@!');

        await browser.keys(['Enter']);

        await $('//textarea[@class="gLFyf"]').waitForDisplayed();
        (await $('//textarea[@class="gLFyf"]')).click();

        const suggestions = await $$('//ul[@class="erkvQe"]');


        expect(suggestions.length).toBe(0);


    });

    it('to check the hyperlink of the  gmail ', async () => {

        await browser.url('https://www.google.com/');

        await $('//a[@class="gb_y"]').click();

        const currenturl = await browser.getUrl();

        expect(currenturl).toEqual('https://www.google.com/intl/en-US/gmail/about/');


    });

    it('to check the hyperlink of the  google image ', async () => {

        await browser.url('https://www.google.com/');

        const img = $('//a[@data-pid="2"]');
        await img.click();

        const currenturl = await browser.getUrl();


        expect(currenturl).toEqual('https://www.google.com/imghp?hl=en&ogbl');


    });

    it("should check all the hyperlinks on the Google page", async () => {
        await browser.url('https://www.google.com/');

        const hyperlinks = ["About", "Store", "Advertising", "Business", "How Search works", "Privacy", "Terms"];
        const urls = [
            "https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header",
            "https://store.google.com/IN/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-GB",
            "https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1",
            "https://www.google.com/intl/en_in/business/",
            "https://www.google.com/search/howsearchworks/?fg=1",
            "https://policies.google.com/privacy?hl=en-IN&fg=1",
            "https://policies.google.com/terms?hl=en-IN&fg=1"
        ];

        for (let i = 0; i < hyperlinks.length; i++) {
            const links = hyperlinks[i];
            const link = await $(`=${links}`)
            await link.click();
            const pageUrl = await browser.getUrl();
            expect(pageUrl).toEqual(urls[i]);

            await browser.back();
        }
    });

    it('to check the hyperlink of google settings ', async () => {

        await browser.url('https://www.google.com/')

        const sett = await $('//div[@class="ayzqOc pHiOh"]');
        await sett.click();

        const settings = ["Search settings", "Advanced search", "Your data in Search", "Search history", "Search help"];

        for (let j = 0; j < settings.length; j++) {

            const set = settings[j];
            const linked = await $(`=${set}`);
            await linked.waitForDisplayed();
            await linked.waitForClickable();
            expect(await linked.isClickable()).toBe(true);
            await linked.click();
            await browser.back();
            await sett.waitForDisplayed();
        }
    });


});
















