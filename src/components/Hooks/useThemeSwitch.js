// 'use client'

// import { useEffect, useState } from "react";

//   export function useThemeSwitch() {
//   const preferDarkQuery = "(prefers-color-schema:dark)";
//   const storageKey = "theme";
//   const [mode, setMode] = useState();

//   const toggleTheme = (theme) => {
//      add 
//   };

//   const getUserPreference = () => {
//     const userPref = localStorage.getItem(storageKey);
//     if (userPref) {
//       return userPref;
//     }
//     return matchMedia(preferDarkQuery).matches ? "dark" : "light";
//   };


//   useEffect(() => {
    
//     const mediaQuery = matchMedia(preferDarkQuery);
//     const handleChange = () => {
//       const newMode = getUserPreference();
//       setMode(newMode);
//       toggleTheme(newMode);
//     };

//     handleChange();

//     mediaQuery.addEventListener("change", handleChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleChange);
//     };
//   }, []);

//   useEffect(() => {
//     toggleTheme(mode)
//   }, [mode])
  


//   return [mode, setMode]
// }