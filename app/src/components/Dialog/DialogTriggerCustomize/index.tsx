import { DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaPlus } from 'react-icons/fa6';

function DialogTriggerCustomize({ title, createType }: { title: string; createType?: boolean }) {
    return (
        <DialogTrigger asChild className="capitalize">
            <Button className="bg-secondary-cyan hover:bg-primary-cyan">
                {createType && <FaPlus className="mr-2" />}
                {title}
            </Button>
        </DialogTrigger>
    );
}

export default DialogTriggerCustomize;
