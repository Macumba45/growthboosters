import styled from 'styled-components'

const blue = require('../../assets/background/blue3.jpg')

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${blue});
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 100%;
    @media screen and (max-width: 600px) {
        height: 250rem;
    }
`

export const Container = styled.div`
    position: relative;
    justify-content: center;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    @media screen and (max-width: 600px) {
        height: 145rem;
        width: 100%;
    }
`

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 1rem;
    margin-left: 1rem;
    justify-content: center;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
`

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const SubSubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

export const TitleServices = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
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
