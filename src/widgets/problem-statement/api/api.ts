import axios from "axios";
import {IContest, IGroup, IProblem} from "./types";

export const ContestService = {
    async getContestByID(contest_id: number) {
        const response = await axios.get<IContest>(`${process.env["NEXT_PUBLIC_PROBLEMS_API"]}/contest?contest_id=${contest_id}`,
            {
                headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
            });
        return response.data;
    },
};

export const GroupService = {
    async getGroupByID(group_id: number) {
        const response = await axios.get<IGroup>(`${process.env["NEXT_PUBLIC_PROBLEMS_API"]}/group?group_id=${group_id}`, {
            headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
        });
        return response.data;
    },
};


export const ProblemService = {
    async getProblemByID(problem_id: number) {
        const response = await axios.get<IProblem>(`${process.env["NEXT_PUBLIC_PROBLEMS_API"]}/problem?problem_id=${problem_id}`,
            {
                headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
            });
        return response.data;
    },
};
