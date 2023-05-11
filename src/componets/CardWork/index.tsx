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
import HoverMotion from '../../animations/hover'

const CardWork: FC<Props> = ({ title, icon, description }) => {
    return (
        <HoverMotion>
            <MainContainer>
                <Container>
                    <ContainerImg>
                        <ImgCard
                            style={{
                                marginTop: '2rem',
                                height: '5rem',
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
        </HoverMotion>
    )
}

export default memo(CardWork)
