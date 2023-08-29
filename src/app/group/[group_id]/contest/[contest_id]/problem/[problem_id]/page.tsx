'use client';

import React from 'react';
import {Group} from "@mantine/core";
import {numToAlphaSeq} from "../../../../../../../../services/secondary/numToAlphaSeq";
import {useDocumentTitle} from "@mantine/hooks";
import {ProblemService} from "../../../../../../../../services/problem.service";
import {useQuery} from "@tanstack/react-query";
import {GroupNav, Statuses} from "@/widgets/sidebar";
import {Statement} from "@/widgets/problem-statement";
import {SubmitForm} from "@/features/solution/ui/submit-form/ui";
import {GroupService} from "../../../../../../../../services/group.service";
import classes from "./page.module.css";

// FIXME: добавить проверки на useQuery


// @ts-ignore
const Page = ({params}) => {

    const {
        data: group,
        isLoading: isLoadingGroup
    } = useQuery(["group"], () => GroupService.getGroupByID(params.group_id));

    const {
        data: problem,
        isLoading: isLoadingProblem
    } = useQuery(["problem"], () => ProblemService.getProblemByID(params.problem_id)); // FIXME: Необходимо проверять статус. Смотри документацию

    const contest = group?.contests.find((contest) => contest.id == params.contest_id);

    useDocumentTitle(`${group?.title} - ${contest?.title} - ${problem?.title}`); // FIXME: убедиться в работоспособности

    if (isLoadingGroup || isLoadingProblem || problem === undefined || contest === undefined || group === undefined) // FIXME: лучше использовать статус? смотри документацию
        return <></>;

    const alpha = numToAlphaSeq(contest.problems.findIndex((problem) => problem.id == params.problem_id));

    return (
        <main className={classes.main}>
            <Group style={{alignItems: "flex-start"}}>
                <Group className={classes.column}
                       style={{
                           flex: 3,
                           alignItems: "baseline"
                       }}>
                    <Statement problem={problem} alpha={alpha}/>
                    <SubmitForm/>
                </Group>
                <Group className={classes.column} style={{paddingTop: "10px"}}>
                    <GroupNav title={group.title} subtitle={[contest.title]}/>
                    <Statuses contest={contest}/>
                </Group>
            </Group>
        </main>
    );
};

export default Page;