'use client';
import React, { useContext, useEffect, useState } from 'react';
import { reservationType } from '@/components/Table/TableCell';
import DialogTriggerCustomize from '@/components/Dialog/DialogTriggerCustomize';
import { postReservation } from '@/services/reservationServices';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/Button';
import { TableContext } from '@/context/TableProvider';
import { getTableList } from '@/services/tablesServices';

const initReservationForm = {
    id: 0,
    tableID: 0,
    accountID: 0,
    reservation_time: '',
    actual_arrival_time: '',
    guest_count: 0,
    contact_info: '',
    status: 'Confirmed',
};

function ReservationForm() {
    const [reservationForm, setReservationForm] = useState(initReservationForm);
    const { tableList, setTableList } = useContext(TableContext);
    const [error, setError] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    useEffect(() => {
        const fetchTableList = async () => {
            const res = await getTableList();
            setTableList(res);
        };
        fetchTableList();
    }, []);

    const handleCreateReservation = () => {
        const date = new Date();
        postReservation(reservationForm)
            .then(() => router.refresh())
            .then((res) => {
                console.log(res);
                toast({
                    title: 'Create Reservation Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };
    return (
        <Dialog>
            <div>
                <DialogTriggerCustomize title="Create New Reservation" createType />
            </div>
            <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px]">
                <DialogHeader>
                    <DialogTitle>Create New Reservation</DialogTitle>
                    <DialogDescription>
                        Create your new reservation here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <form className="col-span-1">
                        <label className="inline-block capitalize">tableID:</label>
                        <select
                            value={reservationForm.tableID}
                            onChange={(e) =>
                                setReservationForm((prev: reservationType) => ({
                                    ...prev,
                                    tableID: +e.target.value,
                                }))
                            }
                            className="border border-black w-full"
                            name="reservationStatus"
                            id="reservationStatus"
                        >
                            {tableList &&
                                tableList.map((ele: any, idx: number) => (
                                    <option key={idx} value={ele.id}>
                                        Table {ele.id}
                                    </option>
                                ))}
                        </select>
                        <br />
                        <label className="inline-block capitalize">accountID:</label>
                        <input
                            value={reservationForm.accountID || 0}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                if (inputValue === '' || !isNaN(Number(inputValue))) {
                                    setError(false);
                                    setReservationForm((prev: reservationType) => ({
                                        ...prev,
                                        accountID: inputValue === '' ? 0 : +inputValue,
                                    }));
                                } else {
                                    setError(true);
                                }
                            }}
                            className="border border-black w-full"
                            type="text"
                        />
                        <br />
                        <label className="inline-block w-[100px] capitalize">reservation_time:</label>
                        <input
                            value={reservationForm.reservation_time}
                            onChange={(e) =>
                                setReservationForm((prev: reservationType) => ({
                                    ...prev,
                                    reservation_time: e.target.value,
                                }))
                            }
                            className="border border-black w-full"
                            type="datetime-local"
                        />
                        <br />
                        <label className="inline-block w-[100px] capitalize">actual_arrival_time:</label>
                        <input
                            value={reservationForm.actual_arrival_time}
                            onChange={(e) =>
                                setReservationForm((prev: reservationType) => ({
                                    ...prev,
                                    actual_arrival_time: e.target.value,
                                }))
                            }
                            className="border border-black w-full"
                            type="datetime-local"
                        />
                        <br />
                        <label className="inline-block w-[100px] capitalize">guest_count:</label>
                        <input
                            value={reservationForm.guest_count || 0}
                            className="border border-black w-full"
                            type="text"
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                if (inputValue === '' || !isNaN(Number(inputValue))) {
                                    setError(false);
                                    setReservationForm((prev: reservationType) => ({
                                        ...prev,
                                        guest_count: inputValue === '' ? 0 : +inputValue,
                                    }));
                                } else {
                                    setError(true);
                                }
                            }}
                        />
                        <br />
                        <label className="inline-block w-[100px] capitalize">contact info:</label>
                        <input
                            value={reservationForm.contact_info}
                            className="border border-black w-full"
                            type="text"
                            onChange={(e) =>
                                setReservationForm((prev: reservationType) => ({
                                    ...prev,
                                    contact_info: e.target.value,
                                }))
                            }
                        />
                        <br />
                        <label className="inline-block w-[100px] capitalize">status:</label>
                        <select
                            value={reservationForm.status}
                            onChange={(e) =>
                                setReservationForm((prev: reservationType) => ({
                                    ...prev,
                                    status: e.target.value,
                                }))
                            }
                            className="border border-black w-full"
                            name="reservationStatus"
                            id="reservationStatus"
                        >
                            <option value="Confirmed">Confirmed</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Arrived">Arrived late</option>
                            <option value="Checked in">Checked in</option>
                        </select>
                        {error && (
                            <p className="text-red-700">
                                Noted: TableID, AccountID, Guest Count must be a number, not contains character
                            </p>
                        )}
                    </form>
                </div>
                <DialogFooter>
                    <div className="flex items-center justify-center gap-x-4">
                        <DialogClose>
                            <Button btnType="cancel">
                                <span>cancel</span>
                            </Button>
                        </DialogClose>
                        <DialogClose onClick={handleCreateReservation}>
                            <Button btnType="create">
                                <span>Create</span>
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ReservationForm;
