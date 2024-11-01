'use client';
import React from 'react';
import User from './User';
import NavButton from './NavButton';

function DashboardHeader(): React.ReactNode {
    return (
        <header className="sticky lg:shadow-[0px_7px_4px_-1px_rgba(0,0,0,0.54)] text-white flex justify-between md:justify-end items-center p-4 px-[27px] h-[60px] top-0 left-0 lg:rounded-md right-0 bg-primary-green bg-secondary-cyan">
            <NavButton />
            <User />
        </header>
    );
}
export default DashboardHeader;
