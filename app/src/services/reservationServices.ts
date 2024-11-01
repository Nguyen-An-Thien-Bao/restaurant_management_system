async function getReservations() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}reservation`, {
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
        console.error('Failed to fetch the reservations:', error.message);
        return { error: 'Failed to fetch reservations' };
    }
}

async function postReservation(data: any) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}reservation/create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error: any) {
        console.error('Failed to post the reservation:', error.message);
        return { error: 'Failed to post reservation' };
    }
}

async function updateReservation(data: any) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}reservation/update`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error: any) {
        console.error('Failed to update the reservation:', error.message);
        return { error: 'Failed to update reservation' };
    }
}

async function deleteReservation(data: any) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}reservation/delete`, {
            method: 'Delete',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json());
    } catch (error: any) {
        console.error('Failed to delete the reservation:', error.message);
        return { error: 'Failed to delete reservation' };
    }
}

export { getReservations, postReservation, updateReservation, deleteReservation };
