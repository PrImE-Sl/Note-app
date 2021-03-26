
const puppeteer = require('puppeteer')

describe('on page load', () => {
    test('h1 loads correctly', async () => {
        let browser = await puppeteer.launch({})
        let page = await browser.newPage()

        await page.goto('http://localhost:8000/notes/create');
        const html = await page.$eval('.App-title', e => e.innerHTML);
        expect(html).toBe('Create Note');
        browser.close();
    }, 16000)
    test('Notes list loads correctly', async () => {
        let browser = await puppeteer.launch({})
        let page = await browser.newPage()

        await page.goto('http://localhost:8000/notes/list');
        const html = await page.$eval('.Notes-List', e => e.innerHTML);
        expect(html).toBe('Notes List');
        browser.close();
    }, 13000)
})

// describe('input form add note', () => {
//     test(
//         'fills out form and submits',
//         async () => {
//             const nameEl = await page.$('[data-testid="name"]')
//             const noteEl = await page.$('[data-testid="note"]');
//             const submitEl = await page.$('[data-testid="add"]');

//             await nameEl.tap();
//             await page.type('[data-testid="name"]', user.firstName);

//             await noteEl.tap();
//             await page.type('[data-testid="note"]', user.lastName);

//             await submitEl.tap();

//             await page.waitForSelector('[data-testid="success"]');
//         },
//         1600000
//     );
// })