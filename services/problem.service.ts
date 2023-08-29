import axios from "axios";
import {IProblem} from "../types/problem.interface";

export const ProblemService = {
    async getProblemByID(problem_id: number) {
        const response = await axios.get<IProblem>(`http://localhost:4200/problems?problem_id=${problem_id}`);
        return response.data;
    },
};
