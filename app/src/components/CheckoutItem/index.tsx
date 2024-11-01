'use client';
import formatCurrency from '@/utils/currencyFormat';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import MenuItem from '../Menu/MenuItem';
import Link from 'next/link';

type CheckoutItemType = {
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

const sample = {
    id: '1',
    foodName: 'sữa chua',
    price: '20000',
    description: 'hơi chua',
    categorieId: 4,
    image: null,
    status: 0,
    createdAt: '2024-09-27T09:41:38.000Z',
    updatedAt: '2024-09-27T09:41:38.000Z',
    categorieData: {
        categoryName: 'Salat',
    },
};

function CheckoutItem({ data }: { data: CheckoutItemType }) {
    let color, text;
    switch (data.status) {
        case 0:
            color = 'text-[#2ABE1D]';
            text = 'hết món';
            break;
        case 1:
            color = 'text-[#FF0000]';
            text = 'còn món';
            break;
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex select-none items-center pb-3 border-b-[1.5px] border-black cursor-pointer">
                    <div className="w-[60px] aspect-square rounded-lg bg-secondary-gray flex justify-center items-center">
                        <span className="text-center text-theme-primary font-semibold text-xl">{data.tableID}</span>
                    </div>
                    <div className="pl-4 w-full">
                        <h3 className="text-lg font-medium capitalize">
                            Table: <span>{data.tableID}</span>
                        </h3>
                        <div className="flex justify-between">
                            <span className="capitalize">total: {formatCurrency(+data.total_price)}</span>
                            <p className="capitalize">
                                status: <span className={`${color}`}>{text}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px] flex flex-col">
                <DialogHeader>
                    <DialogTitle>Checkout</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 h-full overflow-y-scroll relative">
                    <div className="grid grid-cols-1 items-center gap-4 pr-4">
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                        <MenuItem dishData={sample} staticItem />
                    </div>
                </div>
                <DialogFooter className="h-12">
                    <div className="flex justify-center gap-x-4 items-center">
                        <Link
                            className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                            href={`/waiter/checkout/${data.tableID}`}
                            type="submit"
                        >
                            Checkout
                        </Link>
                        <DialogClose asChild>
                            <button className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white">
                                Close
                            </button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CheckoutItem;
