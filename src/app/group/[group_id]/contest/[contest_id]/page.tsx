'use client';

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {ContestService} from "../../../../../../services/contest.service";
import {useDocumentTitle} from "@mantine/hooks";
import {Group} from "@mantine/core";
import {numToAlphaSeq} from "../../../../../../services/secondary/numToAlphaSeq";
import {StatusEllipse} from "@/widgets/sidebar";
import {GroupService} from "../../../../../../services/group.service";
import GroupNav from "../../../../../widgets/sidebar/ui/nav/ui";
import classes from "./page.module.css";

// @ts-ignore
const Page = ({params}) => {

    const {
        data: contest,
        isLoading: isLoadingContest
    } = useQuery(["contest"], () => ContestService.getContestByID(params.contest_id));

    const {
        data: group,
        isLoading: isLoadingGroup
    } = useQuery(["group"], () => GroupService.getGroupByID(params.contest_id));

    useDocumentTitle(`${group?.title} - ${contest?.title}`);

    if (isLoadingContest || isLoadingGroup || group === undefined)
        return <></>;

    const rows = contest?.problems.map((problem, index) => (
        <Group className={classes.status} key={problem.id}>
            <a href={`/group/${params.group_id}/contest/${params.contest_id}/problem/${problem.id}`}
               style={{width: "100%"}}>
                <div style={{padding: "7px 10px 7px 10px", display: "flex"}}>
                    <div style={{display: "flex", gap: "10px", width: "100%"}}>
                        <StatusEllipse status={"OK"}/>
                        {`${numToAlphaSeq(index)}. ${problem.title}`}
                    </div>
                    <div className={classes.details}>
                        <div>
                            {problem.details.time_limit} ms
                        </div>
                        <div>
                            {problem.details.memory_limit} MB
                        </div>
                    </div>
                </div>
            </a>
        </Group>
    ));

    return (
        <main className={classes.main}>
            <Group style={{alignItems: "flex-start"}}>
                <Group className={classes.column} style={{flex: 3}}>
                    <div className={classes.block}>
                        {rows}
                    </div>
                </Group>
                <Group className={classes.column}>
                    <GroupNav title={group.title} subtitle={group.contests.map((item) => (item.title))}/>
                </Group>
            </Group>
        </main>
    );
};

export default Page;