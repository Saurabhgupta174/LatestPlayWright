import{test,expect} from '@playwright/test'


test ("Invaild Email ID & click on the Login Button", async ({page})=>

{    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("test@yopmail.com");
    await page.locator("#login").click();
    let errorMessgae= await page.locator("[class='invalid-feedback'] div").textContent();
    console.log(errorMessgae);
    await expect(errorMessgae).toBe("*Password is required");
    //await page.pause();
    

});

test ("Enter Invaild Password & click on the Login Button", async ({page})=>
{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userPassword").fill("test123");
    await page.locator("#login").click();
    let errorMessaga= await page.locator("[class='invalid-feedback'] div").textContent();
    console.log(errorMessaga);
    await expect(errorMessaga).toBe("*Email is required");
    //await page.pause();
});

test ("Login Funactinality", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("Test@yopmail.com");
    await page.locator("#userPassword").fill("test123");        
    await page.locator("#login").click();
    await page.locator("[class*='toast-message']").waitFor();
    let errorMessaga= await page.locator("[class*='toast-message']").textContent();   
    console.log(errorMessaga);
    await expect(errorMessaga.trim()).toBe("Incorrect email or password.");
    await page.pause();
});

test.only ("Login Funactinality with valid credentials", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("saurabh.gupta92@gmail.com");
    await page.locator("#userPassword").fill("Moto@123456");
    await page.locator("#login").click();
    await expect(page.locator("#sidebar b")).toBeVisible();
    let dashboardScreen= await page.locator("#sidebar b").textContent();
    console.log(dashboardScreen);
    await expect(dashboardScreen).toBe("Search");
    await page.pause();

});
