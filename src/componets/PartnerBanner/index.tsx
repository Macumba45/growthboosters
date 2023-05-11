import { FC, memo } from 'react'
import HoverMotion from '../../animations/hover'
import { Image } from './type'
import {
    Container,
    ContainerPics,
    MainContainer,
    PartnerPics,
    TitleContainer,
    TitleServices,
} from './styles'

const PartnerBanner: FC = () => {
    const serv1 = require('../../assets/partners/Alibaba-Logo.png')
    const serv2 = require('../../assets/partners/logbox.png')
    const serv3 = require('../../assets/partners/kunnan.png')
    const serv4 = require('../../assets/partners/crecete.png')

    const images: Image[] = [
        {
            src: serv3,
            height: '110px',
        },
        {
            src: serv2,
            height: '140px',
        },
        {
            src: serv1,
            height: '140px',
        },
        {
            src: serv4,
            height: '180px',
        },
    ]

    return (
        <MainContainer>
            <TitleContainer>
                <TitleServices>NUESTROS PARTNERS</TitleServices>
            </TitleContainer>
            <Container>
                {images.map((image) => (
                    <HoverMotion key={image.src}>
                        <ContainerPics>
                            <PartnerPics
                                src={image.src}
                                height={image.height}
                            />
                        </ContainerPics>
                    </HoverMotion>
                ))}
            </Container>
        </MainContainer>
    )
}

export default memo(PartnerBanner)
