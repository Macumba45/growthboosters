import styled from 'styled-components'
import { Image } from './type'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.p};

    width: 100%;
    height: 350px;
    @media screen and (max-width: 600px) {
        height: auto;
    }
`

export const ContainerPics = styled.div``

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`

export const PartnerPics = styled.img`
    width: 250px;
    height: ${(props: Image) => props.height};
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (max-width: 600px) {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    height: 110px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const TitleServices = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    font-weight: 400;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`
