/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,vue,html}',
    './components/**/*.{js,ts,vue,html}',
    './layouts/**/*.{js,ts,vue,html}',
    './app.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg')",
      },
    },
  },
  plugins: [],
}

