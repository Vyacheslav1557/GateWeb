import {Group} from "@mantine/core";
import React, {FunctionComponent} from "react";
import {IProblem} from "../../api/types/problem.interface";
import classes from "./styles.module.css";

const ProblemDetails: FunctionComponent<{ problem: IProblem, alpha: string }> = ({problem, alpha}) => {
    return (
        <Group className={classes.cd} gap={0}>
            <div className={classes.title}>
                {`${alpha}. ${problem?.title}`}
            </div>
            <p>Ограничение по времени: {problem.time_limit} ms</p>
            <p>Ограничение по памяти: {problem.memory_limit} MB</p>
            <p>Ввод: {problem.input_filename}</p>
            <p>Вывод: {problem.output_filename}</p>
        </Group>
    );
};

export {ProblemDetails};