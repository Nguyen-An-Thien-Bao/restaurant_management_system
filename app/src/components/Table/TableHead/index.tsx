// { title: string; className?: string }[]
function TableHead({ headList }: { headList: { title: string; className?: string }[] }) {
    return (
        <thead className="bg-white select-none">
            <tr className="capitalize text-left">
                {Object.keys(headList[0]).map((ele, idx) => {
                    const text = ele.includes('_') ? ele.split('_').join(' ') : ele;
                    return (
                        <th
                            key={idx}
                            className={` border-x pl-2 border-black first:border-l-0 last:border-r-0 py-2 text-lg`}
                        >
                            {text}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

export default TableHead;
