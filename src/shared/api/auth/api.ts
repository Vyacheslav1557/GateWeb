import axios from "axios";
import {IUserAuth, IValidation} from "@/shared/api/auth/types";

const AUTH_API = process.env["NEXT_PUBLIC_AUTH_API"];
const config = {
    headers: {'ngrok-skip-browser-warning': 'skip-browser-warning'}
};

export const AuthService = {
    async SignUp(user: IUserAuth) {
        const response = await axios.post<IValidation>(`${AUTH_API}/user/signup`,
            {
                username: user.username,
                password: user.password
            },
            config
        )
        return response.data;
    },
    async Login(user: IUserAuth) {
        const response = await axios.post<IValidation>(`${AUTH_API}/user/login`,
            {
                username: user.username,
                password: user.password
            },
            config
        )
        return response.data;
    },
};