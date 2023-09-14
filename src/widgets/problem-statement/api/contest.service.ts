import axios from "axios";
import {IContest} from "./types/contest.interface";
import {IP} from "./constants";

export const ContestService = {
    async getContestByID(contest_id: number) {
        const response = await axios.get<IContest>(`${IP}/contest?contest_id=${contest_id}`,
            {
                headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
            });
        return response.data;
    },
};
