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

export type {ISample, IProblem};
