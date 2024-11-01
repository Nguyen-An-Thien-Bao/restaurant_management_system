import { useContext, useEffect, useState } from 'react';
import { categoryType, menuType } from '../TableCell';
import MenusContext from '@/context/MenusContext';
import { reservationType } from '../TableCell';
import { TableContext } from '@/context/TableProvider';

function TablePopup({
    data,
    menu = false,
    reservation = false,
    category = false,
}: {
    data: menuType | reservationType | categoryType;
    menu?: boolean;
    reservation?: boolean;
    category?: boolean;
}) {
    const [form, setForm] = useContext(MenusContext);
    const [error, setError] = useState(false);
    const { menuCategory, tableList } = useContext(TableContext);

    useEffect(() => {
        setForm(data);
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prev: menuType) => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    if (menu) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
                <form className="col-span-1">
                    <label className="inline-block  capitalize">name:</label>
                    <input
                        value={form.foodName}
                        onChange={(e) => setForm((prev: menuType) => ({ ...prev, foodName: e.target.value }))}
                        className="border border-black w-full"
                        type="text"
                    />
                    <br />

                    <label className="inline-block  capitalize">price:</label>
                    <input
                        value={form.price ?? 0}
                        className="border border-black w-full"
                        type="text"
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            if (inputValue === '' || !isNaN(Number(inputValue))) {
                                setError(false);
                                setForm((prev: menuType) => ({
                                    ...prev,
                                    price: inputValue === '' ? null : +inputValue,
                                }));
                            } else {
                                setError(true);
                            }
                        }}
                    />
                    <br />

                    <label className="inline-block w-[100px] capitalize">description:</label>
                    <textarea
                        onChange={(e) => setForm((prev: menuType) => ({ ...prev, description: e.target.value }))}
                        style={{ resize: 'none' }}
                        value={form.description}
                        className="border border-black w-full"
                        name=""
                        id=""
                    ></textarea>
                    <br />

                    <label className="inline-block w-[100px] capitalize">category:</label>
                    <select
                        value={form.categorieId}
                        onChange={(e) => setForm((prev: menuType) => ({ ...prev, categorieId: +e.target.value }))}
                        className="border border-black w-full"
                        name="category"
                        id="category"
                    >
                        {menuCategory.map((ele: any, idx: any) => (
                            <option value={ele.id} key={idx} className="capitalize">
                                {ele.categoryName}
                            </option>
                        ))}
                    </select>
                    <br />

                    <label className="inline-block w-[100px] capitalize">status:</label>
                    <select
                        value={form.status}
                        onChange={(e) => setForm((prev: menuType) => ({ ...prev, status: +e.target.value }))}
                        className="border border-black w-full"
                        name="category"
                        id="category"
                    >
                        <option value="0">Still Available</option>
                        <option value="1">Sold Out</option>
                    </select>
                    <br />

                    <label className="inline-block w-[100px] capitalize">images:</label>
                    <input
                        // value={form.image}
                        accept="image/*"
                        onChange={handleFileChange}
                        className="border border-black w-full"
                        type="file"
                    />
                    <br />
                    {error && <p className="text-red-700">Noted: Price must be a number, not contains character</p>}
                </form>
                <div className="col-span-1 mt-4 md:mt-0">
                    <div className="flex justify-center relative top-2/4 -translate-y-2/4 aspect-square items-center border-2 border-dashed rounded-xl border-black">
                        {form.image === null ? (
                            <h2>No Image</h2>
                        ) : (
                            <img src={form.image} className="aspect-square border rounded-xl" alt="" />
                        )}
                    </div>
                </div>
            </div>
        );
    }

    if (reservation) {
        return (
            <form className="col-span-1">
                <label className="inline-block w-[100px] capitalize">tableID:</label>
                <select
                    value={form.tableID}
                    onChange={(e) =>
                        setForm((prev: reservationType) => ({
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
                <label className="inline-block w-[100px] capitalize">accountID:</label>
                <input
                    value={form.accountID ?? 0}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        if (inputValue === '' || !isNaN(Number(inputValue))) {
                            setError(false);
                            setForm((prev: reservationType) => ({
                                ...prev,
                                accountID: inputValue === '' ? null : +inputValue,
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
                    value={form.reservation_time}
                    onChange={(e) =>
                        setForm((prev: reservationType) => ({ ...prev, reservation_time: e.target.value }))
                    }
                    className="border border-black w-full"
                    type="datetime-local"
                />
                <br />

                <label className="inline-block w-[100px] capitalize">actual_arrival_time:</label>
                <input
                    value={form.actual_arrival_time}
                    onChange={(e) =>
                        setForm((prev: reservationType) => ({ ...prev, actual_arrival_time: e.target.value }))
                    }
                    className="border border-black w-full"
                    type="datetime-local"
                />
                <br />

                <label className="inline-block w-[100px] capitalize">guest_count:</label>
                <input
                    value={form.guest_count ?? 0}
                    className="border border-black w-full"
                    type="text"
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        if (inputValue === '' || !isNaN(Number(inputValue))) {
                            setError(false);
                            setForm((prev: reservationType) => ({
                                ...prev,
                                guest_count: inputValue === '' ? null : +inputValue,
                            }));
                        } else {
                            setError(true);
                        }
                    }}
                />
                <br />

                <label className="inline-block w-[100px] capitalize">contact info:</label>
                <input
                    value={form.contact_info || ''}
                    disabled
                    className="border border-black w-full"
                    type="text"
                    // onChange={(e) => setForm((prev: reservationType) => ({ ...prev, contact_info: e.target.value }))}
                />
                <br />

                <label className="inline-block w-[100px] capitalize">status:</label>
                <select
                    value={form.status}
                    onChange={(e) => setForm((prev: reservationType) => ({ ...prev, status: e.target.value }))}
                    className="border border-black w-full"
                    name="category"
                    id="category"
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
        );
    }

    if (category) {
        return (
            <form className="col-span-1">
                <label className="inline-block capitalize">category name:</label>
                <input
                    value={form.categoryName || ''}
                    onChange={(e) => setForm((prev: categoryType) => ({ ...prev, categoryName: e.target.value }))}
                    className="border border-black w-full"
                    type="text"
                />
                <br />

                <label className="inline-block capitalize">parent category ID:</label>
                <input
                    value={form.parent_category_ID ?? 0}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        if (inputValue === '' || !isNaN(Number(inputValue))) {
                            setError(false);
                            setForm((prev: categoryType) => ({
                                ...prev,
                                parent_category_ID: inputValue === '' ? null : +inputValue,
                            }));
                        } else {
                            setError(true);
                        }
                    }}
                    className="border border-black w-full"
                    type="text"
                />
                <br />

                <label className="inline-block capitalize">status:</label>
                <select
                    onChange={(e) => setForm((prev: categoryType) => ({ ...prev, status: +e.target.value }))}
                    className="border border-black w-full"
                    name="categoryStatus"
                    id="categoryStatus"
                    value={form.status}
                >
                    <option value={0}>Still Available</option>
                    <option value={1}>Sold Out</option>
                </select>
                <br />
                {error && (
                    <p className="text-red-700">Noted: Parent Category ID must be a number, not contains character</p>
                )}
            </form>
        );
    }
}

export default TablePopup;
