import { expect, test } from '@playwright/test'

test('home navigation and desktop composition', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Find your line through the landscape.' })).toBeVisible()
  await expect(page.locator('.home-hero .leaflet-container')).toBeVisible()
  await expect(page.getByText('Demonstration only').first()).toBeVisible()
  await page.screenshot({ path: testInfo.outputPath('home-desktop.png'), fullPage: true })
  await page.getByRole('link', { name: 'Explore trails', exact: true }).click()
  await expect(page).toHaveURL(/\/trails$/)
  await expect(page.getByRole('heading', { name: 'Explore sample trails' })).toBeVisible()
})

test('desktop explorer search, filters, clear and no-results state', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('/trails')
  await expect(page.locator('.results-panel')).toBeVisible()
  await expect(page.locator('.map-panel')).toBeVisible()
  await expect(page.getByText('6 trails found')).toBeVisible()

  const search = page.getByRole('searchbox', { name: 'Search trails by name or location' })
  await search.fill('Granite')
  await expect(page.getByText('1 trail found')).toBeVisible()
  await expect(page.getByText('Granite Crown', { exact: true }).first()).toBeVisible()
  await page.getByRole('button', { name: 'Clear filters' }).click()
  await expect(page.getByText('6 trails found')).toBeVisible()

  for (const [difficulty, count] of [['Easy', 2], ['Moderate', 3], ['Hard', 1]] as const) {
    await page.getByRole('button', { name: difficulty, exact: true }).click()
    await expect(page.locator('.trail-card')).toHaveCount(count)
    await page.getByRole('button', { name: 'All', exact: true }).click()
  }

  await search.fill('not-a-trail')
  await expect(page.getByRole('heading', { name: 'No trail marks found' })).toBeVisible()
  await page.getByRole('button', { name: 'Clear every filter' }).click()
  await expect(page.locator('.trail-card')).toHaveCount(6)
  await page.screenshot({ path: testInfo.outputPath('explore-desktop.png'), fullPage: true })
})

test('cards and markers keep selection in sync', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('/trails')

  await page.locator('.leaflet-marker-icon[title="Granite Crown"]').click()
  await expect(page.getByRole('button', { name: 'Selected Granite Crown on map' })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('[data-trail-card="granite-crown"]')).toHaveClass(/trail-card--selected/)

  const fernwoodCardButton = page.getByRole('button', { name: 'Show Fernwood Loop on map' })
  await fernwoodCardButton.click()
  await expect(page.getByRole('button', { name: 'Selected Fernwood Loop on map' })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.leaflet-popup').getByRole('heading', { name: 'Fernwood Loop' })).toBeVisible()
})

test('mobile explorer toggles between list and map', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/trails')
  await expect(page.locator('.results-panel')).toBeVisible()
  await expect(page.locator('.map-panel')).toBeHidden()
  await page.getByRole('button', { name: 'Map', exact: true }).click()
  await expect(page).toHaveURL(/view=map/)
  await expect(page.locator('.map-panel')).toBeVisible()
  await expect(page.locator('.results-panel')).toBeHidden()
  await page.screenshot({ path: testInfo.outputPath('explore-mobile-map.png'), fullPage: true })
  await page.getByRole('button', { name: 'List', exact: true }).click()
  await expect(page.locator('.results-panel')).toBeVisible()
})

test('trail detail navigation and direct loading work', async ({ page }) => {
  await page.goto('/trails')
  await page.locator('[data-trail-card="ravens-ridge"]').getByRole('link', { name: 'View trail notes' }).click()
  await expect(page).toHaveURL(/\/trails\/ravens-ridge$/)
  await expect(page.getByRole('heading', { name: 'Raven’s Ridge', level: 1 })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Suggested equipment' })).toBeVisible()
  await expect(page.locator('.detail-map .leaflet-container')).toBeVisible()

  await page.goto('/trails/fernwood-loop')
  await expect(page.getByRole('heading', { name: 'Fernwood Loop', level: 1 })).toBeVisible()
  await expect(page.getByText('Related sample trails')).toBeVisible()
})

test('keyboard navigation reaches controls and selects a card', async ({ page }) => {
  await page.goto('/trails')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.getByRole('button', { name: 'Show Fernwood Loop on map' }).focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('button', { name: 'Selected Fernwood Loop on map' })).toBeFocused()
})

test('not-found route offers a useful recovery action', async ({ page }) => {
  await page.goto('/missing-map-sheet')
  await expect(page.getByRole('heading', { name: 'This path isn’t marked' })).toBeVisible()
  await page.getByRole('link', { name: 'Return to the trail map' }).click()
  await expect(page).toHaveURL(/\/trails$/)
})
