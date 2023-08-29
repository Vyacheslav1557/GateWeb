import React, {FunctionComponent, useEffect} from "react";
import {IProblem} from "../../../../types/problem.interface";
import {NamedTextBlock} from "./named-text-block";
import {ProblemDetails} from "./details";
import {ProblemSamples} from "./samples";


// TODO: добавить поле scoring

const Statement: FunctionComponent<{
    problem: IProblem,
    alpha: string
}> = ({problem, alpha}) => {

    useEffect(() => {
        if (typeof window.MathJax !== "undefined") {
            window.MathJax.typeset();
        }
    });

    return (
        <>
            <ProblemDetails problem={problem} alpha={alpha}/>
            <NamedTextBlock title={""} text={problem.description.legend}/>
            <NamedTextBlock title={"Входные данные"} text={problem.description.input_format}/>
            <NamedTextBlock title={"Выходные данные"} text={problem.description.output_format}/>
            {/*<NamedTextBlock title={"Система оценки"} text={problem?.description.scoring}/>*/ /*TODO*/}
            <ProblemSamples problem={problem}/>
            <NamedTextBlock title={"Примечание"} text={problem.note}/>
        </>
    );
};

export {Statement};