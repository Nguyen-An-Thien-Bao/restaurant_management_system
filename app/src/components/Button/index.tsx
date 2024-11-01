import { MdCreateNewFolder, MdFolderDelete } from 'react-icons/md';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { CgFolderRemove } from 'react-icons/cg';
import { MdCancelPresentation } from 'react-icons/md';

function Button({
    btnType,
    children,
}: {
    btnType: 'create' | 'update' | 'delete' | 'cancel';
    children: React.ReactNode;
}) {
    switch (btnType) {
        case 'create':
            return (
                <span
                    className="capitalize py-2 px-4 rounded-lg bg-secondary-cyan transition-all hover:bg-primary-cyan outline-none
            text-white flex items-center"
                >
                    <MdCreateNewFolder className="mr-2" />
                    {children}
                </span>
            );
        case 'delete':
            return (
                <span
                    className="capitalize py-2 px-4 rounded-lg  transition-all bg-[#ff0000] hover:opacity-60 outline-none
            text-white flex items-center"
                >
                    <CgFolderRemove className="mr-2" />
                    {children}
                </span>
            );
        case 'update':
            return (
                <span
                    className="capitalize py-2 px-4 rounded-lg bg-[#2abe1d] hover:opacity-60 transition-all outline-none
            text-white flex items-center"
                >
                    <HiOutlinePencilSquare className="mr-2" />
                    {children}
                </span>
            );
        case 'cancel':
            return (
                <span
                    className="capitalize py-2 px-4 rounded-lg bg-[#c9c9c9] hover:opacity-60 transition-all outline-none
            text-white flex items-center"
                >
                    <MdCancelPresentation className="mr-2" />
                    {children}
                </span>
            );
    }
}
export default Button;
