import axios from "axios";
import {IProblem} from "./types/problem.interface";
import {IP} from "./constants";
export const ProblemService = {
    async getProblemByID(problem_id: number) {
        const response = await axios.get<IProblem>(`${IP}/problem?problem_id=${problem_id}`,
            {
                headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
            });
        return response.data;
    },
};
