'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { title } from 'process';

const menuTabs = [
    {
        title: 'all',
        index: 0,
    },
    {
        title: 'appertizer',
        index: 1,
    },
    {
        title: 'main course',
        index: 2,
    },
    {
        title: 'desserts',
        index: 3,
    },
    {
        title: 'beverage',
        index: 4,
    },
];

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CategoryBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="bg-secondary-cyan sticky top-0 z-50 text-white">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={true}
                    textColor="inherit"
                    allowScrollButtonsMobile
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                    TabIndicatorProps={{
                        sx: {
                            color: 'primary.light',
                            backgroundColor: 'primary.light',
                            height: 4,
                            width: '100%',
                        },
                    }}
                >
                    {menuTabs.map((ele) => (
                        <Tab
                            key={ele.index}
                            sx={{ fontFamily: 'roboto', fontWeight: 'bold', textTransform: 'capitalize' }}
                            className="font-semibold lg:w-1/5"
                            label={ele.title}
                            {...a11yProps(ele.index)}
                        />
                    ))}
                </Tabs>
            </div>
            {}
            {/* <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel> */}
        </>
    );
}

// function CategoryBar() {
// return (
//     <div className="sticky top-0 z-50">
//         <ul className="flex justify-evenly capitalize h-[30px] leading-[30px] text-white bg-secondary-cyan select-none">
//             <li className="text-nowrap line-clamp-1 transition-all cursor-pointer hover:bg-primary-cyan w-full text-center">
//                 all
//             </li>

//             <li className="text-nowrap line-clamp-1 transition-all cursor-pointer hover:bg-primary-cyan w-full text-center">
//                 <a href="#appertizer">appertizer</a>
//             </li>
//             <li className="text-nowrap line-clamp-1 transition-all cursor-pointer hover:bg-primary-cyan w-full text-center bg-primary-cyan">
//                 main course
//             </li>
//             <li className="text-nowrap line-clamp-1 transition-all cursor-pointer hover:bg-primary-cyan w-full text-center">
//                 dessert
//             </li>
//             <li className="text-nowrap line-clamp-1 transition-all cursor-pointer hover:bg-primary-cyan w-full text-center">
//                 beverage
//             </li>
//         </ul>
//     </div>
// );
// }

// export default CategoryBar;
