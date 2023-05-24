import { FC, memo } from 'react'
import Footer from '../../componets/Footer'
import NavBar from '../../componets/NavBar'
import HeaderQuienesSomos from '../../componets/HeaderQuienesSomos'
import QuienesSomosContent from '../../componets/QuienesSomosContent'
import PageTransition from '../../animations'

const QuienesSomos: FC = () => {
    return (
        <PageTransition>
            <NavBar />
            <HeaderQuienesSomos />
            <QuienesSomosContent />
            <Footer />
        </PageTransition>
    )
}

export default memo(QuienesSomos)
