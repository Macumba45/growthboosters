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
    margin-top: 12rem;
    @media screen and (max-width: 600px) {
        margin-top: 5rem;
    }

`

export const TitleContainerAmazon = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    text-align: center;
    margin-top:18em;
    margin-bottom: 2rem;

    @media screen and (max-width: 600px) {
        margin-top: 15rem;
    }
`

export const TitleHeader = styled.h1`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    z-index: 999;
    line-height: 5rem;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`

export const Span = styled.span`
    font-family: ${({ theme }) => theme.fonts.roboto};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 600;
    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    display: flex;
    z-index: 444;
    margin-top: 28rem;

    @media screen and (max-width: 600px) {
        margin-top:25rem;
        flex-direction: column;

    }
`


export const SubTitleContainer = styled.div`
    display: flex;
    position: absolute;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const SubTitleHeader = styled.h1`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    z-index: 999;
    line-height: 2rem;
    margin-top: 35rem;

@media screen and (max-width: 600px) {
    margin-top:34rem;
    flex-direction: column;

}
`
