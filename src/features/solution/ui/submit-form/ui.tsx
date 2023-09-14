import React, {FunctionComponent} from 'react';
import {Button, Group, Select, Textarea} from "@mantine/core";
import classes from "@/features/solution/ui/submit-form/styles.module.css";

const compilers = [
    "GNU GCC C11 5.1.0",
    "Clang++20 Diagnostics",
    "Clang++17 Diagnostics",
    "GNU G++14 6.4.0",
    "GNU G++17 7.3.0",
    "GNU G++17 9.2.0 (64 bit, msys 2)",
    "GNU G++20 11.2.0 (64 bit, winlibs)",
    "Microsoft Visual C++ 2017",
    "C# 8, .NET Core 3.1",
    "C# 10, .NET SDK 6.0",
    "C# Mono 6.8",
    "D DMD32 v2.101.2",
    "Go 1.19.5",
    "Haskell GHC 8.10.1",
    "Java 11.0.6",
    "Java 17 64bit",
    "Java 1.8.0_241",
    "Kotlin 1.6.10",
    "Kotlin 1.7.20",
    "OCaml 4.02.1",
    "Delphi 7",
    "Free Pascal 3.0.2",
    "PascalABC.NET 3.8.3",
    "Perl 5.20.1",
    "PHP 8.1.7",
    "Python 2.7.18",
    "Python 3.8.10",
    "PyPy 2.7.13 (7.3.0)",
    "PyPy 3.6.9 (7.3.0)",
    "PyPy 3.9.10 (7.3.9 64bit)",
    "Ruby 3.0.0",
    "Rust 1.66.0 (2021)",
    "Scala 2.12.8",
    "JavaScript V8 4.8.0",
    "Node.js 12.16.3",
];

const SubmitForm: FunctionComponent = () => {
    return (
        <Group style={{width: "100%"}} gap={5}>
            <p className={classes.title}>Послать решение</p>
            <Group gap={0} className={classes.block}>
                <Group className={classes.blockTitle}>
                    <Select
                        defaultValue={compilers[0]}
                        searchable
                        data={compilers}
                        style={{width: "50%"}}
                        maxDropdownHeight={400}
                        comboboxProps={{middlewares: {flip: false, shift: true, inline: false}}}
                        styles={{dropdown: {marginTop: "10px"}}}
                    />
                    <Button variant="default">
                        Отправить
                    </Button>
                </Group>
                <Textarea autosize maxRows={30} minRows={5} variant="default" className={classes.textArea}/>
            </Group>
        </Group>
    );
};

export {SubmitForm};