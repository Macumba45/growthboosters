import styled from 'styled-components'
import { Icon } from '@mui/material'

export const MainContainer = styled.div`
    z-index: 9999;
`

export const Container = styled.div`
    width: 350px;
    height: 400px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-radius: 10px;
    border: 5px solid ${({ theme }) => theme.colors.primary};;
    margin: 1rem 0.4rem 1rem 0.4rem;
`

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`

export const ContainerDescription = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const ImgCard = styled(Icon)`
    color: black;
`

export const TitleCard = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
`

export const DescriptionCard = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: 200;
    line-height: 1.8rem;
`
