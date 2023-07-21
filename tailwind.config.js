/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js', './src/**/*.tsx', './src/**/*.ts'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  rules: [
    // ...
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: ['tailwindcss'],
            },
          },
        },
      ],
    },
  ]
}

