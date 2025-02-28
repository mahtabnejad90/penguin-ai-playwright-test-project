import { Page,Locator } from "@playwright/test";

export class PenguinLandingPage {
    readonly page: Page;
    readonly penguinHeader: Locator;
    readonly penguinLink: (itemTitle: string) => Locator;

    constructor(page: Page) {
        this.page = page;
        this.penguinHeader = page.getByRole('heading', { name: 'PENGUINS' });
        this.penguinLink = (itemTitle: string) => {
            return page.locator('a.hover-nav-item', { hasText: itemTitle });
        }
    }
}