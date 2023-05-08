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
} from './styles'
import { AnimatePresence, motion } from 'framer-motion'
import ButtonConsultoria from '../ButtonConsultoria'
import ButtonContacto from '../ButtonContacto'
import NavBar from '../NavBar'
const video = require('../../assets/videos/video-comp.mp4')

const HeaderComp: FC = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <NavBar />
                <MainContainer>
                    <TitleContainer>
                        <TitleHeader>
                            Ayudamos a Marcas a Incrementar sus Ventas a través
                            de
                        </TitleHeader>
                    </TitleContainer>
                    <TitleContainerAmazon>
                        <TitleHeader>
                            <Span>Amazon Marketplace</Span>
                        </TitleHeader>
                    </TitleContainerAmazon>
                    <VideoContainer>
                        <Video src={video} autoPlay loop muted playsInline />
                    </VideoContainer>
                    <ButtonContainer>
                        <ButtonConsultoria title="Consultoría Gratuita" />
                        <ButtonContacto title="Contáctanos" />
                    </ButtonContainer>
                    <SubTitleContainer>
                        <SubTitleHeader>
                            Te impulsamos a través del marketplace{' '}
                            <SpanBold>número 1º del mundo.</SpanBold>
                        </SubTitleHeader>
                    </SubTitleContainer>
                </MainContainer>
            </motion.div>
        </AnimatePresence>
    )
}

export default memo(HeaderComp)
