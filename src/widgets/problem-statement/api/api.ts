import axios from "axios";
import {IContest, IGroup, IProblem} from "./types";

const PROBLEMS_API = process.env["NEXT_PUBLIC_PROBLEMS_API"];
const config = {
    headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
};

export const ContestService = {
    async getContestByID(contest_id: number) {
        const response = await axios.get<IContest>(`${PROBLEMS_API}/contest?contest_id=${contest_id}`, config);
        return response.data;
    },
};

export const GroupService = {
    async getGroupByID(group_id: number) {
        const response = await axios.get<IGroup>(`${PROBLEMS_API}/group?group_id=${group_id}`, config);
        return response.data;
    },
};


export const ProblemService = {
    async getProblemByID(problem_id: number) {
        const response = await axios.get<IProblem>(`${PROBLEMS_API}/problem?problem_id=${problem_id}`, config);
        return response.data;
    },
};
