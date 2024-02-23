import { newE2EPage } from '@stencil/core/testing';

describe('mm-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mm-button></mm-button>');

    const element = await page.find('mm-button');
    expect(element).toHaveClass('hydrated');
  });
});
