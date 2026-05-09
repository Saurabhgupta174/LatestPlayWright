import { expect, test } from "@playwright/test";


test("should login successfully", async ({ page }) => 
{
    await page.goto("https://www.saucedemo.com/");
    await page.pause();
    
});

test("Login Funactinality", async ({ page }) => 
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("##user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.pause();
    
});