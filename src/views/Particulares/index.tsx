import { FC, memo } from 'react'
import AnimatedView from '../../animations/AnimatedContainer'
import Footer from '../../componets/Footer'
import NavBar from '../../componets/NavBar'
import PageTransition from '../../animations'
import HeaderParticulares from '../../componets/HeaderParticulares'
import ParticularesContent from '../../componets/ParticularesContent'
import FloatHomeButton from '../../componets/FloatHomeButton'

const ParaParticulares: FC = () => {
    return (
        <PageTransition>
            <NavBar />
            <FloatHomeButton />
            <HeaderParticulares />
            <AnimatedView>
                <ParticularesContent />
            </AnimatedView>
            <Footer />
        </PageTransition>
    )
}

export default memo(ParaParticulares)
