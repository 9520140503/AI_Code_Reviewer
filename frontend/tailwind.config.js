/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%,100%': {
            borderColor: '#00ffff',
            outlineColor: '#00ffff',
          },
          '50%': {
            borderColor: '#00bbff',
            outlineColor: '#00bbff',
          },
        }, 
      },
      animation: {
        updown: 'updown 1s ease-in-out infinite',
        glow: 'glow 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
}
