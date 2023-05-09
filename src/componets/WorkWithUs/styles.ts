import styled from 'styled-components'

export const MainContainer = styled.div``

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.primary};
    @media screen and (min-width: 600px) {
        height: 100vh;
    }
`

export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const TitleContainer = styled.div`
    display: flex;
    height: 110px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const SubSubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const TitleServices = styled.h1`
    font-family: ${({ theme }) => theme.fonts.montserrat};
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
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    line-height: 2rem;
    font-weight: 900;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`

export const SubSubTitleServices = styled.p`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 300;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.smallest};
    }
`
