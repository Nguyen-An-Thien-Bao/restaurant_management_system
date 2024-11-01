import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { RiErrorWarningLine } from 'react-icons/ri';
import React from 'react';

function WarningBox({ children, id }: { children: React.ReactNode; id: number }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex justify-center items-center">
                        <RiErrorWarningLine className="text-6xl text-red-500" />
                    </div>

                    <DialogTitle className="text-center">Warning {id}</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                {/* <div className="grid gap-4 py-4"></div> */}
                <DialogFooter>
                    <div className="flex w-full justify-center gap-x-4 items-center">
                        <DialogClose asChild>
                            <Button className="outline-none" type="submit">
                                Confirm
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button className="outline-none" type="submit">
                                Cancel
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default WarningBox;
