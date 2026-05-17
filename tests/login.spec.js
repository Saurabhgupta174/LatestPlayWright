import { expect, test } from "@playwright/test";


test("should login successfully", async ({ page }) => 
{
    await page.goto("https://www.saucedemo.com/");
    await page.pause();
    console.log(await page.title());
    
});

test.only("Login Funactinality", async ({ page }) => 
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    console.log(await page.title());
    await expect(page).toHaveTitle("Swag Labs");
    await page.locator("[class=app_logo]").waitFor();
    let pageTitle=await page.locator("[class=app_logo]").textContent();
    console.log(pageTitle);
    expect(pageTitle).toBe("Swag Labs");    
   // await page.pause();
    
});