'use client';
import { IconType } from 'react-icons';
import { FaChartSimple, FaHouse, FaBellConcierge, FaUsers, FaBurger, FaCaretRight } from 'react-icons/fa6';
import { MdTableBar } from 'react-icons/md';
import { BiSolidCategory } from 'react-icons/bi';
import { IoFastFood } from 'react-icons/io5';

export const CmsHomeIcon: IconType = ({ className }: { className?: string }) => {
    return <FaHouse className={className} />;
};

export const CmsBurger: IconType = ({ className }: { className?: string }) => {
    return <IoFastFood className={className} />;
};

export const CmsCategoryIcon: IconType = ({ className }: { className?: string }) => {
    return <BiSolidCategory className={className} />;
};

export const CmsChartIcon: IconType = ({ className }: { className?: string }) => {
    return <FaChartSimple className={className} />;
};

export const CmsTableIcon: IconType = ({ className }: { className?: string }) => {
    return <MdTableBar className={className} />;
};

export const CmsBellIcon: IconType = ({ className }: { className?: string }) => {
    return <FaBellConcierge className={className} />;
};

export const CmsUserIcon: IconType = ({ className }: { className?: string }) => {
    return <FaUsers className={className} />;
};

export const CmsShowmoreIcon: IconType = ({ className }: { className?: string }) => {
    return <FaCaretRight className={className} />;
};
