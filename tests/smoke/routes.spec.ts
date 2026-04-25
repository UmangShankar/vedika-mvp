import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: /research sanatan dharma/i })).toBeVisible();
});

test('/ask-vedika loads', async ({ page }) => {
  await page.goto('/ask-vedika');
  await expect(page.getByRole('heading', { level: 1, name: /ask vedika/i })).toBeVisible();
});

test('/research loads', async ({ page }) => {
  await page.goto('/research');
  await expect(page.getByRole('heading', { level: 1, name: /research library/i })).toBeVisible();
});

test('/itihasa/mahabharata loads', async ({ page }) => {
  await page.goto('/itihasa/mahabharata');
  await expect(page.getByRole('heading', { level: 1, name: /mahābhārata/i })).toBeVisible();
});
