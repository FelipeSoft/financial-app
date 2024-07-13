import { createContext, useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
}

export type Auth = {
    currentStep: "passwordless" | "authenticator",
    setCurrentStep: React.Dispatch<React.SetStateAction<"passwordless" | "authenticator">>
}

export const SessionStartContext = createContext<Auth | null>(null);

export const SessionStartProvider: React.FC<Props> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState<"passwordless" | "authenticator">("passwordless");
    
    return (
        <SessionStartContext.Provider value={{ currentStep, setCurrentStep }}>
            {children}
        </SessionStartContext.Provider>
    )
}