'use client';

import './global.css';
import {AppShell, MantineProvider} from '@mantine/core';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useEffect} from "react";
import {Header} from "@/widgets/header";
import '@mantine/core/styles.css';

// TODO:
// + Найти шрифт
// + Добавить раздел новостей (мб между названием контеста и списком задач)
// + Вернуть буквы в названия задач
// + Вернуть title
// + Добавить реакцию кнопок на нажатие
// + Добавить подсветку синтаксиса и моноширинный шрифт в окне посылки решения
// + Убрать всю правую инфу в правый сайдбар (в мобильной версии как минимум)
// + Вход по нажатию на user icon
// + Мобильная версия
// + Skeletons
// + Переместить problem-statement/api в shared/api/?
// CURRENT TASK:
// + Добавить AuthProvider ???
// + Вход и регистрация ???


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
            <MantineProvider defaultColorScheme="auto">
                <AppShell header={{height: 61}}>
                    <AppShell.Header zIndex={6}>
                        <Header/>
                    </AppShell.Header>
                    <AppShell.Main pb={100}>
                        {children}
                    </AppShell.Main>
                </AppShell>
            </MantineProvider>
        </QueryClientProvider>
        </body>
        </html>
    );
}