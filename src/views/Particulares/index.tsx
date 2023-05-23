import { FC, memo } from 'react'
import AnimatedView from '../../animations/AnimatedContainer'
import Footer from '../../componets/Footer'
import NavBar from '../../componets/NavBar'

const ParaParticulares: FC = () => {
    return (
        <>
            <NavBar />

            <Footer />
        </>
    )
}

export default memo(ParaParticulares)
