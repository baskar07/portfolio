import React, { useState, useEffect, useContext } from 'react';


const ThemeContext = React.createContext();


const THEME ={
    dark:"dark",
    light:"light"
}




const ThemeContextProvider = (props) =>{

    const [currentTheme, setCurrentTheme] = useState();

    const toggleTheme = () =>{
      const theme = onThemeChangeHandler(currentTheme !== THEME.dark);
        localStorage.setItem("Theme", theme)
    }



    const onThemeChangeHandler = (isDarkMode) =>{
        if(isDarkMode){
            setCurrentTheme(THEME.dark);
            document.querySelector("html").setAttribute('class', THEME.dark);
            
            return THEME.dark;
        }
        setCurrentTheme(THEME.light);
        document.querySelector("html").removeAttribute('class');
        return THEME.light;
        
    }


    useEffect(()=>{
        const isThemePreferenceDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;


       const isActiveTheme = localStorage.getItem('Theme');

       if(isActiveTheme){
        onThemeChangeHandler(isActiveTheme === THEME.dark)
       }else{
        onThemeChangeHandler(isThemePreferenceDarkMode);
       }



    }, [])

    return <ThemeContext.Provider {...props} value={{ toggleTheme, currentTheme}}  />
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContextProvider;