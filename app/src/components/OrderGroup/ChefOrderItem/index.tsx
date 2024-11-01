import React from 'react';
import formatCurrency from '@/utils/currencyFormat';

function ChefOrderItem({
    data,
}: {
    data: {
        id: number;
        tableID: number;
        accountID: number;
        total_price: string;
        status: number;
        notes: string;
        payment: string;
        createdAt: string;
        updatedAt: string;
        tableData: {
            id: number;
        };
        accountData: {
            username: string;
            role: string;
        };
    };
}): React.ReactNode {
    let bgColor;
    let text;

    switch (data.status) {
        case 0:
            bgColor = 'bg-[#2ABE1D]';
            text = 'done';
            break;
        case 1:
            bgColor = 'bg-[#C2B200]';
            text = 'in process';
            break;
        case 2:
            bgColor = 'bg-[#2C2C2C]';
            text = 'pending';
            break;
    }
    return (
        <div className="flex select-none items-center cursor-pointer hover:opacity-80">
            <div className="w-[60px] aspect-square rounded-lg bg-secondary-gray flex justify-center items-center">
                <span className="text-center text-theme-primary font-semibold text-xl">{data.tableID}</span>
            </div>
            <div className="pl-4 w-full flex justify-between items-center">
                <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-bold capitalize">
                        Table: <span>{data.tableID}</span>
                    </h3>
                    <span className="capitalize">total: {formatCurrency(+data.total_price)}</span>
                </div>
                <p className={`${bgColor} capitalize w-[80px] py-1 text-center text-sm border x rounded-lg`}>
                    <span className={`text-white`}>{text}</span>
                </p>
            </div>
        </div>
    );
}

export default ChefOrderItem;
