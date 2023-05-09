import { FC, memo } from 'react'
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
import { Props } from './type'

const CardReviews: FC<Props> = ({ title, icon, description }) => {
    return (
        <MainContainer>
            <Container>
                <ContainerImg>
                    <ImgCard
                        style={{
                            marginTop: '2rem',
                            height: '3rem',
                            width: '100%',
                        }}
                    >
                        {icon}
                    </ImgCard>
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
