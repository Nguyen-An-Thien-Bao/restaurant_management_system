'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import { useContext, useState } from 'react';
import { SidebarContext } from '@/context/SidebarContext';

function SidebarItem({
    data,
}: {
    data: {
        title: string;
        path?: string;
        Icon: IconType;
        subMenu?: {
            title: string;
            path?: string;
            Icon: IconType;
            subMenu?: [];
        }[];
    };
}) {
    const pathname = usePathname();
    const [openSubmenu, setSubmenu] = useState(false);
    const { isOpen, handleOpenSidebar, windowSize } = useContext(SidebarContext);
    const { Icon, title, path, subMenu } = data;

    const handleCloseSidebar = () => {
        if (windowSize < 1024) {
            handleOpenSidebar();
        }
        return;
    };

    const handleOpenSubMenu = () => {
        setSubmenu((prev) => !prev);
    };

    if (!path) {
        return (
            <>
                <button
                    onClick={handleOpenSubMenu}
                    className={`${
                        openSubmenu ? 'bg-primary-cyan' : 'bg-primary-black'
                    } w-full select-none capitalize font-medium flex items-center py-3 px-4 transition-colors duration-75 hover:bg-primary-red hover:opacity-60 hover:transition-all`}
                >
                    <Icon className={`${openSubmenu ? ' rotate-90' : 'rotate-0'} mr-3 transition-all text-4xl`} />
                    <span>{title}</span>
                </button>
                {
                    <div
                        className={`pl-[20px] overflow-hidden transform-gpu transition-all duration-200 ease-in-out ${
                            openSubmenu ? 'max-h-screen' : 'max-h-0'
                        }`}
                    >
                        {subMenu?.map((ele, idx) => (
                            <SidebarItem data={ele} key={idx} />
                        ))}
                    </div>
                }
            </>
        );
    }

    return (
        <Link
            href={path}
            onClick={handleCloseSidebar}
            className={`${
                pathname.startsWith(path) ? 'bg-primary-cyan' : 'bg-primary-black'
            } w-full select-none capitalize font-medium flex items-center py-5 px-4 transition-colors duration-75 hover:bg-primary-red hover:opacity-60 hover:transition-all`}
        >
            <Icon className="mr-3 text-3xl" />
            <span>{title}</span>
        </Link>
    );
}

export default SidebarItem;
