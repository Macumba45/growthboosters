import { FC, memo } from 'react'
import ButtonConsultoria from '../ButtonConsultoria'
import ButtonContacto from '../ButtonContacto'
import NavBar from '../NavBar'
import FloatHomeButton from '../FloatHomeButton'
import AnimatedView from '../../animations/AnimatedContainer'

import {
    MainContainer,
    Span,
    TitleContainer,
    TitleHeader,
    Video,
    VideoContainer,
    ButtonContainer,
    SubTitleContainer,
    SubTitleHeader,
    SpanBold,
    LogoAmazonContainer,
    LogoAmazon,
} from './styles'

const video = require('../../assets/videos/video-comp.mp4')
const AmazonLogo = require('../../../src/assets/logos/amazonP.png')

const HeaderComp: FC = () => {
    return (
        <>
            <NavBar />
            <FloatHomeButton />
            <MainContainer>
                <TitleContainer>
                    <TitleHeader>
                        Garantizamos tú éxito en <Span>Amazon. </Span>
                        <Span>Sí, Garantizado.</Span>
                    </TitleHeader>
                </TitleContainer>
                <LogoAmazonContainer>
                    <LogoAmazon src={AmazonLogo} alt="Amazon Logo" />
                </LogoAmazonContainer>
                {/* <TitleContainerAmazon>
                        <TitleHeader>
                            <Span>Amazon Marketplace</Span>
                        </TitleHeader>
                    </TitleContainerAmazon> */}
                <VideoContainer>
                    <Video src={video} autoPlay loop muted playsInline />
                </VideoContainer>
                <ButtonContainer>
                    <ButtonConsultoria
                        href="https://calendly.com/agendagrowthboosters"
                        title="Consultoría Gratuita"
                    />
                    <ButtonContacto title="Contáctanos" />
                </ButtonContainer>
                <SubTitleContainer>
                    <SubTitleHeader>
                        Impulsamos tus ventas a través del marketplace{<br />}
                        <SpanBold>NÚMERO 1 EN EL MUNDO</SpanBold>
                    </SubTitleHeader>
                </SubTitleContainer>
            </MainContainer>
        </>
    )
}

export default memo(HeaderComp)
