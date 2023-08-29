import {Group} from "@mantine/core";
import React, {FunctionComponent} from "react";
import {IProblem} from "../../../../../types/problem.interface";
import classes from "./styles.module.css";

const ProblemDetails: FunctionComponent<{ problem: IProblem, alpha: string }> = ({problem, alpha}) => {
    return (
        <Group className={classes.cd} gap={0}>
            <div className={classes.title}>
                {`${alpha}. ${problem?.title}`}
            </div>
            <p>Ограничение по времени: {problem.details.time_limit} ms</p>
            <p>Ограничение по памяти: {problem.details.memory_limit} MB</p>
            <p>Ввод: {problem.details.input_filename}</p>
            <p>Вывод: {problem.details.output_filename}</p>
        </Group>
    );
};

export {ProblemDetails};