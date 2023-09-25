import React, {FunctionComponent, useEffect} from "react";
import {NamedTextBlock} from "./named-text-block";
import {ProblemDetails} from "./details";
import {ProblemSamples} from "./samples";
import {useQuery} from "@tanstack/react-query";
import {ProblemService} from "@/widgets/problem-statement/api";

// TODO: добавить поле scoring
// TODO: undefined в comps

interface props {
    group_id: number,
    contest_id: number,
    problem_id: number
}


const Statement: FunctionComponent<props> = (props) => {
    const ProblemQuery = useQuery(["problem"], () => ProblemService.getProblemByID(props.problem_id));

    useEffect(() => {
        if (typeof window.MathJax == "undefined")
            return;
        const fetchData = async () => {
            await window.MathJax.typesetPromise();
        };
        fetchData();
    });


    if (!ProblemQuery.isSuccess)
        return <></>;

    return (
        <>
            <ProblemDetails problem={ProblemQuery.data} alpha=""/>
            <NamedTextBlock title={""} text={ProblemQuery.data.legend}/>
            <NamedTextBlock title={"Входные данные"} text={ProblemQuery.data.input_format}/>
            <NamedTextBlock title={"Выходные данные"} text={ProblemQuery.data.output_format}/>
            <NamedTextBlock title={"Система оценки"} text={ProblemQuery.data.scoring}/>
            <ProblemSamples problem={ProblemQuery.data}/>
            <NamedTextBlock title={"Примечание"} text={ProblemQuery.data.note}/>
        </>
    );
};

export {Statement};