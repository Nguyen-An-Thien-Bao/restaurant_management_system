import { ReactNode, useState } from 'react';
import MenusContext from '../context/MenusContext';

const initMenuForm = {
    foodName: '',
    categorieId: 1,
    price: 0,
    image: '',
    status: 0,
    description: '',
};

function MenusProvider({ children }: { children: ReactNode }) {
    const [menuForm, setMenuForm] = useState(initMenuForm);
    return <MenusContext.Provider value={[menuForm, setMenuForm]}>{children}</MenusContext.Provider>;
}

export default MenusProvider;
