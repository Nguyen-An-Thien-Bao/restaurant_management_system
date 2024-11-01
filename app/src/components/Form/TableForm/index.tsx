'use client';

import { useToast } from '@/hooks/use-toast';
import { updateTable, postTable } from '@/services/tablesServices';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import Button from '@/components/Button';

type tableType = {
    seating_capacity: number;
    status: string;
};

const initTableForm = {
    seating_capacity: 0,
    status: 'Vacant',
};

function TableForm({ data, formType }: { data: any; formType: 'create' | 'update' }) {
    const [tableForm, setTableForm] = useState(() => {
        switch (formType) {
            case 'create':
                return initTableForm;
            case 'update':
                return data;
        }
    });
    const [error, setError] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const handleUpdateTable = () => {
        const date = new Date();
        updateTable(tableForm)
            .then(() => router.refresh())
            .then(() => {
                toast({
                    title: 'Update Table Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    const handleCreateTable = () => {
        const date = new Date();
        postTable(tableForm)
            .then(() => router.refresh())
            .then(() => {
                toast({
                    title: 'Create Table Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    return (
        <>
            <form className="col-span-1">
                <label className="inline-block capitalize">seating capacity:</label>
                <input
                    className="border border-black w-full"
                    value={tableForm.seating_capacity}
                    type="text"
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        if (inputValue === '' || !isNaN(Number(inputValue))) {
                            setError(false);
                            setTableForm((prev: tableType) => ({
                                ...prev,
                                seating_capacity: inputValue === '' ? 0 : +inputValue,
                            }));
                        } else {
                            setError(true);
                        }
                    }}
                />

                <label className="inline-block capitalize">status:</label>
                <select
                    onChange={(e) => setTableForm((prev: tableType) => ({ ...prev, status: e.target.value }))}
                    className="border border-black w-full"
                    name="categoryStatus"
                    id="categoryStatus"
                    value={tableForm.status}
                >
                    <option value="Occupied">Occupied</option>
                    <option value="Vacant">Vacant</option>
                    <option value="Damaged">Damaged</option>
                    <option value="Removed">Removed</option>
                </select>
                <br />
            </form>
            {error && <p className="text-red-700">Noted: Seating Capacity must be a number, not contains character</p>}
            <DialogFooter>
                <div className="flex items-center justify-center gap-x-4">
                    <DialogClose>
                        <Button btnType="cancel">
                            <span>Cancel</span>
                        </Button>
                    </DialogClose>
                    {formType === 'create' ? (
                        <DialogClose onClick={handleCreateTable}>
                            <Button btnType="create">
                                <span>Create</span>
                            </Button>
                        </DialogClose>
                    ) : (
                        <DialogClose onClick={handleUpdateTable}>
                            <Button btnType="update">
                                <span>Update</span>
                            </Button>
                        </DialogClose>
                    )}
                </div>
            </DialogFooter>
        </>
    );
}

export default TableForm;
