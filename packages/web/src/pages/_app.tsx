import { AppProps } from "next/app";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/router";
import { SessionStartProvider } from "@/contexts/SessionStartContext";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Toaster />
            {router.pathname.includes("/authentication")
                ? (
                    <SessionStartProvider>
                        <Component {...pageProps} />
                    </SessionStartProvider>
                ) : (
                    <Component {...pageProps} />
                )}
        </ThemeProvider>
    )
}

export default App;