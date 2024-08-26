import React from 'react'
import Sidenavbar from '../../components/sidenavbar/Sidenavbar';
import Box from '@mui/material/Box';
import Navbar from '../../components/navbar/Navbar'
import ProductList from './ProductList'

const Product = () => {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenavbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <ProductList />

                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Product
