import React from 'react'
import Sidenavbar from '../../components/sidenavbar/Sidenavbar';
import Box from '@mui/material/Box';
import Navbar from '../../components/navbar/Navbar'
import List from './List';

const Settings = () => {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenavbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                       <List/>

                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Settings
