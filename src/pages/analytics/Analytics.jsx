import React from 'react'
import Sidenavbar from '../../components/sidenavbar/Sidenavbar';
import Box from '@mui/material/Box';
import Navbar from '../../components/navbar/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../../Dash.css'
import GeoChart from '../../charts/GeoChart'
import PieChart from '../../charts/PieChart'
import HBarChart from '../../charts/HBarChart'
import CountUp from 'react-countup';



const Analytics = () => {
    return (
        <>
            < div className='bgcolor'>
                <Navbar />
                <Box height={50} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenavbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Stack spacing={4} direction="row" margin={2}>
                                    <Card sx={{ maxWidth: 70 + "%", height: 150, }} className='gradient'>
                                        <CardContent>
                                            <Typography gutterBottom variant="body" component="div" sx={{ color: "white" }}>
                                                Visitors
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                <CountUp delay={0.2} end={22000} duration={0.3} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Since last week
                                            </Typography>

                                        </CardContent>
                                    </Card>

                                    <Card sx={{ maxWidth: 70 + "%", height: 150, }} className='gradientlight'>
                                        <CardContent>
                                            <Typography gutterBottom variant="body" component="div" sx={{ color: "white" }}>
                                                Visitors
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                <CountUp delay={0.4} end={12000} duration={0.2} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Since last week
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                                <Stack spacing={4} direction="row" margin={2}>
                                    <Card sx={{ maxWidth: 70 + "%", height: 150, }} className='gradient'>
                                        <CardContent>
                                            <Typography gutterBottom variant="body" component="div" sx={{ color: "white" }}>
                                                Visitors
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                <CountUp delay={0.3} end={38000} duration={0.5} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Since last week
                                            </Typography>

                                        </CardContent>
                                    </Card>

                                    <Card sx={{ maxWidth: 70 + "%", height: 150, }} className='gradientlight'>
                                        <CardContent>
                                            <Typography gutterBottom variant="body" component="div" sx={{ color: "white" }}>
                                                Visitors
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                <CountUp delay={0.4} end={59400} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Since last week
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            {/* --------------------------------------------------------------------------- */}
                            <Grid item xs={4}>
                                <Stack spacing={2} >
                                    <Card sx={{ height: 40 + "vh", minWidth: 1060 + "px" }} className=''>
                                        <CardContent><HBarChart /></CardContent>
                                    </Card>

                                </Stack>
                            </Grid>

                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <PieChart />
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

export default Analytics
