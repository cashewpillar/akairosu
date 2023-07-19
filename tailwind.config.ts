import { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        akairosu: {
          brown: '#db9864',
          orange: '#f89366',
          yellow: '#ffc585',
          white: '#feeed6',
          blue: '#557f8c',
          gray: '#ddd6c3',
        }
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  darkMode: 'class',
  plugins: [require("tailwind-gradient-mask-image")],
} satisfies Config;