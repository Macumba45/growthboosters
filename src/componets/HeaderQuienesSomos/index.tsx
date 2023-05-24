import { FC, memo } from 'react'
import {
    ContainerImage,
    ImageLogo,
    MainContainer,
} from './styles'

const HeaderQuienesSomos: FC = () => {
    const logo = require('../../assets/logos/1_PNG.png')
    return (
        <MainContainer>
            <ContainerImage>
                <ImageLogo src={logo} />
            </ContainerImage>
        </MainContainer>
    )
}

export default memo(HeaderQuienesSomos)
