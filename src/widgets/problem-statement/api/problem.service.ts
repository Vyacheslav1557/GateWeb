import axios from "axios";
import {IProblem} from "./types/problem.interface";

export const ProblemService = {
    async getProblemByID(problem_id: number) {
        const response = await axios.get<IProblem>(`${process.env["NEXT_PUBLIC_PROBLEMS_API"]}/problem?problem_id=${problem_id}`,
            {
                headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
            });
        return response.data;
    },
};
