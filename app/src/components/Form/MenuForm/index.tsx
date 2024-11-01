'use-client';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import DialogTriggerCustomize from '@/components/Dialog/DialogTriggerCustomize';
import { useContext, useEffect, useState } from 'react';
import { postMenu } from '@/services/menuServices';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { getCategories } from '@/services/categoriesServices';
import { TableContext } from '@/context/TableProvider';
import Button from '@/components/Button';

const initMenuForm = {
    foodName: '',
    categorieId: 1,
    price: 0,
    image: '',
    status: 0,
    description: '',
};

function MenuForm() {
    const router = useRouter();
    const { toast } = useToast();
    const [menuForm, setMenuForm] = useState(initMenuForm);
    const [error, setError] = useState(false);
    const { menuCategory, setMenuCategory } = useContext(TableContext);

    useEffect(() => {
        const categoryList = async () => {
            const res = await getCategories();
            setMenuCategory(res);
        };
        categoryList();
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFormCallback: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormCallback((prev: any) => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCreateMenu = () => {
        postMenu({ ...menuForm })
            .then(() => router.refresh())
            .then(() => {
                const date = new Date();
                toast({
                    title: 'Create Menu Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    return (
        <Dialog>
            <div>
                <DialogTriggerCustomize title="Create New Dish" createType />
                {/* <FilterBtn /> */}
            </div>
            <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px]">
                <DialogHeader>
                    <DialogTitle>Create New Dish</DialogTitle>
                    <DialogDescription>Create your new dish here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <form>
                        <label className="inline-block capitalize">name:</label>
                        <input
                            value={menuForm.foodName}
                            onChange={(e) => setMenuForm((prev) => ({ ...prev, foodName: e.target.value }))}
                            className="border border-black w-full"
                            type="text"
                        />
                        <br />

                        <label className="inline-block capitalize">price:</label>
                        <input
                            className="border border-black w-full"
                            value={menuForm.price || 0}
                            type="text"
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                if (inputValue === '' || !isNaN(Number(inputValue))) {
                                    setError(false);
                                    setMenuForm((prev: any) => ({
                                        ...prev,
                                        price: inputValue === '' ? 0 : +inputValue,
                                    }));
                                } else {
                                    setError(true);
                                }
                            }}
                        />
                        <br />
                        {error && <p className="text-red-700">Noted: Price must be a number, not contains character</p>}

                        <label className="inline-block capitalize">description:</label>
                        <textarea
                            style={{ resize: 'none' }}
                            value={menuForm.description}
                            onChange={(e) => setMenuForm((prev) => ({ ...prev, description: e.target.value }))}
                            className="border border-black w-full"
                            name=""
                            id=""
                        ></textarea>
                        <br />

                        <label className="inline-block capitalize">category:</label>
                        <select
                            onChange={(e) => setMenuForm((prev) => ({ ...prev, categorieId: +e.target.value }))}
                            className="border border-black w-full capitalize"
                            name="category"
                            id="category"
                        >
                            {menuCategory &&
                                menuCategory.map((ele: any, idx: number) => (
                                    <option className="capitalize" key={idx} value={ele.id}>
                                        {ele.categoryName}
                                    </option>
                                ))}
                        </select>
                        <br />

                        <label className="inline-block capitalize">status:</label>
                        <select
                            onChange={(e) => setMenuForm((prev) => ({ ...prev, status: +e.target.value }))}
                            className="border border-black w-full"
                            name="status"
                            id="status"
                            value={menuForm.status}
                        >
                            <option value="0">Still Available</option>
                            <option value="1">Sold Out</option>
                        </select>
                        <br />

                        <label className="inline-block capitalize">images:</label>
                        <input
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, setMenuForm)}
                            className="border border-black w-full"
                            type="file"
                        />
                        <br />
                    </form>
                </div>
                <DialogFooter>
                    <div className="flex items-center justify-center gap-x-4">
                        <DialogClose>
                            <Button btnType="cancel">
                                <span>cancel</span>
                            </Button>
                        </DialogClose>
                        <DialogClose onClick={handleCreateMenu}>
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

export default MenuForm;
