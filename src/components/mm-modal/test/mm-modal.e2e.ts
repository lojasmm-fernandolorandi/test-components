import { newE2EPage } from '@stencil/core/testing';

describe('mm-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mm-modal></mm-modal>');

    const element = await page.find('mm-modal');
    expect(element).toHaveClass('hydrated');
  });
});
