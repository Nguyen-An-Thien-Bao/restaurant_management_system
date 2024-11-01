import CategoryBar from '@/components/Menu/CategoryBar';
import MenuItem from '@/components/Menu/MenuItem';
import Stepper from '@/components/Stepper';
import { getMenu } from '@/services/menuServices';
import formatCurrency from '@/utils/currencyFormat';

async function Menus({ params }: { params: { id: string } }) {
    const menuData = await getMenu();

    return (
        <div className="pb-[60px]">
            <Stepper step={2} left text />
            <CategoryBar />
            <div className="grid px-2 mt-[30px] grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
                {menuData.error ? (
                    <p>Fetching Menu Failed</p>
                ) : (
                    menuData.map(
                        (ele: {
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
                        }) => <MenuItem key={ele.id} dishData={ele} />,
                    )
                )}
            </div>
            <div className="pb-[20px] px-2 mt-4">
                <span className="font-bold">Total:</span>
                <span className="ml-2">{formatCurrency(1200000)}</span>
                <br />
                <button className="py-2 mt-2 rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white">
                    Create Orders
                </button>
            </div>
        </div>
    );
}

export default Menus;
