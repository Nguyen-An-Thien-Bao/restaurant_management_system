import BackwardBtn from '../BackwardBtn';

function Stepper({
    step = 1,
    left = false,
    right = false,
    text = false,
}: {
    step?: number;
    left?: boolean;
    right?: boolean;
    text?: boolean;
}) {
    return (
        <div className="flex select-none py-2 gap-x-2 items-center">
            {left && <BackwardBtn text={text} />}
            <ol className="flex gap-x-2 items-center w-full lg:w-3/5">
                <div className={`w-full ${step === 1 ? 'text-secondary-cyan' : 'text-[#B7B7B7]'}`}>
                    <span className="font-bold text-sm">Tables</span>
                    <li
                        className={`${
                            step === 1 ? 'after:border-secondary-cyan' : 'after:border-[#B7B7B7]'
                        } flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block dark:after:border-blue-800`}
                    ></li>
                </div>
                <div className={`w-full ${step === 2 ? 'text-secondary-cyan' : 'text-[#B7B7B7]'}`}>
                    <span className="font-bold text-sm">Orders</span>
                    <li
                        className={`${
                            step === 2 ? 'after:border-secondary-cyan' : 'after:border-[#B7B7B7]'
                        } flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block dark:after:border-blue-800`}
                    ></li>
                </div>
                <div className={`w-full ${step === 3 ? 'text-secondary-cyan' : 'text-[#B7B7B7]'}`}>
                    <span className="font-bold text-sm">Confirm</span>
                    <li
                        className={`${
                            step === 3 ? 'after:border-secondary-cyan' : 'after:border-[#B7B7B7]'
                        } flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block dark:after:border-blue-800`}
                    ></li>
                </div>
            </ol>
            {right && <BackwardBtn direction="right" text={text} />}
        </div>
    );
}

export default Stepper;
