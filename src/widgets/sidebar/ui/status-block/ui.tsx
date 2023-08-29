import {Group} from "@mantine/core";
import {numToAlphaSeq} from "../../../../../services/secondary/numToAlphaSeq";
import React, {FunctionComponent} from "react";
import {IContest} from "../../../../../types/contest.interface";
import classes from "./styles.module.css";

// @ts-ignore
const StatusEllipse = ({status}) => { // FIXME: Используй enum или т.п.
    let color = "#E0EDDF";
    if (status === "OK")
        color = "#0F0";
    if (status === "WA")
        color = "#F00";

    return (
        <Group mt={2}>
            <svg width="7" height="20" viewBox="0 0 7 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="6" height="19" rx="3" fill={color} stroke="black"/>
            </svg>
        </Group>

    );
};

const Statuses: FunctionComponent<{ contest: IContest }> = ({contest}) => {
    const statuses = contest.problems.map((problem, index) => (
        <Group className={classes.status} key={problem.id}>
            <StatusEllipse status={"OK"}/>
            <a href={`../problem/${problem.id}`}>
                {`${numToAlphaSeq(index)}. ${problem.title}`}
            </a>
        </Group>
    ));

    return (
        <Group style={{
            flexDirection: "column",
            alignItems: "baseline",
            width: "100%"
        }} gap={2}>
            {statuses}
        </Group>
    );
};

export {Statuses, StatusEllipse};