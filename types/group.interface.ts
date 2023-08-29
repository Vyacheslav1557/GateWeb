import {IContest} from "./contest.interface";

interface IGroup {
    id: number,
    title: string,
    contests: IContest[]
}

export type {IGroup};