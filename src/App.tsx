import React from 'react';
import Button from '@/components/Button';

const App = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('handleClick:', e.currentTarget.textContent);
    };

    return (
        <main className="mx-auto bg-slate-950 min-h-screen flex flex-col items-center justify-center">
            <h1 className="mb-4 text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-white">
                Starter Template
            </h1>
            <p className="mb-8 max-w-[320px] md:max-w-full text-center text-base md:text-lg lg:text-xl font-light text-slate-400">
                A starter template with React, TypeScript, Tailwind CSS, and
                Webpack.
            </p>
            <Button onClick={handleClick}>SEND MESSAGE</Button>
        </main>
    );
};

export default App;
