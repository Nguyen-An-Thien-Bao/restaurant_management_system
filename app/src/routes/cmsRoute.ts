import {
    CmsHomeIcon,
    CmsChartIcon,
    CmsUserIcon,
    CmsBurger,
    CmsBellIcon,
    CmsShowmoreIcon,
    CmsTableIcon,
    CmsCategoryIcon,
} from '@/asset/icon/cmsRouteIcon';

const cmsRoutes = [
    {
        title: 'dashboard',
        path: '/admin/dashboard',
        Icon: CmsHomeIcon,
    },
    {
        title: 'analyst',
        path: '/admin/analyst',
        Icon: CmsChartIcon,
    },
    {
        title: 'reservation',
        path: '/admin/reservation',
        Icon: CmsBellIcon,
    },
    {
        title: 'menus',
        subMenu: [
            {
                title: 'categories',
                path: '/admin/categories',
                Icon: CmsCategoryIcon,
            },
            {
                title: 'menu',
                path: '/admin/menu',
                Icon: CmsBurger,
            },
        ],
        Icon: CmsShowmoreIcon,
    },
    ,
    {
        title: 'tables',
        path: '/admin/tables',
        Icon: CmsTableIcon,
    },
    {
        title: 'accounts',
        path: '/admin/accounts',
        Icon: CmsUserIcon,
    },
];

export default cmsRoutes;
