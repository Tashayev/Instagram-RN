import { createContext, useContext, ReactNode, useState } from 'react';
import { Fonts } from './fonts/fontTypes';
import { Colors } from './colors/colorTypes';

import { fonts } from './fonts/fonts';
import { darkColors } from './colors/dark';
import { lightColors } from './colors/light';

interface ThemeContextType {
  colors: Colors;
  fonts: Fonts;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ colors, fonts, toggleTheme: () => setIsDark(!isDark) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
