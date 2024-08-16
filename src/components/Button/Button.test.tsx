import { render, userEvent } from '@/tests/customRender';

import Button from './Button';
import styles from './Button.styles';

const handleClickMock = jest.fn();

describe('Button component', () => {
    it('should render the button', () => {
        const { getByText } = render(<Button>Click Me</Button>);
        const buttonElement = getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should handle click events', async () => {
        const { getByText } = render(
            <Button onClick={handleClickMock}>Click Me</Button>
        );
        const buttonElement = getByText(/Click Me/i);
        await userEvent.click(buttonElement);
        expect(handleClickMock).toHaveBeenCalledTimes(1);
    });

    it('should apply primary variant styles correctly', () => {
        const { getByText } = render(<Button>Click Me</Button>);
        const buttonElement = getByText(/click me/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(styles['primary']);
    });

    it('should apply secondary variant styles correctly', () => {
        const { getByText } = render(
            <Button variant="secondary">Click Me</Button>
        );
        const buttonElement = getByText(/click me/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(styles['secondary']);
    });

    it('should render a disabled button when the disabled prop is set', () => {
        const { getByText } = render(<Button disabled>Click Me</Button>);
        const buttonElement = getByText(/Click Me/i);
        expect(buttonElement).toBeDisabled();
    });

    it('should apply the id prop correctly', () => {
        const { getByText } = render(
            <Button id="test-button" onClick={handleClickMock}>
                Click Me
            </Button>
        );
        const buttonElement = getByText(/Click Me/i);
        expect(buttonElement).toHaveAttribute('id', 'test-button');
    });

    it('should apply the aria-label prop correctly', () => {
        const { getByLabelText } = render(
            <Button aria-label="custom-label">Click Me</Button>
        );
        const buttonElement = getByLabelText(/custom-label/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should apply the type prop correctly', () => {
        const { getByText } = render(<Button type="submit">Click Me</Button>);
        const buttonElement = getByText(/Click Me/i);
        expect(buttonElement).toHaveAttribute('type', 'submit');
    });

    it('should not apply a type attribute if it is undefined', () => {
        const { getByText } = render(<Button>Click Me</Button>);
        const buttonElement = getByText(/Click Me/i);
        expect(buttonElement).not.toHaveAttribute('type');
    });
});
