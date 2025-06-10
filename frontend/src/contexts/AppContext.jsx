import { useState } from "react";
import { createContext, useContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // open authentication modal
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const toggleAuthModal = () => setIsAuthModalOpen(!isAuthModalOpen);
  const [formType, setFormType] = useState("signin");

  const contextValue = {
    isAuthModalOpen,
    toggleAuthModal,
    formType,
    setFormType,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
