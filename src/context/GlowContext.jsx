import { createContext, useEffect, useState } from "react";

export const GlowContext = createContext();

export function GlowProvider({ children }) {

  const [glowEnabled, setGlowEnabled] = useState(() => {
    const saved = localStorage.getItem("glowEnabled");
    return saved ? JSON.parse(saved) : false;  // default OFF
  });

    const toggleGlow = () => setGlowEnabled(prev => !prev);
  
  
   useEffect(() => {
    localStorage.setItem("glowEnabled", JSON.stringify(glowEnabled));
   }, [glowEnabled]);


    return (
      <GlowContext.Provider value={{ glowEnabled, toggleGlow }}>
        {children}
      </GlowContext.Provider>
    );
  }