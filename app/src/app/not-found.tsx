'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const router = useRouter();
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            router.back();
        }
    }, [count]);

    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <p>{count}</p>
        </div>
    );
}
