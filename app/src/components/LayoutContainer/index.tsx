'use client';
import { SidebarContext } from '@/context/SidebarContext';
import React from 'react';

function LayoutContainer({ children }: { children: React.ReactNode }) {
    const { isOpen } = React.useContext(SidebarContext);
    return (
        <div
            className={`${
                isOpen ? 'md:translate-x-[190px] md:w-[calc(100%_-_190px)]' : 'md:translate-x-0 md:w-full'
            } lg:px-8 min-h-screen ease-in-out duration-300`}
        >
            {children}
        </div>
    );
}
export default LayoutContainer;
