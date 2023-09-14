'use client';

import {Group} from "@mantine/core";
import React, {FunctionComponent} from "react";
import {IProblem} from "../../api/types/problem.interface";
import {CustomCopyButton} from "@/shared/ui";
import classes from "./styles.module.css";

const Sample: FunctionComponent<{ title: string, preText: string }> = ({title, preText}) => {
    return (
        <Group className={classes.block} gap={0}>
            <div className={classes.blockTitle}>{title}</div>
            <div className={classes.blockSample}>
                <pre>{preText}</pre>
                <div className={classes.buttonCopy}>
                    <CustomCopyButton valueToCopy={preText}/>
                </div>
            </div>
        </Group>
    );
};

const ProblemSamples: FunctionComponent<{ problem: IProblem }> = ({problem}) => {
    if (!problem.samples.length)
        return <></>;

    const samples = problem.samples.map((item, index) => (
        <Group key={index} style={{
            width: "100%",
            flexDirection: "column"
        }} gap={3}>
            <Sample title={"Входные данные"} preText={item.input}/>
            <Sample title={"Выходные данные"} preText={item.output}/>
        </Group>
    ));

    return (
        <Group style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "baseline"
        }} gap={5}>
            <p className={classes.subtitle}>Пример</p>
            {samples}
        </Group>
    );
};

export {ProblemSamples};