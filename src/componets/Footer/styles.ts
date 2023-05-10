import styled from 'styled-components'
const logo = require('../../assets/logos/1_PNG.png')

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* @media screen and (max-width: 600px) {
       flex-direction: column;
    } */
`

export const LogoContainer = styled.div`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 100px;
`

export const SloganText = styled.h3`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    text-align: center;
    line-height: 2rem;
`
export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-weight: 600;
`
