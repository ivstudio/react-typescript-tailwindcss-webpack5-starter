import React from 'react';

import Button from '@/components/Button';

const App = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('handleClick:', e.currentTarget.textContent);
    };

    return (
        <main className="mx-auto flex min-h-screen flex-col items-center justify-center bg-slate-950">
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-8xl">
                Starter Template
            </h1>
            <p className="mb-8 max-w-[320px] text-center text-base font-light text-slate-400 md:max-w-full md:text-lg lg:text-xl">
                A starter template with React, TypeScript, Tailwind CSS, and
                Webpack.
            </p>
            <Button onClick={handleClick}>SEND MESSAGE</Button>
        </main>
    );
};

export default App;
