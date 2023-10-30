'use client';

import './global.css';
import {AppShell, MantineProvider} from '@mantine/core';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Header} from "@/widgets/header";
import '@mantine/core/styles.css';
import {AuthProvider} from "@/shared/lib/auth";
import Script from "next/script";

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
// + Dropzone


declare global {
    interface Window {
        MathJax: any;
    }
}

const queryClient = new QueryClient();

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="ru">
        <head>
            <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6"/>
            <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"/>
        </head>
        <body>
        <AuthProvider>
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
        </AuthProvider>
        </body>
        </html>
    );
}