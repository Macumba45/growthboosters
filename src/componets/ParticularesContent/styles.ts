import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    width: 100%;
    height: 100%;
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;

    @media screen and (max-width: 600px) {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

export const TextHeader = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-weight: 600;
    font-size: 5rem;
    @media screen and (max-width: 600px) {
        font-size: 2rem;
    }
`

export const SubTextHeader = styled.h4`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 4rem;
    width: 800px;
    text-align: center;
    margin-top: 2rem;
    line-height: 4rem;
    font-weight: 400;
    @media screen and (max-width: 600px) {
        font-size: 2rem;
        margin-bottom: 2rem;
        width: 340px;

    }
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    margin-bottom: 5rem;
    width: 90%;
    @media screen and (max-width: 600px) {
        justify-content: center;
        flex-direction: column;
    }
`
export const ImageLogo = styled.img`
    width: 30rem;
    border-radius: 20px;
    @media screen and (max-width: 600px) {
        width: 20rem;
    }
`

export const ContainerParticulares = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    border-radius: 20px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const TextTitleParticulares = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-weight: 700;
    font-size: 3rem;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
    @media screen and (max-width: 600px) {
        margin-left: 1rem;
    }
`

export const TextContainerParticulares = styled.div`

width: 90%;
background-color: ${({ theme }) => theme.colors.secondary};
border-radius: 20px;
  
`


export const TextHeaderParticulares = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-weight: 700;
    font-size: 3rem;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
    @media screen and (max-width: 600px) {
        margin-left: 1rem;
        font-size: 2.5rem;

    }
`

export const TextParticulares = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    line-height: 3rem;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
    @media screen and (max-width: 600px) {
        font-size: 1rem;
        margin-left: 1rem;
        line-height: 2rem;
    }
`

export const SubTextParticulares = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 3rem;
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
    font-weight: 600;
    @media screen and (max-width: 600px) {
        font-size: 1rem;
        margin-left: 1rem;
        line-height: 2rem;
    }
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
`


export const SpanBold2 = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
`

