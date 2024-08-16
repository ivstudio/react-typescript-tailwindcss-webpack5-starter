import React from 'react';

import styles from './Button.styles';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: Variant;
}

const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => (
    <button className={styles[variant]} {...rest}>
        {children}
    </button>
);

export default Button;
