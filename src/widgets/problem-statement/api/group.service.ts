import axios from "axios";
import {IGroup} from "./types/group.interface";
import {IP} from "./constants";

export const GroupService = {
    async getGroupByID(group_id: number) {
        const response = await axios.get<IGroup>(`${IP}/group?group_id=${group_id}`, {
            headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
        });
        return response.data;
    },
};
