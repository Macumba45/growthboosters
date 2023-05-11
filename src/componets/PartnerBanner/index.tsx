import { FC, memo } from 'react'
import {
    Container,
    ContainerPics,
    MainContainer,
    PartnerPics,
    TitleContainer,
    TitleServices,
} from './styles'
import HoverMotion from '../../animations/hover'

const PartnerBanner: FC = () => {
    const serv1 = require('../../assets/partners/Alibaba-Logo.png')
    const serv2 = require('../../assets/partners/logbox.png')
    const serv3 = require('../../assets/partners/kunnan.png')
    const serv4 = require('../../assets/partners/crecete.png')

    interface Image {
        src: string
    }

    const images: Image[] = [
        {
            src: serv3,
        },
        {
            src: serv2,
        },
        {
            src: serv1,
        },
        {
            src: serv4,
        },
    ]

    return (
        <MainContainer>
            <TitleContainer>
                <TitleServices>NUESTROS PARTNERS</TitleServices>
            </TitleContainer>
            <Container>
                {images.map((image, index) => (
                    <HoverMotion>
                        <ContainerPics>
                            <PartnerPics
                                key={index}
                                src={image.src}
                                alt={`Partner ${index + 1}`}
                            />
                        </ContainerPics>
                    </HoverMotion>
                ))}
            </Container>
        </MainContainer>
    )
}

export default memo(PartnerBanner)
