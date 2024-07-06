import { Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo'
import CheckBoxCheckedIcon from "../../assets/icons/CheckBoxCheckedIcon";
import CheckBoxDefaultIcon from '../../assets/icons/CheckBoxDefaultIcon';
import RightImage from "../../assets/images/right-img.png";
import RightImageMobile from "../../assets/images/right-img-mobile.png";
import { HomeWrapperStyled } from '../../styledComponents/HomeWrapperStyled';

const Home = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

    const [openTerms, setOpenTerms] = React.useState(false);
    const handleClickOpenTerms = () => {
        setOpenTerms(true);
        console.log(openTerms);
    };
    const handleCloseTerms = () => {
        setOpenTerms(false);
    };

    const [openPolicy, setOpenPolicy] = React.useState(false);
    const handleClickOpenPolicy = () => {
        setOpenPolicy(true);
        console.log(openPolicy);
    };
    const handleClosePolicy = () => {
        setOpenPolicy(false);
    };

    return (
        <HomeWrapperStyled>
            <Box className="homeInner">
                {/* <Container maxWidth={false}> */}
                <Box className="header">
                    <Container maxWidth={false}>

                        <Link to="/">
                            <Logo />
                        </Link>
                    </Container>
                </Box>
                <Box className="homeMain">
                    <Container maxWidth={false}>
                        <Grid container rowSpacing={2.5} columnSpacing={9.5} alignItems={'center'}>
                            <Grid item xs={12} md={6}>
                                <Box className="homeMainConent">

                                    <Box className="homeMainConent_heading">

                                        <Typography variant='h1'>
                                            Plug & Play
                                        </Typography>
                                        <Typography variant='h6'>
                                            Say goodbye to boring events!
                                        </Typography>
                                        <Typography variant='body1'>
                                            Don’t just host events, create experiences. Explore the future with us.
                                        </Typography>
                                    </Box>
                                    <Box className="homeForm">

                                        <form onSubmit={(e) => { e.preventDefault() }}>
                                            <Box className="homeFormInput">
                                                <TextField onFocus={handleOnFocus} onBlur={handleBlur} fullWidth placeholder='REGISTER WITH your email address' variant="outlined" />
                                                <Button type='submit' className={isFocused === true ? "homeFormSubmitBtn hoverSubmit" : "homeFormSubmitBtn"}>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 9.49997H12.17L7.29 14.38C6.9 14.77 6.9 15.41 7.29 15.8C7.68 16.19 8.31 16.19 8.7 15.8L15.29 9.20997C15.68 8.81997 15.68 8.18997 15.29 7.79997L8.71 1.19997C8.32 0.809971 7.69 0.809971 7.3 1.19997C6.91 1.58997 6.91 2.21997 7.3 2.60997L12.17 7.49997H1C0.45 7.49997 0 7.94997 0 8.49997C0 9.04997 0.45 9.49997 1 9.49997Z" fill="black" />
                                                    </svg>
                                                </Button>
                                            </Box>

                                            <FormControlLabel control={<Checkbox icon={<CheckBoxDefaultIcon />} checkedIcon={<CheckBoxCheckedIcon />} />} label={<>By signing up for the newsletter I agree to the <Button onClick={handleClickOpenTerms}>Terms and Conditions</Button> and <Button onClick={handleClickOpenPolicy}>Privacy Policy</Button>.</>} />
                                        </form>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: { md: 'block', xs: 'none' } }}>
                                <Box className='imageColumn'>
                                    <figure>
                                        <img src={RightImage} alt="" />
                                    </figure>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Box className='imageColumn_Mobile' sx={{ display: { xs: 'block', md: 'none' } }}>
                                    <figure>
                                        <img src={RightImageMobile} alt="" />
                                    </figure>
                                </Box>
                </Box>
                <Box className="footer">
                    <Container maxWidth={false}>
                        <Typography variant='body1'>
                            2023 PlayWall. All rights reserved
                        </Typography>
                    </Container>
                </Box>
                {/* </Container> */}
            </Box>

            {/* terms and conditions modal */}
            <Dialog
                open={openTerms}
                onClose={handleCloseTerms}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                PaperProps={{
                    style: {
                        background: 'linear-gradient(135.19deg, rgb(180, 0, 255) -50%, rgba(0, 0, 0, 0) 100%) left top / cover no-repeat rgb(0, 0, 0)',
                        backgroundColor: '#000',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                    }
                }}
            >
                <DialogTitle>Terms and Conditions</DialogTitle>
                <DialogContent dividers>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTerms}>Close</Button>
                </DialogActions>
            </Dialog>
            {/* policy modal */}
            <Dialog
                open={openPolicy}
                onClose={handleClosePolicy}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                PaperProps={{
                    style: {
                        background: 'linear-gradient(135.19deg, rgb(180, 0, 255) -50%, rgba(0, 0, 0, 0) 100%) left top / cover no-repeat rgb(0, 0, 0)',
                        backgroundColor: '#000',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                    }
                }}
            >
                <DialogTitle>Privacy Policy</DialogTitle>
                <DialogContent dividers>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit sapiente debitis, illum reprehenderit voluptatibus veritatis doloribus optio aut. Nobis aliquam et, non quidem voluptatem laboriosam? Qui et itaque quas.</Typography>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePolicy}>Close</Button>
                </DialogActions>
            </Dialog>
        </HomeWrapperStyled>
    )
}

export default Home