import {createContext, useEffect, useState} from "react";
import {AuthService, IUserAuth} from "@/shared/api/auth";
import {useSessionStorage} from "@mantine/hooks";

interface IAuthContext {
    isLoggedIn: Boolean
    token: string
    username: string
    login: ({username, password}: IUserAuth) => void
    logout: () => void
}

const defaultState = {
    isLoggedIn: false,
    token: "",
    username: "",
    login: () => {
    },
    logout: () => {
    }
}

const AuthContext = createContext<IAuthContext>(defaultState);

function AuthProvider(props: any) {

    const [token, setJWT, removeJWT] = useSessionStorage({
        key: 'jwt',
    });
    const [username, setUsername, removeUsername] = useSessionStorage({
        key: 'username',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(token !== undefined && username !== undefined);
    }, [token, username]);

    const login = async (user: IUserAuth) => {
        const data = await AuthService.Login(user);
        setIsLoggedIn(true);
        setJWT(data.access_token);
        setUsername(data.username);
    };

    const logout = () => {
        setIsLoggedIn(false);
        removeJWT();
        removeUsername();
    };

    const value = {
        isLoggedIn,
        token,
        username,
        login,
        logout,
    };

    return <AuthContext.Provider value={value} {...props} />;
}

export {AuthContext, AuthProvider};