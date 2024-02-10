import React from 'react';
import { Link } from "react-router-dom";
import './Components.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Stack } from "@mui/material";
//import PersonIcon from '@mui/icons-material/Person';
import SearchBar from './SearchBar';

export default function NavbarHome() {

    return (
        <Stack direction="row" alignItems="center" p={2} sx={{ position:'sticky',top: "0",justifyContent: "space-between" }}>
            <Link to="/home" id='logo' style={{textDecoration:"none"}}>
                    SPLASH
            </Link>
            <SearchBar />
        </Stack>
    )
}