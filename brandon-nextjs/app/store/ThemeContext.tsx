import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
    applyLight: () => {},
    applyDark: () => {},
    getIsDark: ():boolean => {return false},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("theme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
        applyLight();
    } else {
      if (localStorage.getItem("theme") == 'dark') {
        applyDark();
      } else {
        applyLight();
      }
    }
  }

  function applyDark(): void {
    setIsDark(true);
    document!.querySelector("body")!.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  function applyLight(): void {
    setIsDark(false);
    document!.querySelector("body")!.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  function getIsDark(): boolean {
    return isDark;
  }

  return (
    <ThemeContext.Provider value={{ applyLight, applyDark, getIsDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
