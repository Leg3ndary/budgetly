import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/components/ui/toast";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider>
                <Component {...pageProps} />
            </ToastProvider>
        </ThemeProvider>
    );
}
