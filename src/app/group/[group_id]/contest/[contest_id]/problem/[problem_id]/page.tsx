'use client';

import React from 'react';
import {Group} from "@mantine/core";
import {useQuery} from "@tanstack/react-query";
import {GroupNav, Statuses} from "@/widgets/sidebar";
import {Statement} from "@/widgets/problem-statement";
import {SubmitForm} from "@/features/solution/ui/submit-form/ui";
import {GroupService} from "@/widgets/problem-statement/api";
import classes from "./page.module.css";

// FIXME: добавить проверки на useQuery


// @ts-ignore
const Page = ({params}) => {
    const GroupQuery = useQuery(["group"], () => GroupService.getGroupByID(params.group_id));


    // useDocumentTitle(`${group?.title} - ${contest?.title} - ${problem?.title}`);

    if (GroupQuery.isLoading || !GroupQuery.isSuccess)
        return <></>;
    // const alpha = numToAlphaSeq(contest.problems.findIndex((problem) => problem.id == params.problem_id));
    const contest = GroupQuery.data.contests.find((contest) => contest.id == params.contest_id);


    if (!contest)
        return <></>;

    return (
        <div className={classes.main}>
            <Group style={{alignItems: "flex-start"}}>
                <Group className={classes.column}
                       style={{
                           flex: 3,
                           alignItems: "baseline"
                       }}>
                    <Statement {...params}/>
                    <SubmitForm/>
                </Group>
                <Group className={classes.column} style={{paddingTop: "10px"}}>
                    <GroupNav title={GroupQuery.data.title} subtitle={[contest.title]}/>
                    <Statuses contest={contest}/>
                </Group>
            </Group>
        </div>
    );
};

export default Page;