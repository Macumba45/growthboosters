import { FC, memo } from 'react'
import AnimatedView from '../../animations/AnimatedContainer'
import Footer from '../../componets/Footer'
import NavBar from '../../componets/NavBar'
import PageTransition from '../../animations'

const ParaParticulares: FC = () => {
    return (
        <PageTransition>
            <NavBar />

            <Footer />
        </PageTransition>
    )
}

export default memo(ParaParticulares)
