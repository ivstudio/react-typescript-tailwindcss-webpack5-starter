import { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {},
    },
    plugins: [
        function ({ addUtilities }: PluginAPI) {
            const newUtilities = {
                '.bg-smooth': {
                    transition: 'background 250ms ease-in-out',
                },
            };

            addUtilities(newUtilities);
        },
    ],
};

export default config;
