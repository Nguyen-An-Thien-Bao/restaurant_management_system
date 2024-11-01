'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function BackwardBtn({
    text,
    direction = 'left',
    className,
}: {
    text?: boolean;
    direction?: 'left' | 'right';
    className?: string;
}) {
    const router = useRouter();

    const handleBackward = () => {
        router.back();
    };

    const handleForward = () => {
        router.forward();
    };

    return direction === 'left' ? (
        <button
            onClick={handleBackward}
            className={`${className} mr-2 flex text-lg lg:text-xl text-secondary-cyan items-center hover:text-primary-cyan cursor-pointer active:text-secondary-cyan`}
        >
            <FaChevronLeft className="" />
            {text && <span className="font-medium">Back</span>}
        </button>
    ) : (
        <button
            onClick={handleForward}
            className={`${className} mr-2 flex text-lg lg:text-xl text-secondary-cyan items-center hover:text-primary-cyan cursor-pointer active:text-secondary-cyan`}
        >
            {text && <span className="font-medium">Forward</span>}
            <FaChevronRight className="" />
        </button>
    );
}

export default BackwardBtn;
