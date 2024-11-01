type dataType = {
    foodName: string;
    categorieId: number;
    price: number;
    image: string;
    status: number;
    description: string;
};

async function getMenu() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}menus`, {
            cache: 'no-cache',
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
        console.error('Failed to fetch the menu:', error.message);
        return { error: 'Failed to fetch menu' };
    }
}

async function postMenu(data: dataType) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}menus/create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}

async function updateMenu(data: dataType) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}menus/update`, {
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

async function deleteMenu(data: dataType) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}menus/delete`, {
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

export { postMenu, getMenu, deleteMenu, updateMenu };
