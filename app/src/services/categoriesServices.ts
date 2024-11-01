import { categoryType } from '@/components/Table/TableCell';

type dataType = {
    categoryName: string;
    parent_category_ID: number;
    status: number;
};

async function getCategories() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}categories`, {
            next: {
                revalidate: 0,
            },
            method: 'GET',
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.text();
            }
        });
        const result = JSON.parse(res).data;
        return result;
    } catch (error: any) {
        console.error('Failed to fetch the categories:', error.message);
        return { error: 'Failed to fetch categories' };
    }
}

async function postCategories(data: dataType) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}categories/create`, {
            next: {
                revalidate: 0,
            },
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function updateCategories(data: dataType) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}categories/update`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}

async function deleteCategories(data: dataType) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}categories/delete`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}

export { getCategories, postCategories, deleteCategories, updateCategories };
