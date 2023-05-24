import { FC, memo } from 'react'
import Footer from '../../componets/Footer'
import NavBar from '../../componets/NavBar'
import HeaderQuienesSomos from '../../componets/HeaderQuienesSomos'
import QuienesSomosContent from '../../componets/QuienesSomosContent'
import PageTransition from '../../animations'
import FloatHomeButton from '../../componets/FloatHomeButton'

const QuienesSomos: FC = () => {
    return (
        <PageTransition>
            <NavBar />
            <FloatHomeButton />
            <HeaderQuienesSomos />
            <QuienesSomosContent />
            <Footer />
        </PageTransition>
    )
}

export default memo(QuienesSomos)
