module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' && {
            '@fullhuman/postcss-purgecss': {
                content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
                defaultExtractor: (content: string) =>
                    content.match(/[\w-/:]+(?<!:)/g) || [],
            },
        }),
    },
};
