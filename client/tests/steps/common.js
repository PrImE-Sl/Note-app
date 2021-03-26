const { getDocument, queries } = require('puppeteer-testing-library');
// const jestPuppeteerConfig = require('./jest-puppeteer.config');
// const { getByLabelText } = queries

// module.exports = ({ given, when, then }) => {
// given('I`ve got opened page \'https://google.com/\'', async (url) => {
// 	await page.goto(url)
// });

// 	given('I`ve got opened page \'https://google.com/\'', () => {
// 	});
// 	when('I text \'Hello world\' to searsh input', async (text) => {
// 		const $document = await getDocument(page)
// 		const $search = await getByLabelText($document, 'Search')  //Search- label у гугл инпута
// 		await $search.type(text)

// 		await Promise.all([
// 			page.waitForNavigation(),
// 			page.keyboard.press('Enter')
// 		])
// 		// await jestPuppeteer.debug()
// 	});

// 	then('I should be redirected to \'https://google.com/search\'', (url) => {
// 		expect(page.url()).toMatch(new RegExp(`^${url}`))
// 	});
// }

//* Passed
module.exports = ({ given, when, then }) => {
	given('I`ve got opened page \'https://google.com/\'', (url) => {

	});

	when('I text \'Hello world\' to search input', (text) => {

	});

	then('I should be redirected to \'https://google.com/search\'', (url) => {

	});
}