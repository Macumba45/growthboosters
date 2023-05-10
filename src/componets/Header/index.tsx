import { FC, memo } from 'react'
import {
    MainContainer,
    Span,
    TitleContainer,
    TitleHeader,
    Video,
    VideoContainer,
    TitleContainerAmazon,
    ButtonContainer,
    SubTitleContainer,
    SubTitleHeader,
    SpanBold,
    LogoAmazonContainer,
    LogoAmazon,
} from './styles'
import { AnimatePresence, motion } from 'framer-motion'
import ButtonConsultoria from '../ButtonConsultoria'
import ButtonContacto from '../ButtonContacto'
import NavBar from '../NavBar'
import FloatHomeButton from '../FloatHomeButton'
const video = require('../../assets/videos/video-comp.mp4')
const AmazonLogo = require('../../../src/assets/logos/amazonP.png')


const HeaderComp: FC = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <NavBar />
                <FloatHomeButton />
                <MainContainer>
                    <TitleContainer>
                        <TitleHeader>
                            Escalamos tu marca a través de <Span>Amazon.</Span>

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
                        <ButtonConsultoria title="Consultoría Gratuita" />
                        <ButtonContacto title="Contáctanos" />
                    </ButtonContainer>
                    <SubTitleContainer>
                        <SubTitleHeader>
                            Impulsamos tus ventas a través del marketplaces {<br />}
                            <SpanBold>NÚMERO 1 EN EL MUNDO</SpanBold>
                        </SubTitleHeader>
                    </SubTitleContainer>
                </MainContainer>
            </motion.div>
        </AnimatePresence>
    )
}

export default memo(HeaderComp)
