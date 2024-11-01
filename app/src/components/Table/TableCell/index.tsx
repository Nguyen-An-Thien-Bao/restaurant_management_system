import formatCurrency from '@/utils/currencyFormat';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from '@/components/ui/dialog';
import TablePopup from '../TablePopup';
import { deleteMenu, updateMenu } from '@/services/menuServices';
import { useRouter } from 'next/navigation';
import MenusContext from '@/context/MenusContext';
import { useContext } from 'react';
import { useToast } from '@/hooks/use-toast';
import { deleteCategories, updateCategories } from '@/services/categoriesServices';
import { updateReservation, deleteReservation } from '@/services/reservationServices';
import Button from '@/components/Button';

export type menuType = {
    id: string;
    foodName: string;
    price: number;
    description: string;
    categorieId: number;
    image: string;
    status: number;
};

export type reservationType = {
    id: number;
    tableID: number;
    accountID: number;
    reservation_time: string;
    actual_arrival_time: string;
    guest_count: number;
    contact_info: string;
    status: string;
};

export type categoryType = {
    categoryName: string;
    parent_category_ID: number;
    status: number;
};

function TableCell({
    cellData,
    menu = false,
    reservation = false,
    category = false,
}: {
    cellData: any;
    menu?: boolean;
    reservation?: boolean;
    category?: boolean;
}) {
    const { toast } = useToast();
    const [menuForm] = useContext(MenusContext);
    const router = useRouter();

    const handleDeleteMenu = (data: menuType) => {
        deleteMenu(data)
            .then(() => router.refresh())
            .then(() => {
                const date = new Date();
                toast({
                    title: 'Delete Menu Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    const handleUpdateMenu = (data: menuType) => {
        updateMenu(data)
            .then(() => router.refresh())
            .then(() => {
                const date = new Date();
                toast({
                    title: 'Update Menu Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    const handleUpdateCategories = (data: categoryType) => {
        updateCategories(data)
            .then(() => router.refresh())
            .then(() => {
                const date = new Date();
                toast({
                    title: 'Update Menu Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    const handleDeleteCategory = (data: categoryType) => {
        deleteCategories(data)
            .then(() => router.refresh())
            .then(() => {
                const date = new Date();
                toast({
                    title: 'Delete Category Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    const handleUpdateReservation = (data: reservationType) => {
        updateReservation(data)
            .then(() => router.refresh())
            .then(() => {
                const date = new Date();
                toast({
                    title: 'Update Reservation Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    const handleDeleteReservation = (data: reservationType) => {
        deleteReservation(data)
            .then(() => router.refresh())
            .then(() => {
                const date = new Date();
                toast({
                    title: 'Delete Reservation Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    if (menu) {
        return (
            <tr className="bg-white border-separate hover:bg-[#ccc] transition-all cursor-pointer">
                {Object.keys(cellData).map((key, idx) => {
                    let text = cellData[key];
                    if (key === 'price') {
                        text = formatCurrency(cellData[key]);
                    } else if (key === 'status') {
                        switch (cellData[key]) {
                            case 0:
                                text = 'Still Available';
                                break;
                            case 1:
                                text = 'Sold Out';
                                break;
                        }
                    } else if (key === 'createdAt' || key === 'updatedAt' || key.includes('time')) {
                        const dateObj = new Date(cellData[key]);

                        const formattedDate = dateObj.toLocaleDateString('en-US');
                        const formattedTime = dateObj.toLocaleTimeString('en-US');
                        text = `${formattedDate} ${formattedTime}`;
                    }

                    return (
                        <Dialog key={idx}>
                            <DialogTrigger asChild>
                                <td className="border-x pl-2 border-black pr-[8px] first:border-l-0 capitalize last:border-r-0 py-2 text-lg">
                                    <div className="cursor-pointer w-full overflow-hidden">
                                        {key === 'image' ? (
                                            <div className="w-full flex justify-center items-center">
                                                <img
                                                    src={`${
                                                        !cellData[key]
                                                            ? 'https://placehold.jp/50x50.png'
                                                            : cellData[key]
                                                    }`}
                                                    alt=""
                                                    className="w-[50px] aspect-square hover:rotate-90 hover:scale-125 transition-all"
                                                />
                                            </div>
                                        ) : (
                                            text
                                        )}
                                    </div>
                                </td>
                            </DialogTrigger>
                            <DialogContent
                                aria-description=""
                                className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px] overflow-y-scroll md:overflow-hidden"
                            >
                                <DialogHeader>
                                    <DialogTitle className="capitalize">{cellData['foodName']}</DialogTitle>
                                    <DialogDescription>
                                        Here, you have the ability to edit or remove the menu item.
                                    </DialogDescription>
                                </DialogHeader>
                                <div>
                                    <TablePopup menu data={cellData} />
                                </div>
                                <DialogFooter>
                                    <div className="flex items-center justify-center gap-x-4">
                                        <DialogClose>
                                            <Button btnType="cancel">
                                                <span>Cancel</span>
                                            </Button>
                                        </DialogClose>
                                        <DialogClose onClick={() => handleUpdateMenu(menuForm)}>
                                            <Button btnType="update">
                                                <span>Update</span>
                                            </Button>
                                        </DialogClose>
                                        <DialogClose onClick={() => handleDeleteMenu(menuForm)}>
                                            <Button btnType="delete">
                                                <span>Delete</span>
                                            </Button>
                                        </DialogClose>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    );
                })}
            </tr>
        );
    }
    if (reservation) {
        return (
            <tr className="bg-white border-separate hover:bg-[#ccc] transition-all cursor-pointer">
                {Object.keys(cellData).map((key, idx) => {
                    let text = cellData[key];
                    if (key === 'price') {
                        text = formatCurrency(cellData[key]);
                    } else if (key === 'status') {
                        switch (cellData[key]) {
                            case 0:
                                text = 'Still Available';
                                break;
                            case 1:
                                text = 'Sold Out';
                                break;
                        }
                    } else if (key === 'createdAt' || key === 'updatedAt' || key.includes('time')) {
                        const dateObj = new Date(cellData[key]);

                        const formattedDate = dateObj.toLocaleDateString('en-US');
                        const formattedTime = dateObj.toLocaleTimeString('en-US');
                        text = `${formattedDate} ${formattedTime}`;
                    }

                    return (
                        <Dialog key={idx}>
                            <DialogTrigger asChild>
                                <td className="border-x pl-2 border-black pr-[8px] first:border-l-0 capitalize last:border-r-0 py-2 text-lg">
                                    <div className="cursor-pointer w-full overflow-hidden">{text}</div>
                                </td>
                            </DialogTrigger>
                            <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px]">
                                <DialogHeader>
                                    <DialogTitle className="capitalize">{cellData['contact_info']}</DialogTitle>
                                    <DialogDescription>
                                        Here, you have the ability to edit or remove the reservation item.
                                    </DialogDescription>
                                </DialogHeader>
                                <div>
                                    <TablePopup reservation data={cellData} />
                                </div>
                                <DialogFooter>
                                    <div className="flex items-center justify-center gap-x-4">
                                        <DialogClose>
                                            <Button btnType="cancel">
                                                <span>Cancel</span>
                                            </Button>
                                        </DialogClose>
                                        <DialogClose onClick={() => handleUpdateReservation(menuForm)}>
                                            <Button btnType="update">
                                                <span>Update</span>
                                            </Button>
                                        </DialogClose>
                                        <DialogClose onClick={() => handleDeleteReservation(menuForm)}>
                                            <Button btnType="delete">
                                                <span>Delete</span>
                                            </Button>
                                        </DialogClose>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    );
                })}
            </tr>
        );
    }
    if (category) {
        return (
            <tr className="bg-white border-separate hover:bg-[#ccc] transition-all cursor-pointer">
                {Object.keys(cellData).map((key, idx) => {
                    let text = cellData[key];
                    if (key === 'price') {
                        text = formatCurrency(cellData[key]);
                    } else if (key === 'status') {
                        switch (cellData[key]) {
                            case 0:
                                text = 'Still Available';
                                break;
                            case 1:
                                text = 'Sold Out';
                                break;
                        }
                    } else if (key === 'createdAt' || key === 'updatedAt' || key.includes('time')) {
                        const dateObj = new Date(cellData[key]);

                        const formattedDate = dateObj.toLocaleDateString('en-US');
                        const formattedTime = dateObj.toLocaleTimeString('en-US');
                        text = `${formattedDate} ${formattedTime}`;
                    }

                    return (
                        <Dialog key={idx}>
                            <DialogTrigger asChild>
                                <td className="border-x pl-2 border-black pr-[8px] first:border-l-0 capitalize last:border-r-0 py-2 text-lg">
                                    <div className="cursor-pointer w-full overflow-hidden">{text}</div>
                                </td>
                            </DialogTrigger>
                            <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px]">
                                <DialogHeader>
                                    <DialogTitle className="capitalize">{cellData['categoryName']}</DialogTitle>
                                    <DialogDescription>
                                        Here, you have the ability to edit or remove the catetory item.
                                    </DialogDescription>
                                </DialogHeader>
                                <div>
                                    <TablePopup category data={cellData} />
                                </div>
                                <DialogFooter>
                                    <div className="flex items-center justify-center gap-x-4">
                                        <DialogClose>
                                            <Button btnType="cancel">
                                                <span>Cancel</span>
                                            </Button>
                                        </DialogClose>
                                        <DialogClose onClick={() => handleUpdateCategories(menuForm)}>
                                            <Button btnType="update">
                                                <span>Update</span>
                                            </Button>
                                        </DialogClose>
                                        <DialogClose onClick={() => handleDeleteCategory(cellData)}>
                                            <Button btnType="delete">
                                                <span>Delete</span>
                                            </Button>
                                        </DialogClose>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    );
                })}
            </tr>
        );
    }
}

export default TableCell;
