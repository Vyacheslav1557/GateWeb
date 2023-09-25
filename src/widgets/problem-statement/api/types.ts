interface ISample {
    input: string,
    output: string
}

interface IProblem {
    id: number,
    title: string,

    input_filename: string,
    output_filename: string,
    time_limit: number,
    memory_limit: number

    samples: ISample[],

    legend: string,
    input_format: string,
    output_format: string
    note: string,
    scoring: string
}

interface IContest {
    id: number,
    title: string,
    problems: IProblem[],
}

interface IGroup {
    id: number,
    title: string,
    contests: IContest[]
}

export type {ISample, IProblem, IContest, IGroup};