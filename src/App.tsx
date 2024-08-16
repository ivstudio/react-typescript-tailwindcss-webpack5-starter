import React from 'react';

import Button from '@/components/Button';

const App = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('handleClick:', e.currentTarget.textContent);
    };

    return (
        <main className="mx-auto flex min-h-screen flex-col items-center justify-center bg-neutral-800">
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-8xl">
                Starter
                <span className="bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent">
                    {' '}
                    Template
                </span>
            </h1>
            <p className="mb-14 max-w-[320px] text-center text-base font-light text-slate-400 md:max-w-full md:text-lg lg:text-xl">
                A starter template with React, TypeScript, Tailwind CSS, and
                Webpack.
            </p>
            <Button onClick={handleClick} type="button">
                Get Started
            </Button>
        </main>
    );
};

export default App;
