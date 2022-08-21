import axios from 'axios';
import React, { 
    createContext, 
    useState, 
    useContext, 
    ReactNode,
    useEffect
} from 'react';

import { api } from '../services/api';

interface User {
    id: string;
    // user_id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
    // token: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface SignInCredencials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn: (credencials: SignInCredencials) => Promise<void>;
    // signOut: () => Promise<void>;
    // updateUser: (user: User) => Promise<void>;
    // load: boolean;
}

interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children } : AuthProviderProps){
    const [data, setData] = useState<AuthState>({} as AuthState);
    // const [load, setLoad] = useState(true);

    async function signIn({email, password}: SignInCredencials) {
        const response = await api.post('/sessions', {
            email,
            password,
        });

        console.log(response.data);
    }

    return (
        <AuthContext.Provider 
            value={{
                user: data.user,
                signIn,
                // signOut,
                // updateUser,
                // load,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}

export { 
    AuthProvider,
    useAuth,
}
