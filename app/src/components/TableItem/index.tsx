'use client';
import Link from 'next/link';
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
import OrderItem from '../OrderItem';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { deleteTable } from '@/services/tablesServices';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import TableForm from '../Form/TableForm';

enum status {
    empty,
    reservation,
    serve,
}

function TableItem({
    staticTable = false,
    tableData,
}: {
    tableData: {
        id: string;
        seating_capacity: number;
        status: string;
        createdAt: string;
        updatedAt: string;
    };
    staticTable?: boolean;
}) {
    const router = useRouter();
    const { toast } = useToast();
    let color;

    switch (tableData.status) {
        case 'Vacant':
            color = 'text-[#2ABE1D]';
            break;
        case 'Removed':
            color = 'text-[#C2B200]';
            break;
        case 'Damaged':
            color = 'text-[#FF0000]';
            break;
        case 'Occupied':
            color = 'text-[#FF0000]';
            break;
    }

    if (staticTable) {
        const handleDeleteTable = () => {
            deleteTable(tableData)
                .then(() => router.refresh())
                .then(() => {
                    const date = new Date();
                    toast({
                        title: 'Delete Table Success',
                        description: `${date.toLocaleString('en-US')}`,
                    });
                });
        };
        return (
            <div className="capitalize flex justify-between col-span-1 select-none text-[14px] border-[1.5px] rounded-lg border-black bg-white p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div>
                    <h2 className="font-bold text-xl">table {tableData.id}</h2>
                    <p className="">
                        status: <span className={`${color} w-full`}>{tableData.status}</span>
                    </p>
                    <p>capacity: {tableData.seating_capacity}</p>
                </div>
                <div className="flex gap-4 h-full text-xl">
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="hover:opacity-70">
                                <FaPen />
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Table: {tableData.id}</DialogTitle>
                                <DialogDescription>You can update table infomation in this form.</DialogDescription>
                            </DialogHeader>
                            <TableForm data={tableData} formType="update" />
                        </DialogContent>
                    </Dialog>
                    <button className="hover:opacity-70" onClick={handleDeleteTable}>
                        <MdDelete />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="capitalize select-none text-[14px] border-[1.5px] rounded-lg border-black bg-white p-2 cursor-pointer transition-all hover:opacity-55 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <h2 className="font-bold text-xl">table {tableData.id}</h2>
                        <p className="">
                            status: <span className={`${color} w-full`}>{tableData.status}</span>
                        </p>
                        <p>capacity: {tableData.seating_capacity}</p>
                    </div>
                </DialogTrigger>
                <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Notice</DialogTitle>
                        {tableData.status === 'Vacant' && (
                            <DialogDescription>This table is in availabity.</DialogDescription>
                        )}
                        {tableData.status === 'Damaged' ||
                            (tableData.status === 'Removed' && (
                                <DialogDescription>This table is in reservation.</DialogDescription>
                            ))}
                        {tableData.status === 'Occupied' && (
                            <DialogDescription>This table is in serve.</DialogDescription>
                        )}
                    </DialogHeader>
                    {tableData.status === 'Occupied' && (
                        <div className="h-full overflow-y-scroll relative">
                            <div className="pr-4">
                                <OrderItem />
                                <OrderItem />
                                <OrderItem desc />
                                <OrderItem />
                                <OrderItem />
                                <OrderItem />
                            </div>
                        </div>
                    )}

                    {tableData.status === 'Vacant' && (
                        <DialogFooter className="h-12">
                            <div className="flex w-full justify-center items-center gap-4">
                                <DialogClose asChild>
                                    <Link
                                        href={`/waiter/tables/${tableData.id}`}
                                        className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                                    >
                                        Create Order
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <button
                                        type="button"
                                        className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                                    >
                                        Close
                                    </button>
                                </DialogClose>
                            </div>
                        </DialogFooter>
                    )}
                    {tableData.status === 'Occupied' && (
                        <DialogFooter className="h-12">
                            <div className="flex w-full justify-center items-center gap-x-4">
                                <DialogClose asChild>
                                    <Link
                                        className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                                        href={`/waiter/checkout/${tableData.id}`}
                                    >
                                        Checkout
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <button className="py-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white">
                                        Close
                                    </button>
                                </DialogClose>
                            </div>
                        </DialogFooter>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}

export default TableItem;
