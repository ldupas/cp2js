module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coral: {
          'color-primary': 'var(--color-primary)',
          'color-secondary': 'var(--color-secondary)',
          'color-text': 'var(--color-text)',
          default: 'hsl(360, 78%, 68%)',
          dark: 'hsl(360, 78%, 08%)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
