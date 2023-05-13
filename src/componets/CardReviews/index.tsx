import { FC, memo } from 'react'
import { Props } from './type'
import {
    Container,
    ContainerDescription,
    ContainerImg,
    ContainerTitle,
    DescriptionCard,
    ImgCard,
    MainContainer,
    TitleCard,
} from './styles'

const CardReviews: FC<Props> = ({ title, icon, description }) => {
    return (
        <MainContainer>
            <Container>
                <ContainerImg>
                    <ImgCard src={icon} />
                </ContainerImg>
                <ContainerTitle>
                    <TitleCard>{title}</TitleCard>
                </ContainerTitle>
                <ContainerDescription>
                    <DescriptionCard>{description}</DescriptionCard>
                </ContainerDescription>
            </Container>
        </MainContainer>
    )
}

export default memo(CardReviews)
