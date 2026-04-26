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

test('/texts/ramayana loads', async ({ page }) => {
  await page.goto('/texts/ramayana');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Rāmāyaṇa');
});

test('/puranas loads with all 18', async ({ page }) => {
  await page.goto('/puranas')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Mahāpurāṇas')
  await expect(page.getByText('Bhāgavata Purāṇa')).toBeVisible()
  await expect(page.getByText('Liṅga Purāṇa')).toBeVisible()
  await expect(page.getByText('Mārkaṇḍeya Purāṇa')).toBeVisible()
})

test('/puranas filter works', async ({ page }) => {
  await page.goto('/puranas')
  await page.getByRole('button', { name: /Tamas/i }).click()
  await expect(page.getByText('Skanda Purāṇa')).toBeVisible()
  await expect(page.getByText('Bhāgavata Purāṇa')).not.toBeVisible()
})

test('/puranas/bhagavata deep dive loads', async ({ page }) => {
  await page.goto('/puranas/bhagavata')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Bhāgavata')
  await expect(page.getByText('Svayam Bhagavān')).toBeVisible()
  await expect(page.getByText('Theological culmination')).toBeVisible()
  await expect(page.getByText('Acintya-bhedābheda')).toBeVisible()
})

test('/puranas/unknown slug shows coming-soon', async ({ page }) => {
  await page.goto('/puranas/shiva')
  await expect(page.getByText('Deep dive coming soon')).toBeVisible()
})

test('/darshanas index loads', async ({ page }) => {
  await page.goto('/darshanas')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Ṣaḍ Darśanas')
  await expect(page.getByText('Nyāya · Vaiśeṣika')).toBeVisible()
})

test('/darshanas/nyaya deep dive loads', async ({ page }) => {
  await page.goto('/darshanas/nyaya')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Nyāya')
  await expect(page.getByText('Hetvābhāsa')).toBeVisible()
})

test('/darshanas/matrix loads', async ({ page }) => {
  await page.goto('/darshanas/matrix')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Comparison Matrix')
  await expect(page.getByText('Ultimate reality')).toBeVisible()
})
