import { render } from '@testing-library/react';

import VoodooUi from './voodoo-ui';

describe('VoodooUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VoodooUi />);
    expect(baseElement).toBeTruthy();
  });
});
