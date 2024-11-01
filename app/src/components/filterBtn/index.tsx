'use client';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Paper } from '@mui/material';
import { RiFilter2Line } from 'react-icons/ri';

export default function FilterBtn() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex justify-end">
            <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="flex justify-center items-center text-black bg-primary-gray border-[1.5px] border-black rounded-sm py-1 px-5 outline-none"
            >
                <RiFilter2Line className="mr-1" />
                Filter
            </button>
            <Paper>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className="w-[180px] capitalize">
                        <MenuItem onClick={handleClose}>availabity</MenuItem>
                        <MenuItem onClick={handleClose}>in reservation</MenuItem>
                        <MenuItem onClick={handleClose}>in serve</MenuItem>
                    </div>
                </Menu>
            </Paper>
        </div>
    );
}
