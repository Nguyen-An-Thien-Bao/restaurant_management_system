import WarningBox from '../WarningBox';
import ChefOrderItem from './ChefOrderItem';

function OrderGroup({ orders }: { orders: any }) {
    return (
        <div>
            <fieldset className="border-[1.5px] rounded-xl border-black py-2 px-4">
                <legend className="font-bold text-xl capitalize">Table 1</legend>
                <div className="grid gap-2">
                    {orders.map((ele: any, idx: any) => (
                        <WarningBox id={ele.id} key={idx}>
                            <ChefOrderItem data={ele} />
                        </WarningBox>
                    ))}
                </div>
            </fieldset>
        </div>
    );
}

export default OrderGroup;
