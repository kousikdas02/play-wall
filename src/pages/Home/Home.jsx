import { Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo'
import CheckBoxCheckedIcon from "../../assets/icons/CheckBoxCheckedIcon";
import CheckBoxDefaultIcon from '../../assets/icons/CheckBoxDefaultIcon';
import RightImage from "../../assets/images/right-img.png";
import RightImageMobile from "../../assets/images/right-img-mobile.png";
export const HomeWrapperStyled = styled(Box)`
    .MuiContainer-root {
        padding: 0 0 0 80px;
        @media (max-width: 899px) {
            padding: 0 35px;
        }
        @media (max-width: 599px) {
            padding: 0 20px;
        }
    }
    .header{
        padding: 40px 0;
        @media (max-width: 899px) {
            padding: 20px 0 40px;
        }
        a{
            display: inline-block;
            @media (max-width: 899px) {
                width: 81px;

            }
            svg{
                @media (max-width: 899px) {
                    width: 81px;
                    height: 20px;
                }
            }
        }
    }
    .homeForm{
        padding: 45px 0 0;
        /* max-width: 535px; */

        @media (max-width: 899px) {
            padding: 20px 0 0;
        }

        .MuiInputBase-root {
            .MuiOutlinedInput-notchedOutline {
                display: none;
            }
    
            .MuiInputBase-input {
                font-size: 16px;
                font-family: "Encode Sans", sans-serif;
                padding: 32px 85px 32px 20px;
                color: #000000;
                background-color: #000000;
                border-radius: 50px;
                border: 1px solid #00FF82;
                font-weight: 400;
                transition: 0.3s all ease;
                @media (max-width: 374px) {
                    font-size: 15px;
                }

                @media (max-width: 1299px) {
                    padding: 15px 70px 15px 32px;
                }
                @media (max-width: 899px) {
                    padding: 15px 70px 15px 20px;
                }
                @media (max-width: 374px) {
                    padding: 15px 60px 15px 20px;

                }
    
                    ::-webkit-input-placeholder {
                        color: #8D8D8D;
                        opacity: 1;
                    }
                    ::-moz-placeholder {
                        color: #8D8D8D;
                        opacity: 1;
                    }
    
                    :-ms-input-placeholder {
                        color: #8D8D8D;
                        opacity: 1;
                    }
    
                    :-moz-placeholder {
                        color: #8D8D8D;
                        opacity: 1;
                    }
    
                &:focus{
                    background-color: #00FF82;
                    ::-webkit-input-placeholder {
                        color: #000000;
                        opacity: 1;
                    }
    
                        ::-moz-placeholder {
                            color: #000000;
                            opacity: 1;
                        }
    
                        :-ms-input-placeholder {
                            color: #000000;
                            opacity: 1;
                        }
    
                    :-moz-placeholder {
                            color: #000000;
                            opacity: 1;
                        }
                }
            }
        }
        .homeFormInput {
            position: relative;
            margin-bottom: 10px;
            @media (max-width: 1299px) {
                margin-bottom: 15px;
            }
            .homeFormSubmitBtn{
                height: 40px;
                width: 40px;
                background: #00FF82;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                min-width: initial;
                position: absolute;
                right: 32px;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1;

                @media (max-width: 1299px) {
                    right: 20px;
                    
                }
                @media (max-width: 374px) {
                    width: 30px;
                    height: 30px;
                }

                svg{
                    transition: 0.3s all ease;
                }

                &.hoverSubmit{
                    background: #000000;
                    svg{
                        path{
                            fill: #ffffff;
                        }
                    }
                }
            }

        }
        .MuiFormControlLabel-root {
            .MuiFormControlLabel-label{
                font-size: 15px;
                color: #8D8D8D;
                line-height: 1.2;
                padding-top: 2px;

                @media (max-width: 599px) {
                    font-size: 10px;
                    line-height: 1.2;

                }

                .MuiButtonBase-root {
                    padding: 0;
                    font-size: 15px;
                    text-transform: initial;
                    line-height: 1.5;
                    vertical-align: middle;
                    font-weight: 400;
                    border-radius: 0;
                    color: rgba(0, 255, 130, .6);
                    margin: 0 0 4px;

                    @media (max-width: 599px) {
                        font-size: 10px;
                        margin: 0 0 1.8px;
                        line-height: 1.2;
                    }
                }
            }
        }
    }
    
    .footer{
        padding-bottom: 70px;
        p{
            color: #5F5F5F;
            font-size: 16px;
        }
        @media (max-width: 899px) {
            text-align: center;
            padding-bottom: 15px;
        }
    }

    

    .homeInner {
        position: relative;
        min-height: 100vh;
        .homeMain {
            padding-bottom: 100px;
            @media (max-width: 899px) {
                padding-bottom: 0;
            }
            .homeMainConent{
                @media (min-width: 1600px) {
                    padding-bottom: 60px;
                }
                .homeMainConent_heading{
                    h6{
                        font-family: "Encode Sans", sans-serif;
                        font-weight: 700;
                        @media (max-width: 899px) {
                            margin-bottom: 10px;
                        }
                    }
                    h1{
                        font-size: 103px;

                        @media (max-width: 1299px) {
                            font-size: 60px;
                        }
                        @media (max-width: 899px) {
                            font-size: 48px;
                        }
                        
                    }
                }
            }
        }
        .imageColumn{
            figure{
                display: flex;
                justify-content: flex-end;
                img{
                    width: 100%;
                }
            }
        }
    }

    .imageColumn_Mobile{
        padding-top: 20px;
        figure{
            img{
                width: 100%;
            }
        }
    }

`
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