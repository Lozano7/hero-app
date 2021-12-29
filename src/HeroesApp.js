import { useEffect, useReducer } from 'react';
import { AuthContextProvider } from './auth/AuthContext';
import authReducer from './auth/authReducer';
import AppRouter from './routers/AppRouter';

const initAuthState = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, initAuthState);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <AuthContextProvider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default HeroesApp;
