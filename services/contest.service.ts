import axios from "axios";
import {IContest} from "../types/contest.interface";

export const ContestService = {
    async getContestByID(contest_id: number) {
        const response = await axios.get<IContest>(`http://localhost:4200/contests?contest_id=${contest_id}`);
        return response.data;
    },
};
