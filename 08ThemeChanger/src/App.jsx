import { useEffect, useState } from "react";
import ThemeBttn from "./assets/components/ThemeBttn";
import Card from "./assets/components/Card";
import { ThemeContext, ThemeProvider } from "./assets/context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual theme changer
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-slate-300">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBttn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
