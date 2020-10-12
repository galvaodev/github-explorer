import React, { createContext, useContext, useState } from 'react';

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  setTheme: (theme) => console.warn('No theme provider'),
});

// const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState(Theme.Dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}

// export { ThemeContext, useTheme };
