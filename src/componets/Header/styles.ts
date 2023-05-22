import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`

export const Video = styled.video`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 8rem;
    width: 1200px;
    @media screen and (max-width: 600px) {
        margin-top: 4rem;
        width: 360px;
    }
`

export const TitleContainerAmazon = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    text-align: center;
    margin-top: 15rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 600px) {
        margin-top: 15rem;
    }
`

export const TitleHeader = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    z-index: 999;
    line-height: 5rem;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
        line-height: 3rem;
        font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    }
`

export const Span = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 700;
    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    line-height: 5rem;

    @media screen and (max-width: 600px) {
        font-size: 1rem;
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 444;
    margin-top: 20rem;

    @media screen and (max-width: 600px) {
        margin-top: 17rem;
        flex-direction: column;
    }
`

export const SubTitleContainer = styled.div`
    display: flex;
    position: absolute;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    z-index: 9999;
    margin-top: 24rem;
    min-width: 360px;
    border-bottom: 5px solid #ef9018;
    @media screen and (max-width: 600px) {
        margin-top: 25rem;
        flex-direction: column;
    }
`

export const SubTitleHeader = styled.h2`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1.8rem;
    z-index: 999;
    line-height: 3rem;
    font-weight: 500;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const LogoAmazon = styled.img`
    width: 400px;
    height: auto;

    @media screen and (max-width: 600px) {
        width: 200px;
    }
`

export const LogoAmazonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 34rem;
    background-size: cover;
    background-position: center;
    width: 100%;
    position: absolute;
    z-index: 999999999999999;
    @media screen and (max-width: 600px) {
        margin-top: 39rem;
    }
`
