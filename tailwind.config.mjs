/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E8F4F2',
          DEFAULT: '#237E77',
        },
        accent: '#003366',
        'gray-20': '#333333',
        code: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
