import styled from 'styled-components'

const orange = require('../../assets/background/naranja4.jpg')

export const MainContainer = styled.div``

export const Container = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${orange});

    /* background: rgb(199, 111, 1);
    background: linear-gradient(
        180deg,
        rgba(199, 111, 1, 1) 41%,
        rgba(239, 144, 24, 1) 91%
    );

    background-color: ${({ theme }) => theme.colors.primary}; */

    position: relative; /* Agrega esta línea */

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.229);
        z-index: 1;
        mix-blend-mode: multiply; /* Agrega esta línea */
    }
    @media screen and (min-width: 600px) {
        height: 120vh;
    }
`

export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    z-index: 9999;
`

export const TitleContainer = styled.div`
    display: flex;
    height: 110px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    z-index: 9999;
`

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    z-index: 9999;
`

export const SubSubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    z-index: 9999;
`

export const TitleServices = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    line-height: 5rem;
    font-weight: 400;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`

export const SubTitleServices = styled.h2`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    line-height: 2rem;
    font-weight: 900;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`

export const SubSubTitleServices = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 300;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.smallest};
    }
`
