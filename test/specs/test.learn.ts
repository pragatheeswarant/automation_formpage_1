

describe('test learn', () => {
    it('Navigate to learn  website', async () => {

        await browser.url('http://localhost/Tolearn/input.html');
        expect(await browser.getUrl()).toEqual('http://localhost/Tolearn/input.html');

    });
    it('Name field valid input validation', async () => {

        await browser.url('http://localhost/Tolearn/input.html');

        const name = await $('//input[@id="name"]');

        await name.setValue('pragatheeswaran');
        await name.waitForDisplayed();

        const value = await name.getValue();

        expect(value).toBe('pragatheeswaran');

    });
    it('Name field invalid input validation', async () => {

        // await browser.url('http://localhost/Tolearn/input.html');

        const name = await $('//input[@id="name"]');

        await name.setValue('pragathees1234!');
        await name.waitForDisplayed();

        const value = await name.getValue();

        expect(value).not.toBe('pragatheeswaran');
    });
    it('DOB field valid input validation', async () => {

        await browser.url('http://localhost/Tolearn/input.html');

        const dob = await $('//input[@id="dob"]');

        await dob.setValue('12102002');
        await dob.waitForDisplayed();

        const value = await dob.getValue();

        expect(value).toBe('2002-10-12');

    });
    it('DOB field invalid input validation', async () => {

        // await browser.url('http://localhost/Tolearn/input.html');

        const dob = await $('//input[@id="dob"]');

        await dob.setValue('12102222');
        await dob.waitForDisplayed();

        const value = await dob.getValue();

        expect(value).not.toBe('12102002');
    });

    it('Degree field valid selection in option ', async () => {

        await browser.url('http://localhost/Tolearn/input.html');


        const drop = await $('//select[@id="degree"]');

        await drop.selectByIndex(1);

        const selected = await drop.getValue();

        expect(selected).toEqual('Under graduate');

    });
    it('Leave the degree field unselected. ', async () => {

        // await browser.url('http://localhost/Tolearn/input.html');

        const drop = await $('//select[@id="degree"]');

        const selected = await drop.getValue();

        expect(selected).toContain('');

    });

    it('Check length of  the option in degree field', async () => {
        await browser.url('http://localhost/Tolearn/input.html');

        const options = await $$('option');
        const expected = ['', 'Bsc/BE', 'Msc/ME', 'No degree'];

        expect(await options.length).toEqual(expected.length);

    });

    it('Address Field Validation', async () => {

        // await browser.url('http://localhost/Tolearn/input.html');

        const Address = await $('//textarea[@id="address"]');

        const seted = '21,abc street,erode';

        await Address.setValue(seted);

        const value = await Address.getValue();

        expect(value).toEqual(seted);
    });
    it('Check the Gender Radio button is clicked and length', async () => {

        // await browser.url('http://localhost/Tolearn/input.html');

        const gender = await $$('//input[@name="gender"]');

        expect(gender.length).toBe(2);

        for (let i = 0; i < await gender.length; i++) {

            const value = await gender[i].getValue();

            if (value === "two") {

                await gender[i].click();

                expect(await gender[i].isSelected()).toBe(true);

            }
        }

    });

    it('Successful Form Submission', async () => {

        // await browser.url('http://localhost/Tolearn/input.html');


        const name = await $('//input[@id="name"]');
        await name.waitForDisplayed();
        await name.setValue('pragatheeswaran');


        const dob = await $('//input[@id="dob"]');
        await dob.waitForDisplayed();
        await dob.setValue('12102002');


        const drop = await $('//select[@id="degree"]');
        await drop.waitForDisplayed();
        await drop.selectByIndex(1);

        const address = await $('//textarea[@id="address"]');
        const seted = '21,abc street,erode';
        await address.waitForDisplayed();
        await address.setValue(seted);


        const gender = await $('//input[@value="male"]');
        await gender.waitForDisplayed();
        await gender.click();

        const save = await $('//button[@id="save"]');
        await save.waitForDisplayed();
        await save.click();


        const tablerow = await $('//tr[@class="getvalue"]');
        await tablerow.waitForDisplayed();

        expect(await tablerow.isDisplayed()).toBe(true);


    });

    // it('To check that every field has validation', async () => {
    //     await browser.url('http://localhost/Tolearn/input.html');
    
    //     const name = await $('//input[@id="name"]');
    //     await name.waitForDisplayed();
    //     await name.setValue('praga'); 
    
    //     const dob = await $('//input[@id="dob"]');
    //     await dob.waitForDisplayed();
    //     await dob.setValue('12102002'); 
    
    //     const degree = await $('//select[@id="degree"]');
    //     await degree.waitForDisplayed();
    //     await degree.selectByIndex(0); 
    
    //     const address = await $('//textarea[@id="address"]');
    //     await address.waitForDisplayed();
    //     await address.setValue(''); 
    
    //     const gender = await $('//input[@name="gender"]');
    //     await gender.waitForDisplayed();
    //     await gender.click(); 
    
    //     const save = await $('//button[@id="save"]');
    //     await save.waitForDisplayed();
    //     await save.click();

 
    //     // Check validation messages
    //     const nameMessage = await name.getAttribute('Please fill out this field');
    //     expect(nameMessage).toBe('Please fill out this field.');
    
    //     const dobMessage = await dob.getAttribute('Please fill out this field');
    //     expect(dobMessage).toBe('Please fill out this field.');
    
    //     const degreeMessage = await degree.getAttribute('Please select an option.');
    //     expect(degreeMessage).toBe('Please select an option.');
    
    //     const addressMessage = await address.getAttribute('Please fill out this field.');
    //     expect(addressMessage).toBe('Please fill out this field.');
    
    //     const genderMessage = await gender.getAttribute('Please select an option.');
    //     expect(genderMessage).toBe('Please select an option.');
    // });

    it('Display the data correctly in the table', async () => { 

        // await browser.url('http://localhost/Tolearn/input.html');

        await $('//input[@id="name"]').setValue('pragatheeswaran');
        await $('//input[@id="dob"]').setValue('12102002');
        await $('//select[@id="degree"]').selectByIndex(1);
        await $('//textarea[@id="address"]').setValue('125,vaikalmedu,chithode');
        await $('//input[@value="male"]').click();
        await $('//button[@id="save"]').click();

        const table = await $$('//tbody[@id="add"]/tr');
        expect(table.length).toBeGreaterThan(0);

        const expectedvalues = ['pragatheeswaran', '2002-10-12','125,vaikalmedu,chithode','22', 'male','Under graduate'];


        const firstrow = await $$('//tbody[@id="add"]/tr[1]/td');
        const cellvalues = [];
    for (let i=0; i < await firstrow.length;i++) 
        {
            await firstrow[i].waitForDisplayed()
        cellvalues[i] = await firstrow[i].getText();
        console.log("cellvalues[i]==",cellvalues[i])
    }

    for (let i = 0; i < expectedvalues.length; i++) {
        // expect('cellvalues[i]').toEqual('expectedvalues[i]');
    }

    });

    it('To check the sorting functionality in each column', async () => { 
        // await browser.url('http://localhost/Tolearn/input.html');
    
        const names = ['pragatheeswaran', 'jeeva', 'jaga', 'diva'];
        const dob = ['12102002', '20121995', '07021997', '18071999'];
        const degree = [1, 2, 2, 1];
        const address = ['chithode', 'erode', 'coimbatore', 'perundurai'];
    
        for (let i = 0; i < names.length; i++) {
            await $('//input[@id="name"]').setValue(names[i]);
            await $('//input[@id="dob"]').setValue(dob[i]);
            await $('//select[@id="degree"]').selectByIndex(degree[i]);
            await $('//textarea[@id="address"]').setValue(address[i]);
            await $('//input[@value="male"]').click();
            await $('//button[@id="save"]').click();
        }
    
    const sorticon = $$('//span[@class="iconarrow"]');

    for ( let i=0;i< await sorticon.length;i++){

        expect(await sorticon[i].isClickable()).toBe(true);
    }
     
    const columns = ['Name', 'Date of Birth','Address','Age','Gender','Degree'];

for (let i=0;i< await sorticon.length;i++){    
    await sorticon[i].click();

    let sortValues = await $$(`//tbody[@id="add"]//tr/td[${i + 1}]`);
        let values = [];

        for(let j=0;j< await sortValues.length;j++){

            values[j]= await sortValues[j].getText();

        }

    let ascvalues = [...values].sort();
    expect(values).toEqual(ascvalues);

    await sorticon[i].click();

    let sortValues1 = await $$(`//tbody[@id="add"]//tr/td[${i + 1}]`);
        let values1 = [];

        for(let j=0;j< await sortValues1.length;j++){

            values1[j]= await sortValues1[j].getText();

        }

    let desvalues = [...values1].sort().reverse();
    expect(values1).toEqual(desvalues);


}

    
      
});

   
});
