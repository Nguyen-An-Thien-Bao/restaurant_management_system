import Image from 'next/image';
import sampleImage from '../../asset/image/puttanesca-cfb4e42.webp';
import formatCurrency from '@/utils/currencyFormat';

function OrderItem({ desc }: { desc?: boolean }) {
    return (
        <div className="py-3 border-b-[1px] border-black">
            <div className="flex items-center w-full">
                <div className="w-16 aspect-square relative">
                    <Image
                        src={sampleImage}
                        alt=""
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        className="rounded-xl"
                    />
                </div>

                <div className="ml-4 py-2 w-full">
                    <h2 className="font-semibold capitalize">Spaghetti puttanesca</h2>
                    <p>{formatCurrency(120000)}</p>
                </div>
                <div className="">
                    <span className="block w-6 text-center aspect-square border-[1.5px] border-black">1</span>
                </div>
            </div>
            {desc && (
                <div>
                    <h5 className="font-bold">Noted:</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            )}
        </div>
    );
}

export default OrderItem;
