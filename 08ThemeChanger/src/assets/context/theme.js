import React from 'react';
import { createContext, useContext } from 'react';

//this is the creation of ThemeContext
export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {}
})

//this is Provider method of ThemeContext, so we can use this context everywhere, withoust using Prop drilling
//here rather than doing in multiple file like miniContext, we doing in same file.
export const ThemeProvider = ThemeContext.Provider

//now provider is done now i have to use that context
export default function useTheme() {
  return useContext(ThemeContext)
}