const sharedPortfolioTheme = {
  page: {
    maxWitdh: 1280,
    paddingX: {
      base: 16,
      small: 16,
      medium: 32,
      large: 32,
      wide: 48,
    },
  },
  breakpoints: {
    base: 0,
    small: 480,
    medium: 768,
    large: 1024,
    wide: 1280,
  },
};

export const portfolioTheme = {
  light: {
    ...sharedPortfolioTheme,
    page: {
      ...sharedPortfolioTheme.page,
      backgroundColor: '#fff',
    },
  },
  dark: {
    ...sharedPortfolioTheme,
    page: {
      ...sharedPortfolioTheme.page,
      backgroundColor: '#000',
    },
  },
};
