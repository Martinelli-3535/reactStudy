const palette = {
  white: "#fff",
  black: "#000",
  blue: {
    primary: "#4147DA",
    80: "#7879F1",
    60: "#A5A6F6",
  },
  red: {
    primary: "#EE5D5D",
  },
  grey: {
    100: "#F5F5F5",
    200: "#E6E6E6",
    300: "#D7D7D7",
    400: "#686868",
  },
  iris: {
    primary: "#5D5FEF",
  },
};

const theme = {
  primary: {
    white: palette.white,
    black: palette.black,
    blue100: palette.blue.primary,
    blue80: palette.blue[80],
    blue60: palette.blue[60],
    red: palette.red.primary,
    grey100: palette.grey[100],
    grey200: palette.grey[200],
    grey300: palette.grey[300],
    grey400: palette.grey[400],
    iris: palette.iris.primary,
  },
  text: {
    white: palette.white,
    black: palette.black,
    darkGrey: palette.grey[400],
    lightGrey: palette.grey[100],
    grey: palette.grey[200],
  },
  fontSize: {
    title: "1.875rem", // 30px
    xxl: "1.5rem", // 24px
    xl: "1.25rem", // 20px
    lg: "1.125rem", // 18px
    md: "1rem", // 16px
    sm: "0.875rem", // 14px
    xs: "0.75rem", // 12px
    xxs: "0.625rem", // 10px
  },
  breakPoint: {
    mobile: "768px",
    tablet: "992px",
    desktop: "1200px",
  },
} as const;

export default theme;
