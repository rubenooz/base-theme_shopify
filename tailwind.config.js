module.exports = {
  prefix: 'tlw-',
  important: true,
  content: ["./src/**/*.{html,js,liquid}", "./**/*.liquid", "./config/settings_data.json"],
  safelist: [],
  theme: {
    screens: {
      "xsm": "360px",
      "sm": "640px",
      "md": "750px",
      "lg": "990px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    fontFamily: {
      "title": 'var(--font-heading-family)',
      "text": 'var(--font-body-family)',
    },
    colors: {
      "acc1": "var(--color-base-accent-1)",
      "acc2": "var(--color-base-accent-2)",
    },
  },
  plugins: [],
}
