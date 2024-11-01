'use client';

import { HiHome } from 'react-icons/hi';
import { FaMoneyBillWave, FaConciergeBell, FaUser } from 'react-icons/fa';
import { IconType } from 'react-icons';

export const WaiterHomeIcon: IconType = ({ className }: { className?: string }) => {
    return <HiHome className={className} />;
};

export const WaiterMoneyIcon: IconType = ({ className }: { className?: string }) => {
    return <FaMoneyBillWave className={className} />;
};

export const WaiterBellIcon: IconType = ({ className }: { className?: string }) => {
    return <FaConciergeBell className={className} />;
};

export const WaiterUserIcon: IconType = ({ className }: { className?: string }) => {
    return <FaUser className={className} />;
};
