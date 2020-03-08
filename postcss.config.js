module.exports = {
  plugins: {
    tailwindcss: true,
    "@fullhuman/postcss-purgecss": {
      content: ["src/**/*.html"]
    },
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-properties": true
      }
    },
    "postcss-clean": true
  }
};
