import axios from "axios";
import {IContest} from "./types/contest.interface";

export const ContestService = {
    async getContestByID(contest_id: number) {
        const response = await axios.get<IContest>(`${process.env["NEXT_PUBLIC_PROBLEMS_API"]}/contest?contest_id=${contest_id}`,
            {
                headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
            });
        return response.data;
    },
};
