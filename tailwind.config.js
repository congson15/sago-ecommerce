module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        maxHeight: {
            '500': '500px'
        },
        minHeight: {
            '68': '68px',
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                'my-color': '#1a2b5f',
                '00ADB5': '#00ADB5',
                'eee': '#eee',
                '303030': '#303030',
                '5b5b5b': '#5b5b5b'
            },
            backgroundImage: {
                'dotted-line': "url('https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/u-dotted-line-with-arrow.png')",
                'banner-left': "url('https://elementor.deverust.com/clickbuy/wp-content/uploads/sites/10/2021/09/denim-and-sneakers-PX5Y2LU-1024x641.jpg')"
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}