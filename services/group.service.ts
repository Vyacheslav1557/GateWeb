import axios from "axios";
import {IGroup} from "../types/group.interface";

export const GroupService = {
    async getGroupByID(group_id: number) {
        const response = await axios.get<IGroup>(`http://localhost:4200/groups?group_id=${group_id}`);
        return response.data;
    },
};
