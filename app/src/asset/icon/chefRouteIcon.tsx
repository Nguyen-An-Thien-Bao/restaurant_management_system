'use client';
import { HiHome } from 'react-icons/hi';
import { FaConciergeBell, FaUser } from 'react-icons/fa';
import { IconType } from 'react-icons';

export const ChefHomeIcon: IconType = ({ className }: { className?: string }) => {
    return <HiHome className={className} />;
};

export const ChefBellIcon: IconType = ({ className }: { className?: string }) => {
    return <FaConciergeBell className={className} />;
};

export const ChefUserIcon: IconType = ({ className }: { className?: string }) => {
    return <FaUser className={className} />;
};
