import { ReactNode } from 'react';
import AuthContext from '../context/AuthContext';

function AuthProvider({ children }: { children: ReactNode }) {
    return <AuthContext.Provider value={[]}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
