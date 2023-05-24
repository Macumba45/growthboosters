import { FC, memo } from 'react'
import Footer from '../../componets/Footer'
import NavBar from '../../componets/NavBar'
import HeaderQuienesSomos from '../../componets/HeaderQuienesSomos'
import QuienesSomosContent from '../../componets/QuienesSomosContent'
import PageTransition from '../../animations'
import FloatHomeButton from '../../componets/FloatHomeButton'
import ConsultaQuienesSomos from '../../componets/ConsultaQuienesSomos'
import AnimatedView from '../../animations/AnimatedContainer'


const QuienesSomos: FC = () => {
    return (
        <PageTransition>
            <NavBar />
            <FloatHomeButton />
            <AnimatedView>
                <HeaderQuienesSomos />
            </AnimatedView>
            <AnimatedView>
                <QuienesSomosContent />
            </AnimatedView>
            <AnimatedView>
                <ConsultaQuienesSomos />
            </AnimatedView>
            <Footer />
        </PageTransition>
    )
}

export default memo(QuienesSomos)
