const commonFontStyles = {
  light: (fontSize) => ({
    size: fontSize || "1rem",
    weight: "500",
  }),
  medium: (fontSize) => ({
    size: fontSize || "1rem",
    weight: "600",
  }),
  semiBold: (fontSize) => ({
    size: fontSize || "1rem",
    weight: "700",
  }),
  bold: (fontSize) => ({
    size: fontSize || "1rem",
    weight: "800",
  }),
  black: (fontSize) => ({
    size: fontSize || "1rem",
    weight: "900",
  }),
};

// Theme
export const secondaryTheme = {
  typography: {
    title: {
      ...commonFontStyles,
    },
    body: {
      ...commonFontStyles,
    },
    button: {
      ...commonFontStyles,
    },
    heading: {
      h1: {
        size: "3rem",
        weight: "800",
      },
      h2: {
        size: "2rem",
        weight: "700",
      },
      h3: {
        size: "1.5rem",
        weight: "700",
      },
      h4: {
        size: "1.3rem",
        weight: "700",
      },
    },
  },
  color: {
    primary: {
      100: "#FFEAE4",
      200: "#FFE1C8",
      300: "#FFCCAD",
      400: "#FFB899",
      500: "#FF9777",
      600: "#DB6C56",
      700: "#B7473B",
      800: "#932825",
      900: "#7A161C",
    },
    secondary: {
      100: "#EEEAFF",
      200: "#DDD5FF",
      300: "#CCC1FF",
      400: "#BEB1FF",
      500: "#A798FF",
      600: "#7D6FDB",
      700: "#584CB7",
      800: "#3A3093",
      900: "#251D7A",
    },
    text: {
      100: "#F5F5F7",
      200: "#E3E6EB",
      300: "#BABFC5",
      400: "#82868C",
      500: "#3A3C40",
      600: "#2A2E37",
      700: "#1D212E",
      800: "#121625",
      900: "#0B0E1E",
    },
    success: {
      100: "#D4FCEC",
      200: "#ABF9E0",
      300: "#7EEDD4",
      400: "#5BDCCA",
      500: "#2CC5BD",
      600: "#20A4A9",
      700: "#167E8D",
      800: "#0E5C72",
      900: "#08445E",
    },
    danger: {
      100: "#FFE4E1",
      200: "#FFC5C3",
      300: "#FFA6AC",
      400: "#FF90A3",
      500: "#FF6B93",
      600: "#DB4E82",
      700: "#B73572",
      800: "#932262",
      900: "#7A1457",
    },
    warn: {
      100: "#FFFADB",
      200: "#FFF3B8",
      300: "#FFEB95",
      400: "#FFE27A",
      500: "#FFD54F",
      600: "#DBB039",
      700: "#B78E27",
      800: "#936D19",
      900: "#7A560F",
    },
    purple: {
      100: "#D4DBFC",
      200: "#A9B8FA",
      300: "#7C90F1",
      400: "#5A6FE4",
      500: "#2940D3",
      600: "#1D30B5",
      700: "#142297",
      800: "#0D177A",
      900: "#070F65",
    },
  },
};
