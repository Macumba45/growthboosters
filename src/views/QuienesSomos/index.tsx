import { FC, memo } from 'react'
import AnimatedView from '../../animations/AnimatedContainer'
import Footer from '../../componets/Footer'
import NavBar from '../../componets/NavBar'
import HeaderQuienesSomos from '../../componets/HeaderQuienesSomos'
import QuienesSomosContent from '../../componets/QuienesSomosContent'

const QuienesSomos: FC = () => {
    return (
        <>
            <NavBar />
            <HeaderQuienesSomos />
            <QuienesSomosContent />
            <Footer />
        </>
    )
}

export default memo(QuienesSomos)
