import styled from 'styled-components'
import { Icon } from '@mui/material'

export const MainContainer = styled.div``

export const Container = styled.div`
    width: 330px;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
    margin-left: 1rem;
    margin-right: 1rem;
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
    color: white;
`

export const TitleCard = styled.h1`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
`

export const DescriptionCard = styled.p`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: 200;
    line-height: 1.8rem;
`
