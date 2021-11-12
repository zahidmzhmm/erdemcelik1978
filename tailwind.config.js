module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bg: '#161D31',
                pr: '#283046',
                sr: '#6F64E7'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}