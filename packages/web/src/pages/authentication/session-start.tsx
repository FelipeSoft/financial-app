import { AuthenticatorStep } from "@/components/authentication/authenticator-step";
import { PasswordlessStep } from "@/components/authentication/passwordless-step";
import { SessionStartContext, SessionStartProvider } from "@/contexts/SessionStartContext";
import { useContext, useEffect, useState } from "react";

const SessionStart = () => {
    const sessionStartContext = useContext(SessionStartContext);

    return sessionStartContext?.currentStep === "passwordless" ? <PasswordlessStep /> : <AuthenticatorStep />

}

export default SessionStart;