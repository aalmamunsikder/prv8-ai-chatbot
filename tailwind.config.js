/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                obsidian: '#050505', // Softer, rich black
                charcoal: '#0F0F0F',
                champagne: {
                    100: '#F9F5EB',
                    200: '#F2E6D0',
                    300: '#E5C558', // Warmer yellow-gold
                    400: '#D4AF37', // RICH METALLIC GOLD (The "Rolex" Gold)
                    500: '#B59326', // Darker gold for shadows
                    900: '#4A3B2A',
                },
                surface: {
                    50: 'rgba(255, 255, 255, 0.02)',
                    100: 'rgba(255, 255, 255, 0.05)',
                    200: 'rgba(255, 255, 255, 0.08)',
                }
            },
            backgroundImage: {
                'noise': "url('https://www.transparenttextures.com/patterns/stardust.png')",
                'luxury-gradient': 'radial-gradient(circle at top right, #1a1a1a 0%, #050505 100%)',
                'metal-sheen': 'linear-gradient(120deg, transparent 30%, rgba(212, 175, 55, 0.15) 50%, transparent 70%)',
            },
            animation: {
                'float': 'float 8s ease-in-out infinite',
                'spotlight': 'spotlight 2s ease-in-out infinite alternate',
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                spotlight: {
                    '0%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                },
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
