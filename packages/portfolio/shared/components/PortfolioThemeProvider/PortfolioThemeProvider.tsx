import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { portfolioTheme } from '../../portfolioTheme/portfolioTheme';

interface PortfolioThemeProviderProps {
  children: ReactNode;
  themeMode?: 'light' | 'dark';
}

export function PortfolioThemeProvider({
  children,
  themeMode = 'light',
}: PortfolioThemeProviderProps) {
  const currentTheme = portfolioTheme[themeMode];

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}
