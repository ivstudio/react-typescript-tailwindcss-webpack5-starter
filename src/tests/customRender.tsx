import { render } from '@testing-library/react';
import { ReactElement } from 'react';
export * from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const customRender = (ui: ReactElement, options = {}) => {
    return render(ui, { ...options });
};

export { customRender as render, userEvent };
