'use client';
import React, { useState } from 'react';
import TableHead from './TableHead';
import TableCell from './TableCell';
import FilterBtn from '../filterBtn';
import MenusProvider from '@/provider/MenusContext';

import CustomPagination from '../Pagination';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import MenuForm from '../Form/MenuForm';
import ReservationForm from '../Form/ReservationForm';
import CategoryForm from '../Form/CategoryForm';
import TableProvider from '@/provider/TableProvider';

function Table({
    data,
    menu = false,
    reservation = false,
    category = false,
}: {
    data: any;
    menu?: boolean;
    reservation?: boolean;
    category?: boolean;
}) {
    const router = useRouter();
    const { toast } = useToast();
    const [error, setError] = useState(false);

    const [numberOfItemPerPage, setNumberOfItemPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    let usageData = data;

    const numberOfPagination = Math.ceil(usageData.length / numberOfItemPerPage);
    const lastItem = currentPage * numberOfItemPerPage;
    const firstItem = lastItem - numberOfItemPerPage;
    let dataList = usageData.slice(firstItem, lastItem);

    return (
        <TableProvider>
            {menu && <MenuForm />}

            {reservation && <ReservationForm />}

            {category && <CategoryForm />}

            <div className="overflow-x-auto">
                <table className="w-full border-spacing-y-3 border-separate">
                    <TableHead headList={usageData} />
                    <tbody>
                        {dataList.map((ele: any, idx: number) => (
                            <MenusProvider key={idx}>
                                <TableCell cellData={ele} menu={menu} category={category} reservation={reservation} />
                            </MenusProvider>
                        ))}
                    </tbody>
                </table>
            </div>
            <CustomPagination
                totalPages={numberOfPagination}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </TableProvider>
    );
}

export default Table;
