export default ({ palette, font, ...rest }) => ({
  ...rest,
  palette: {
    ...palette,
    primary: palette.secondary,
    secondary: palette.primary,
  },
  font: {
    ...font,
    primary: font.secondary,
    secondary: font.primary,
  },
});
