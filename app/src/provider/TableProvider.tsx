import { ReactNode, useState } from 'react';
import { TableContext } from '../context/TableProvider';

function TableProvider({ children }: { children: ReactNode }) {
    const [menuCategory, setMenuCategory] = useState([]);
    const [tableList, setTableList] = useState([]);
    return (
        <TableContext.Provider value={{ menuCategory, setMenuCategory, tableList, setTableList }}>
            {children}
        </TableContext.Provider>
    );
}

export default TableProvider;
