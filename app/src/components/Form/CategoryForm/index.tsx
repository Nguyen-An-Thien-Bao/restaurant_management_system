'use-client';
import { useState } from 'react';
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
import { categoryType } from '@/components/Table/TableCell';
import { useRouter } from 'next/navigation';
import { postCategories } from '@/services/categoriesServices';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/Button';

const initCategoryForm = {
    categoryName: '',
    parent_category_ID: 0,
    status: 0,
};

function CategoryForm() {
    const router = useRouter();
    const [categoryForm, setCategoryForm] = useState(initCategoryForm);
    const { toast } = useToast();
    const [error, setError] = useState(false);

    const handleCreateCategory = async () => {
        postCategories({ ...categoryForm })
            .then(() => router.refresh())
            .then(() => {
                const date = new Date();
                toast({
                    title: 'Create Category Success',
                    description: `${date.toLocaleString('en-US')}`,
                });
            });
    };

    return (
        <Dialog>
            <div>
                <DialogTriggerCustomize title="Create New Category" createType />
            </div>
            <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px]">
                <DialogHeader>
                    <DialogTitle>Create New Category</DialogTitle>
                    <DialogDescription>Create your new category here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <form className="col-span-1">
                        <label className="inline-block capitalize">Category Name:</label>
                        <input
                            value={categoryForm.categoryName}
                            onChange={(e) =>
                                setCategoryForm((prev: categoryType) => ({
                                    ...prev,
                                    categoryName: e.target.value,
                                }))
                            }
                            className="border border-black w-full"
                            type="text"
                        />
                        <br />

                        <label className="inline-block capitalize">Parent Category ID:</label>
                        <input
                            className="border border-black w-full"
                            value={categoryForm.parent_category_ID}
                            type="text"
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                if (inputValue === '' || !isNaN(Number(inputValue))) {
                                    setError(false);
                                    setCategoryForm((prev: categoryType) => ({
                                        ...prev,
                                        parent_category_ID: inputValue === '' ? 0 : +inputValue,
                                    }));
                                } else {
                                    setError(true);
                                }
                            }}
                        />

                        <label className="inline-block capitalize">status:</label>
                        <select
                            onChange={(e) =>
                                setCategoryForm((prev: categoryType) => ({ ...prev, status: +e.target.value }))
                            }
                            className="border border-black w-full"
                            name="categoryStatus"
                            id="categoryStatus"
                            value={categoryForm.status}
                        >
                            <option value="0">Still Available</option>
                            <option value="1">Sold Out</option>
                        </select>
                        <br />
                    </form>
                    {error && (
                        <p className="text-red-700">
                            Noted: Parent Category ID must be a number, not contains character
                        </p>
                    )}
                </div>
                <DialogFooter>
                    <div className="flex items-center justify-center gap-x-4">
                        <DialogClose>
                            <Button btnType="cancel">
                                <span>cancel</span>
                            </Button>
                        </DialogClose>
                        <DialogClose onClick={handleCreateCategory}>
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

export default CategoryForm;
