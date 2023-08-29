'use client';

import './global.css';
import {AppShell, MantineProvider} from '@mantine/core';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useEffect} from "react";
import {Header} from "@/widgets/header";
import '@mantine/core/styles.css';

// FIXME: добавить AuthProvider ???
// TODO: Вход и регистрация ???


declare global {
    interface Window {
        MathJax: any;
    }
}

// @ts-ignore
const useScript = (src, id?, type?) => {
    // TODO: refactor
    // TODO: add dependencies

    useEffect(() => {
        const script = document.createElement('script');

        script.src = src;
        script.async = true;
        if (id)
            script.id = id;
        if (type)
            script.type = type;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
};


const queryClient = new QueryClient();


export default function RootLayout({children}: { children: React.ReactNode }) {

    useScript("https://polyfill.io/v3/polyfill.min.js?features=es6");
    useScript("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js",
        "text/javascript");

    return (
        <html lang="ru">
        <body>
        <QueryClientProvider client={queryClient}>
            <MantineProvider>
                <AppShell header={{height: 61}}>
                    <AppShell.Header zIndex={6}>
                        <Header/>
                    </AppShell.Header>
                    <AppShell.Main>
                        {children}
                    </AppShell.Main>
                </AppShell>
            </MantineProvider>
        </QueryClientProvider>
        </body>
        </html>
    );
}