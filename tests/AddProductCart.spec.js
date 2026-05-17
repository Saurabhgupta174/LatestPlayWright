import{test,expect} from '@playwright/test'

test("Add Product into Cart", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("saurabh.gupta92@gmail.com");
    await page.locator("#userPassword").fill("Moto@123456");
    await page.locator("#login").click();
    
    await expect(page.locator("#sidebar b")).toBeVisible();
    let dashboardScreen= await page.locator("#sidebar b").textContent();
    //console.log(dashboardScreen);
    await expect(dashboardScreen).toBe("Search");
    let productCount= page.locator(".card-body");
    let productListCount= await productCount.count();
    console.log(productListCount);
    let allProductNames= await page.locator("[class='card-body'] b").allTextContents();
    console.log(allProductNames);
    

    for(let i=0; i<productListCount; i++)
    {
        let productName= await page.locator("[class='card-body'] b").nth(i).textContent();
    
        if (productName.trim()=="ZARA COAT 3")
        {
            await page.locator("[class*='w-10']").nth(i).click();
            break;
        }
    }

    // click on the CART Page



    // assesertion on the Cart Page
    let toastMessage= await page.locator("[class*='toast-message']").textContent();
    // Print the toast message to the console
    console.log(toastMessage);

    // Assert that the toast message is "Product Added To Cart"
    await expect(toastMessage.trim()).toBe("Product Added To Cart");

    // Click on the Cart Page
    await page.locator("[routerlink*='cart']").click();

    await expect(page.locator("[class='heading cf'] h1")).toBeVisible();

    // Click on the continue button     

    await page.locator("[class='heading cf'] button").click();

    await page.goBack();

    let addedProductOnCart = await page.locator("[class='cartSection'] h3").textContent();

    await expect(addedProductOnCart.trim()).toBe("ZARA COAT 3");

    await page.locator("[class='cartSection removeWrap'] button").first().click();

    let selectMonth= await page.locator("[class='input ddl']").first();
    await selectMonth.selectOption("08");

    let seelctYear= await page.locator("[class='input ddl']").last();
    await seelctYear.selectOption("26");


    await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:100});

    await page.waitForSelector("[class='ta-item list-group-item ng-star-inserted'] span");
    let countyList = await page.locator("[class='ta-item list-group-item ng-star-inserted'] span").allTextContents();
    console.log(countyList);
   
    for (let i=0; i<countyList.length; i++ )
    {
        if (countyList[i].trim() === "India")
        {
            await page.locator("[class='ta-item list-group-item ng-star-inserted'] span").nth(i).click();
            break;
        }
    }

    await page.locator("[class*='action__submit']").click();
    

    //get text on Order History Page

    let orderHistoryText= await page.locator("[class='hero-primary']").textContent();
    console.log(orderHistoryText);
    await expect(orderHistoryText.trim()).toBe("Thankyou for the order.");

    let findOrderNumber = await page.locator("[class*='em-spacer-1'] label").last().textContent();
    
    console.log("Order Number Deatils : " + findOrderNumber);
    let orderNumber = findOrderNumber.split("|")[1].trim();
    
    console.log("Order Number : " + orderNumber);

    // Click on router link

    await page.locator("[routerlink='/dashboard/myorders']").first().click();

    await page.waitForSelector("tr.ng-star-inserted th");
    let allOrderNumber= await page.locator("tr.ng-star-inserted th").allTextContents();
    console.log(allOrderNumber);
    
    for (let i=0; i<allOrderNumber.length; i++) 
    {
        if (allOrderNumber[i].trim() === orderNumber)
        {
            await page.locator("[class*='btn btn-primary']").nth(i).click();
            break;
        }
    }
    await page.pause();
    



    //option list 
    });