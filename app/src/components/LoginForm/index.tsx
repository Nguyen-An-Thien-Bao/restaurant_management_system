'use client';
import React, { useState } from 'react';
import { validateEmail } from '@/utils/regex';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { navigate } from '@/utils/navigate';

const FormInit = {
    email: '',
    password: '',
};

const errorForm = {
    email: '',
    password: '',
};

function Form(): React.ReactNode {
    const [form, setForm] = useState(FormInit);
    const [error, setError] = useState(errorForm);
    const [hidden, setHidden] = useState(true);

    const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, email: e.target.value }));
    };

    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setHidden(true);
        }
        setForm((prev) => ({ ...prev, password: e.target.value }));
    };

    const handleValidateEmail = () => {
        return validateEmail(form.email);
    };

    const handleSetHidden = () => {
        setHidden((prev) => !prev);
    };

    const handleLogin = () => {
        if (!handleValidateEmail()) {
            setError((prev) => ({ ...prev, email: 'Invalid Email' }));
            return;
        }
        setError(errorForm);
        navigate('/waiter/home');
    };

    return (
        <>
            <div className="w-full mt-20 text-black select-none md:w-[400px] mx-auto border border-black rounded-lg py-8 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <h3 className="font-semibold text-2xl capitalize">login</h3>
                <p className="mb-4 mt-2">Enter your email and password to log in to the system</p>
                <div className="flex-col">
                    <label className="capitalize font-semibold text-sm mb-1 block cursor-pointer" htmlFor="userEmail">
                        email:
                    </label>
                    <input
                        className="inputStyle mb-4"
                        type="text"
                        name="userEmail"
                        id="userEmail"
                        placeholder="m@gmail.com"
                        value={form.email}
                        onChange={(e) => handleSetEmail(e)}
                    />
                    <label
                        className="capitalize font-semibold text-sm mb-1 block cursor-pointer"
                        htmlFor="userPassword"
                    >
                        password:
                    </label>
                    <div className="relative mb-4">
                        <input
                            type={hidden ? 'password' : 'text'}
                            className="inputStyle"
                            name="userPassword"
                            placeholder="eg...123456789"
                            id="userPassword"
                            value={form.password}
                            onChange={(e) => handleSetPassword(e)}
                        />
                        <button
                            onClick={handleSetHidden}
                            className="absolute outline-none right-0 top-2/4 bg-theme-primary -translate-y-2/4 mr-2"
                        >
                            {form.password && hidden ? <FaEye /> : ''}
                            {form.password && !hidden ? <FaEyeSlash /> : ''}
                        </button>
                    </div>

                    <p className="h-4 leading-4 mb-4 font-semibold text-red-500">{error.email}</p>
                    <button
                        onClick={() => handleLogin()}
                        className="w-full bg-white capitalize outline-none text-black border border-black  rounded-md py-2 text-sm font-semibold hover:bg-primary-cyan hover:transition-all hover:text-white hover:border-primary-cyan"
                    >
                        login
                    </button>
                </div>
            </div>
        </>
    );
}

export default Form;
