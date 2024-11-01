async function getTableList() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}table`, {
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
        console.error('Failed to fetch the tableLists:', error.message);
        return { error: 'Failed to fetch tableLists' };
    }
}

async function postTable(data: any) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}table/create`, {
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

async function updateTable(data: any) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}table/update`, {
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

async function deleteTable(data: any) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}table/delete`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error: any) {
        console.error('Failed to delete the table:', error.message);
        return { error: 'Failed to delete table' };
    }
}

export { getTableList, updateTable, deleteTable, postTable };
