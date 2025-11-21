import { createContext, useEffect, useState } from "react";

export const GradientContext = createContext();

export function GradientProvider({ children }) {

    const [gradientEnabled, setGradientEnabled] = useState(() => {
        const saved = localStorage.getItem("gradientEnabled");
        return saved ? JSON.parse(saved) : false; // default OFF
    });

    const toggleGradient = () => setGradientEnabled(prev => !prev);


    useEffect(() => {
        localStorage.setItem("gradientEnabled", JSON.stringify(gradientEnabled));
    }, [gradientEnabled]);


    return (
        <GradientContext.Provider value={{ gradientEnabled, toggleGradient }}> 
         {children}
        </GradientContext.Provider>
    );
}