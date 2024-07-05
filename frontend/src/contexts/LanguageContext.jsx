import { createContext, useState, useEffect, useContext } from "react";

// Create a context for managing language settings
const LanguageContext = createContext();

// Provider component to manage and provide language data
export const LanguageProvider = ({ children }) => {
  // Initialize the current language from sessionStorage or default to "En"
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return sessionStorage.getItem("language") || "En";
  });

  // State to store the current translations
  const [currentTranslations, setCurrentTranslations] = useState({});

  // Effect to load translations whenever the current language changes
  useEffect(() => {
    const loadTranslations = async (language) => {
      // Fetch the translations for the current language
      const response = await fetch(`/src/locales/${language}.json`);
      const data = await response.json();
      // Set the fetched translations in state
      setCurrentTranslations(data);
    };

    loadTranslations(currentLanguage);

    // Store the current language in sessionStorage
    sessionStorage.setItem("language", currentLanguage);
  }, [currentLanguage]); // Dependency array with currentLanguage to re-run the effect when it changes

  // Function to change the current language
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  // Function to get the translation for a given key
  const translate = (key) => {
    // Split the key into parts to handle nested keys
    const keyPath = key.split(".");
    // Traverse the translations object to find the translation
    return keyPath.reduce(
      (translationObject, keyPart) =>
        translationObject && translationObject[keyPart]
          ? translationObject[keyPart]
          : key, // Return the key itself if translation not found
      currentTranslations
    );
  };

  // Provide the current language, changeLanguage function, and translate function to children components
  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, translate }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext in other components
export const useLanguage = () => useContext(LanguageContext);
