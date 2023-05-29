import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    width: 100%;
    height: 2300px;
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 5rem;
`

export const TextHeader = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 5rem;
    text-align: center;
    font-weight: 600;
`

export const SubTextHeader = styled.h4`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 4rem;
    text-align: center;
    margin-top: 2rem;
    line-height: 4rem;
    font-weight: 400;
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    margin-bottom: 5rem;
    width: 90%;
    @media screen and (max-width: 600px) {
        justify-content: center;
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
    height: 400px;
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
`

export const TextParticulares = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
`

export const SubTextParticulares = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
    font-weight: 600;
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
`
