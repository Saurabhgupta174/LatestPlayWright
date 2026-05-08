import { expect, test } from "@playwright/test";


test("should login successfully", async ({ page }) => 
{
    await page.goto("https://www.saucedemo.com/");
    await page.pause();
    
});