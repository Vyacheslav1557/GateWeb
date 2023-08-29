import {IProblem} from "./problem.interface";

interface IContest {
    id: number,
    title: string,
    problems: IProblem[],
}

export type {IContest};