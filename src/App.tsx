import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Text from './components/Text';

const App = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('handleClick:', e.currentTarget.textContent);
    };

    return (
        <Container tag="main">
            <Text tag="h1" variant="title" className="mb-4">
                Starter Template
            </Text>
            <Text
                variant="subtitle"
                className="mb-8 max-w-[320px] md:max-w-full text-center"
            >
                A starter template with React, TypeScript, Tailwind CSS, and
                Webpack.
            </Text>
            <Button onClick={handleClick}>SEND MESSAGE</Button>
        </Container>
    );
};

export default App;
