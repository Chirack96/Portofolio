/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'night-blue': '#0a192f'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'opacity': 'opacity',
        'transform': 'transform'
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadein: 'fadein 1s ease-out'
      }
    },
    },
      plugins: [],
    };

