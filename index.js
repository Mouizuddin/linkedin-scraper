const { default: puppeteer } = require("puppeteer");

const assignment = async (role, country) => {

    const browser = await puppeteer.launch({ headless: false, devtools: true });
    const page = await browser.newPage()

    await page.goto('https://www.linkedin.com/login/')
    await page.type('#username', 'muhammaddev644@gmail.com', { delay: 150 })
    await page.type('#password', 'linked@007', { delay: 150 })
    await page.click('.btn__primary--large.from__button--floating')
    
    // console.log(companyawait page.waitForSelector('.search-global-typeahead__input')
    await page.click('#global-nav-search')
    await page.type('.search-global-typeahead__input', role, { delay: 150 })
    await page.keyboard.press('Enter');

    await page.waitForSelector('li.search-reusables__primary-filter')
    // document.querySelectorAll('li.search-reusables__primary-filter')[4]  
    // const jobTab_1 = await page.$eval('li.search-reusables__primary-filter', toClick => toClick.querySelector('button').innerHTML)
    const jobTab = await page.$eval('li.search-reusables__primary-filter', toClick => toClick.querySelector('button').outerHTML)
    console.log(jobTab)
    await page.click(jobTab)
    await page.type('#jobs-search-box-location-id-ember30',country)

/* CODE IS BREAKING BECAUSE OF CAPTCHA */

    // //await browser.close()
    // const companyName = await page.$eval('span.job-card-container__primary-description', 
    //     getText => getText.textContent()
    // ) >>sucess

}
assignment ('System Administrator', 'India')
assignment('System Administrator', 'United States')

/*
Pending work
 -try catch
 -code to run fast
 -save as json/csv
*/