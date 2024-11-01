import { HiUsers } from 'react-icons/hi2';
import { MdTableBar } from 'react-icons/md';
import Tooltips from '../Tooltips';

type reservationType = {
    id: number;
    tableID: number;
    accountID: number;
    reservation_time: string;
    actual_arrival_time: string;
    guest_count: number;
    contact_info: string;
    status: string;
    createdAt: string;
    updatedAt: string;
};

function ReservationItem({ data }: { data: reservationType }) {
    const time = new Date(data.actual_arrival_time).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: 'numeric',
    });
    return (
        <div className="flex mt-4 select-none items-center pb-3 border-b-[1.5px] border-black">
            <div className="w-[65px] aspect-square rounded-lg bg-secondary-gray flex justify-center items-center">
                <Tooltips description={`${time}`} className="flex items-center w-[35px]">
                    <span className="text-center text-theme-primary font-semibold text-sm">{time}</span>
                </Tooltips>
            </div>
            <div className="pl-4 w-full font-medium text-sm">
                <h3 className="text-sm capitalize">Name: {data.contact_info}</h3>
                <div className="flex items-center">
                    <Tooltips description="number of guests" className="flex items-center w-[35px]">
                        <HiUsers className="mr-1" />
                        <span>{data.guest_count}</span>
                    </Tooltips>
                    <Tooltips description="table number" className="ml-3 flex items-center w-[35px]">
                        <MdTableBar className="mr-1" />
                        <span>{data.tableID}</span>
                    </Tooltips>
                </div>
            </div>
        </div>
    );
}

export default ReservationItem;
