import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'


test.describe('Penguin Landing Page', () => {

test('User should be able to land on the correct title', async ({ page }) => {

let aiArgs = { page, test }
await page.goto('https://www.antarctica.gov.au/about-antarctica/animals/penguins/');
await ai('the url endpoint is penguins',aiArgs);
await ai('the title is PENGUINS',aiArgs);
await ai('there is a link to Adélie penguin',aiArgs);
})

})