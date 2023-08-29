interface IDescription {
    legend: string,
    input_format: string,
    output_format: string
}

interface ISample {
    input: string,
    output: string
}

interface IDetails {
    input_filename: string,
    output_filename: string,
    time_limit: number,
    memory_limit: number
}

interface IProblem {
    id: number,
    title: string,
    description: IDescription,
    samples: ISample[],
    details: IDetails,
    note: string
}

export type {IDescription, ISample, IDetails, IProblem};
