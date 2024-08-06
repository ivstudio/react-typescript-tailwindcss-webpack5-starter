import { render, screen, userEvent } from '@/tests/customRender';
import Button from './Button';

describe('Button component', () => {
    it('renders correctly with children', () => {
        render(<Button>Click Me</Button>);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('handles click events', async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByText(/Click Me/i);
        await userEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
