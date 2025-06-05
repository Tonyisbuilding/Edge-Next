// import { createContext, useContext } from "react";


// interface changeLanguageContextType{
//     language: 'en' | 'nl';
//     setLanguage: (value: 'en' | "nl")=> void;
// }
// const ChangeLanguageContext = createContext<changeLanguageContextType | null>(null);

// export default ChangeLanguageContext;

// export const useChangeLanguageContext = ()=>{
//     const context = useContext(ChangeLanguageContext);

//     if(!context){
//         throw new Error('An error occured');
//     }
//     return context;
// };


import { createContext, useContext, useEffect, useState } from "react";

interface changeLanguageContextType {
  language: 'en' | 'nl';
  setLanguage: (value: 'en' | 'nl') => void;
}

const ChangeLanguageContext = createContext<changeLanguageContextType | null>(null);

export default ChangeLanguageContext;

export const useChangeLanguageContext = () => {
  const context = useContext(ChangeLanguageContext);
  if (!context) {
    throw new Error("ChangeLanguageContext is not available");
  }
  return context;
};

// Context Provider Component
export const ChangeLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<'en' | 'nl'>('nl'); // Default to Dutch

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved === 'en' || saved === 'nl') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (value: 'en' | 'nl') => {
    setLanguageState(value);
    localStorage.setItem('preferredLanguage', value);
  };

  return (
    <ChangeLanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </ChangeLanguageContext.Provider>
  );
};

