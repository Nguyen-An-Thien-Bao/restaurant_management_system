import { IconType } from 'react-icons';
import { WaiterHomeIcon, WaiterBellIcon, WaiterMoneyIcon, WaiterUserIcon } from '@/asset/icon/waiterRouteIcons';

type IRoute = {
    title: string;
    Icon: IconType;
    path: string;
};

const waiterRoutes: IRoute[] = [
    {
        title: 'Home',
        Icon: WaiterHomeIcon,
        path: '/waiter/home',
    },
    {
        title: 'tables',
        Icon: WaiterBellIcon,

        path: '/waiter/tables',
    },
    {
        title: 'checkout',
        Icon: WaiterMoneyIcon,
        path: '/waiter/checkout',
    },
    {
        title: 'user',
        path: '',
        Icon: WaiterUserIcon,
    },
];

export default waiterRoutes;
