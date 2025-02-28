import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'
import { PenguinLandingPage } from '../pages/penguin-page';

let penguinLandingPage: PenguinLandingPage;
let baseUrl= 'https://www.antarctica.gov.au'
test.describe('Penguin Landing Page', () => {

test('User should be able to land on the correct page', async ({ page }) => {
penguinLandingPage = new PenguinLandingPage(page);
let aiArgs = { page, test }
await page.goto('https://www.antarctica.gov.au/about-antarctica/animals/penguins/');
await ai('the url endpoint is penguins',aiArgs);
await ai('the title is PENGUINS',aiArgs);
await ai('there is a link to Adélie penguin',aiArgs);
await penguinLandingPage.penguinLink('Adélie penguin').click();
await ai('the url endpoint is adelie-penguin',aiArgs);
await ai('the title is Adélie penguin in caps',aiArgs);
})
})
