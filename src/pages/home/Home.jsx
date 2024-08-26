import React from 'react'
import Sidenavbar from '../../components/sidenavbar/Sidenavbar';
import Box from '@mui/material/Box';
import Navbar from '../../components/navbar/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../../Dash.css';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../../components/AccorduonDash'
import BarChart from '../../charts/BarChart'
import CountUp from 'react-countup';


const Home = () => {
    return (
        <>
            < div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenavbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                Rs.<CountUp delay={0.2} end={500} duration={0.3} /> L
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earnings
                                            </Typography>

                                        </CardContent>
                                    </Card>

                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                Rs. <CountUp delay={0.2} end={900} duration={0.3} /> L
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total order
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2} >
                                    <Card sx={{ minWidth: 345 }} className='gradientlight'>

                                        <Stack spacing={2} direction="row"  sx={{padding:"8px"}}>
                                            <div>
                                                <StorefrontOutlinedIcon className='iconstyle' />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>Rs.208L</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                    <Card sx={{ minWidth: 345 }}>

                                        <Stack spacing={2} direction="row"  sx={{padding:"8px"}}>
                                            <div >
                                                <StorefrontOutlinedIcon className='iconstyleblack' />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>Rs.208L</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                </Stack>
                            </Grid>

                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 65 + "vh" }}>
                                    <CardContent>
                                        <BarChart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 65 + "vh" }}>
                                    <CardContent>
                                    {/* <div className='paddingall'>
                                                <span className='pricetitle'>Popular Products</span>
                                                
                                            </div> */}

                                        Popular Products
                                        <AccordionDash/>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Home
