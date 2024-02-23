import { newSpecPage } from '@stencil/core/testing';
import { MmModal } from '../mm-modal';

describe('mm-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MmModal],
      html: `<mm-modal></mm-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <mm-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mm-modal>
    `);
  });
});
