/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a1e',
        accent: '#fbbf24',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
