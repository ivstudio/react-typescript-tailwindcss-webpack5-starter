import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button
			className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded bg-smooth"
			{...rest}>
			{children}
		</button>
	);
};

export default Button;
