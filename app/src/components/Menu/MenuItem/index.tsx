'use client';
import Image from 'next/image';
import formatCurrency from '@/utils/currencyFormat';
import { RiAddBoxLine } from 'react-icons/ri';
import { useState } from 'react';
import sampleImage from '../../../asset/image/puttanesca-cfb4e42.webp';

type dishType = {
    id: string;
    foodName: string;
    price: string;
    description: string;
    categorieId: number;
    image: null;
    status: number;
    createdAt: string;
    updatedAt: string;
    categorieData: {
        categoryName: string;
    };
};

function MenuItem({ dishData, staticItem }: { dishData: dishType; staticItem?: boolean }) {
    const [numberOfItem, setNumberOfItem] = useState(0);

    const handleIncrement = () => {
        if (staticItem) {
            return;
        }
        setNumberOfItem((prev) => (prev += 1));
    };

    const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof e.target.value === 'string') {
            setNumberOfItem((prev) => prev);
            return;
        }
        setNumberOfItem(+e.target.value);
    };

    return (
        <div className="flex border-b-[1.5px] border-black mb-2 select-none pb-3">
            <div className="w-[60px] aspect-square relative rounded-lg overflow-hidden">
                <Image
                    src={sampleImage}
                    priority
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="pl-4 w-full flex justify-center items-center">
                <div className="w-full flex-col">
                    <h2 className="capitalize font-semibold">{dishData.foodName}</h2>
                    <span>{formatCurrency(+dishData.price)}</span>
                </div>
                {staticItem ? (
                    <span className="w-5 h-5 shrink-0 text-center block mr-4 outline-none">{numberOfItem}</span>
                ) : (
                    <input
                        value={numberOfItem}
                        onChange={handleOnInput}
                        className="w-5 h-5 shrink-0 text-center block mr-4 outline-none"
                    />
                )}
                {staticItem ? (
                    <></>
                ) : (
                    <button
                        onClick={handleIncrement}
                        className="text-2xl hover:text-secondary-cyan active:text-primary-cyan"
                    >
                        <RiAddBoxLine />
                    </button>
                )}
            </div>
        </div>
    );
}

export default MenuItem;
