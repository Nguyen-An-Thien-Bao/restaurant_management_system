import OrderGroup from '@/components/OrderGroup';
import ChefOrderItem from '@/components/OrderGroup/ChefOrderItem';
import { ReactNode } from 'react';

const sample = [
    {
        id: 3,
        tableID: 2,
        accountID: 2,
        total_price: '1200000.00',
        status: 0,
        notes: 'đã đem hết món',
        payment: 'other',
        createdAt: '2024-10-02T09:20:49.000Z',
        updatedAt: '2024-10-02T09:20:49.000Z',
        tableData: {
            id: 2,
        },
        accountData: {
            username: 'Dũng',
            role: 'Server',
        },
    },
    {
        id: 4,
        tableID: 8,
        accountID: 1,
        total_price: '200000.00',
        status: 1,
        notes: 'còn món',
        payment: 'other',
        createdAt: '2024-10-02T09:20:49.000Z',
        updatedAt: '2024-10-02T09:20:49.000Z',
        tableData: {
            id: 2,
        },
        accountData: {
            username: 'Dũng',
            role: 'Server',
        },
    },
    {
        id: 1,
        tableID: 8,
        accountID: 1,
        total_price: '200000.00',
        status: 2,
        notes: 'còn món',
        payment: 'other',
        createdAt: '2024-10-02T09:20:49.000Z',
        updatedAt: '2024-10-02T09:20:49.000Z',
        tableData: {
            id: 2,
        },
        accountData: {
            username: 'Dũng',
            role: 'Server',
        },
    },
];

function ChefOrders(): ReactNode {
    return (
        <div>
            <div className="px-4 mt-4">
                <div className="mt-4 grid gap-6 pb-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <OrderGroup orders={sample} />
                    <OrderGroup orders={sample} />
                    <OrderGroup orders={sample} />
                    <OrderGroup orders={sample} />
                </div>
            </div>
        </div>
    );
}

export default ChefOrders;
