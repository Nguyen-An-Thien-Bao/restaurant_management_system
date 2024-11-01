'use client';
import BackwardBtn from '@/components/BackwardBtn';
import formatCurrency from '@/utils/currencyFormat';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

function WaiterCheckoutDetail({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { toast } = useToast();

    const handleCheckout = async () => {
        const date = new Date();
        toast({
            title: `Confirm Checkout Table ${params.id}`,
            description: `${date.toLocaleString()}`,
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        router.back();
    };
    return (
        <div className="px-4">
            <div className="sticky flex justify-center border-b-[1.5px] border-[#ccc] py-2">
                <span className="absolute left-0">
                    <BackwardBtn text />
                </span>
                <h1 className="font-semibold text-xl text-center">Table {params.id}</h1>
            </div>
            <div className="mt-8">
                <p>Created at: 19:30 - 07/10/2024</p>
                <div className="mt-2">
                    <table className="w-full">
                        <thead>
                            <tr className="capitalize">
                                <th className={'border border-black'}>.No</th>
                                <th className={'border border-black w-full text-left px-2'}>dish name</th>
                                <th className={'border border-black w-2/10 px-1'}>Qty</th>
                                <th className={'border border-black'}>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={'px-2 py-1 border text-center border-black'}>1</td>
                                <td className={'px-2 py-1 border border-black'}>Pizza</td>
                                <td className={'px-2 py-1 border border-black text-center'}>2</td>
                                <td className={'px-2 py-1 border border-black'}>{formatCurrency(200000)}</td>
                            </tr>
                            <tr>
                                <td className={'px-2 py-1 border text-center border-black'}>1</td>
                                <td className={'px-2 py-1 border border-black'}>Pizza</td>
                                <td className={'px-2 py-1 border border-black text-center'}>2</td>
                                <td className={'px-2 py-1 border border-black'}>{formatCurrency(200000)}</td>
                            </tr>
                            <tr>
                                <td className={'px-2 py-1 border text-center border-black'}>1</td>
                                <td className={'px-2 py-1 border border-black'}>Pizza</td>
                                <td className={'px-2 py-1 border border-black text-center'}>2</td>
                                <td className={'px-2 py-1 border border-black'}>{formatCurrency(200000)}</td>
                            </tr>
                            <tr>
                                <td className={'px-2 py-1 border text-center border-black'}>1</td>
                                <td className={'px-2 py-1 border border-black'}>Pizza</td>
                                <td className={'px-2 py-1 border border-black text-center'}>2</td>
                                <td className={'px-2 py-1 border border-black'}>{formatCurrency(200000)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <div className="flex">
                            <p className="font-bold mr-1 w-12">Tax:</p>
                            <span>{formatCurrency(800000)}</span>
                        </div>
                        <div className="flex mt-1">
                            <p className="font-bold mr-1 w-12">Totals:</p>
                            <span>{formatCurrency(800000)}</span>
                        </div>

                        <div className="mt-2">
                            <button
                                className="py-2 font-semibold rounded-lg px-4 bg-secondary-cyan hover:bg-primary-cyan outline-none text-white"
                                onClick={handleCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaiterCheckoutDetail;
