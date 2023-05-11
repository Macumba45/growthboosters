import { FC, memo } from 'react'
import {
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
    ]

    return (
        <MainContainer>
            <TitleContainer>
                <TitleServices>NUESTROS PARTNERS</TitleServices>
            </TitleContainer>
            <ContainerPics>
                {images.map((image, index) => (
                    <PartnerPics
                        key={index}
                        src={image.src}
                        alt={`Partner ${index + 1}`}
                    />
                ))}
            </ContainerPics>
        </MainContainer>
    )
}

export default memo(PartnerBanner)
