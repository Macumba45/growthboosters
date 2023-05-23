import { FC, memo } from 'react'
import AnimatedView from '../../animations/AnimatedContainer'
import Footer from '../../componets/Footer'
import NavBar from '../../componets/NavBar'

const QuienesSomos: FC = () => {
    return (
        <>
            <NavBar />

            <Footer />
        </>
    )
}

export default memo(QuienesSomos)
