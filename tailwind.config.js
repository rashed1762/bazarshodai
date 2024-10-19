/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl':'1560px'
    }, 
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'sixcaps': ['Six Caps', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'bai': ['Bai Jamjuree', 'sans-serif'],
        'mont':['Montserrat', 'sans-serif'],
        'concert':['Concert One', 'sans-serif'],
        'great': ["Great Vibes", 'cursive'],
        
      }
    },

  },
  plugins: [
    require('daisyui'),
  ],
};
