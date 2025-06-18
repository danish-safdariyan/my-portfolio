module.exports = {
  darkMode: 'class', // 👈 required
  theme: {
    extend: {
      colors: {
        accent: '#6366F1',
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require("autoprefixer")],
  corePlugins: {
  preflight: true,
},
};
