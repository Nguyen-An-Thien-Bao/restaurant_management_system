import LoginForm from '@/components/LoginForm';
import React from 'react';

function LoginPage(): React.ReactNode {
    return (
        <section className="px-8 md:p-0">
            <LoginForm />
        </section>
    );
}

export default LoginPage;
