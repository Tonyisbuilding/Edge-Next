import { createContext, useContext } from "react";


interface changeLanguageContextType{
    language: 'en' | 'nl';
    setLanguage: (value: 'en' | "nl")=> void;
}
const ChangeLanguageContext = createContext<changeLanguageContextType | null>(null);

export default ChangeLanguageContext;

export const useChangeLanguageContext = ()=>{
    const context = useContext(ChangeLanguageContext);

    if(!context){
        throw new Error('An error occured');
    }
    return context;
};

