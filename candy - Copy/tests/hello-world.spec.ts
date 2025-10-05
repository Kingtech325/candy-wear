import { test, expect } from '@playwright/test';

test('homepage should load successfully', async ({ page }) => {
    await page.goto('http://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
});