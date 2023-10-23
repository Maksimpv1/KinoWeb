import { createContext, useState } from "react";

type styleHtype = string;
type changeThemeStyleType = (item:styleHtype) => void;

interface IContext {
    valueTheme?:styleHtype;
    contextFunc?:changeThemeStyleType ,
    TEXT_THEME?:string,
    BACKGROUND_THEME?:string,
}
interface IThemeProvider{
    children: React.ReactNode,
}
export const  ThemeContext = createContext<IContext>({ });

export const ThemeProvider = ({ children }:IThemeProvider) => {
    const [valueTheme, setTheme] = useState<string>('dark');
    const [TEXT_THEME, setTextColor] = useState<string>('#FFFFFF');
    const [BACKGROUND_THEME, setBGColor] = useState<string>('#000000');
    
    const contextFunc:changeThemeStyleType = (item:styleHtype) => {
        if(item === 'dark'){
            setTextColor('#FFFFFF');
            setBGColor('#000000');
        }else if( item === 'light') {
            setTextColor('#000000');
            setBGColor('#FFFFFF');
        }
        setTheme(item)
    }
    return(
        <ThemeContext.Provider value={{ valueTheme,contextFunc,TEXT_THEME,BACKGROUND_THEME }}>
            {children}
        </ThemeContext.Provider>
    )
}