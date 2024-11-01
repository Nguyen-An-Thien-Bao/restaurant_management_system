import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';

function Tooltips({
    children,
    description,
    className,
}: {
    children: React.ReactNode;
    description: string;
    className?: string;
}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={className}>{children}</TooltipTrigger>
                <TooltipContent>
                    <p className="capitalize">{description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default Tooltips;
