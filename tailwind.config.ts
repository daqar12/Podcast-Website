/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#1A1A1A',
          red: '#FF4F4F', 
          yellow: '#FFCE00',
          white: '#FFFFFF',
          gray: '#BFBFBF',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          }
        }
      }
    },
  },
  plugins: [],
}