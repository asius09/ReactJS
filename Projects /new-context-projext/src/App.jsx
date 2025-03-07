import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "./context/Theme";
import { ThemeBtn, Card } from "./components";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.documentElement;
    if (themeMode === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="w-screen flex flex-wrap min-h-screen items-center justify-center">
        <div className="w-full max-w-sm flex flex-col justify-center items-center md:h-full py-8">
          <div className="w-full max-w-sm mx-auto flex justify-center items-center mb-4 md:mb-8">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm flex-1 flex items-center">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
