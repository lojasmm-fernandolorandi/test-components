import { newSpecPage } from '@stencil/core/testing';
import { MmButton } from '../mm-button';

describe('mm-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MmButton],
      html: `<mm-button></mm-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mm-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mm-button>
    `);
  });
});
