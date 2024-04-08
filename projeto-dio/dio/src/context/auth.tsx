import { createContext, useEffect, useState } from 'react'
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';
import { IUser } from '../types/user';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try{
            const { data: allUsers } = await api.get('/users');
            const isValidUser = allUsers.find((user:IUser) => user.email === loginData.email && user.password === loginData.password);
            if(isValidUser) {
                setUser(isValidUser);
                localStorage.setItem('user', JSON.stringify(isValidUser));
                navigate('/feed');
            } else {
                alert('E-mail ou senha inválidos')
            }

        }catch{
            alert('Houve um erro, tente novamente.')
        }
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleSignOut = () => {
        setUser({} as IUser);
        localStorage.removeItem('user');
        navigate('/login');
    }

    const handleSignUp = async (loginData: ILoginData) => {
        try{
            //verifica se ja existe um usuário cadastrado com esse email
            const { data: allUsers } = await api.get('/users');
            console.log(allUsers);
            const checkEmail = allUsers.find((user:IUser) => user.email === loginData.email);

            if(!checkEmail){
                const { data } = await api.post('/users', loginData);
                alert('Usuário cadastrado com sucesso!');
            } else {
                alert('Usuário com e-mail já cadastrado.')
            }
            
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    }

    return (
        <AuthContext.Provider value ={{user, handleLogin, handleSignOut, handleSignUp}}>
            {children}
        </AuthContext.Provider>
    )
}
