'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

const CustomPagination = ({
    totalPages,
    currentPage,
    setCurrentPage,
}: {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        let isMounted = true; // Track if the component is still mounted

        // Get current page from search params or default to 1
        const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string, 10) : 1;

        if (isMounted) {
            setCurrentPage(page);
        }

        // Cleanup function to prevent setting state when component is unmounted
        return () => {
            isMounted = false;
        };
    }, [searchParams]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        // Update URL with new page parameter
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', page.toString());

        // Push the updated URL with new query params
        window.history.pushState({}, '', `${pathname}?${newParams.toString()}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handlePageNext = () => {
        if (currentPage === totalPages) {
            return;
        }
        setCurrentPage(currentPage + 1);

        // Update URL with new page parameter
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', (currentPage + 1).toString());

        // Push the updated URL with new query params
        window.history.pushState({}, '', `${pathname}?${newParams.toString()}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handlePagePrevious = () => {
        if (currentPage === 1) {
            return;
        }
        setCurrentPage(currentPage - 1);

        // Update URL with new page parameter
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', (currentPage - 1).toString());

        // Push the updated URL with new query params
        window.history.pushState({}, '', `${pathname}?${newParams.toString()}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {/* <p>Current Page: {currentPage}</p> */}
            <div></div>
            <Pagination>
                <PaginationContent>
                    {currentPage !== 1 && (
                        <PaginationItem>
                            <PaginationPrevious onClick={handlePagePrevious}>
                                <PaginationLink></PaginationLink>
                            </PaginationPrevious>
                        </PaginationItem>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => (
                        <PaginationItem key={i + 1}>
                            <PaginationLink
                                onClick={() => handlePageChange(i + 1)}
                                className={`${
                                    currentPage === i + 1 ? 'bg-primary-cyan text-white' : 'bg-white text-black'
                                } mx-2 cursor-pointer active:bg-secondary-cyan `}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    {/* <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem> */}
                    {currentPage !== totalPages && (
                        <PaginationItem>
                            <PaginationNext onClick={handlePageNext} />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default CustomPagination;
