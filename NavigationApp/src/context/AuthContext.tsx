import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

// Definir como luce mi context y que informacion voy a tener en el context
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial del context
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
