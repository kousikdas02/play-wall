import { Box, styled } from "@mui/material";

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
                color: #fff;
                font-size: 16px;
                font-family: "Encode Sans", sans-serif;
                padding: 32px 85px 32px 20px;
                background-color: #000000;
                border-radius: 50px;
                border: 1px solid #00FF82;
                font-weight: 400;
                transition: 0.3s all ease;
                @media (max-width: 559px) {
                    font-size: 12px;
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
            .formSubmitted{
               input{
                color:#fff !important;
                background-color: #000000 !important;
               }
            }
            .focused{
               input{
                color:#000000;
                background-color: #00FF82;
               }
            }
            .formSubmittedBtn{
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