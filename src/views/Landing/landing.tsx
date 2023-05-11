import { FC, memo } from 'react'
import AnimatedView from '../../animations/AnimatedContainer'
import HeaderComp from '../../componets/Header'
import ServicesComp from '../../componets/Services'
import WorkWithUs from '../../componets/WorkWithUs'
import ReviewWrapper from '../../componets/Reviews'
import ContactoComp from '../../componets/Contacto'
import FacturacionesComp from '../../componets/Facturaciones'
import Footer from '../../componets/Footer'

const Landing: FC = () => {
    return (
        <>
            <HeaderComp />
            <AnimatedView>
                <ServicesComp />
            </AnimatedView>
            <AnimatedView>
                <WorkWithUs />
            </AnimatedView>
            <AnimatedView>
                <FacturacionesComp />
            </AnimatedView>
            <AnimatedView>
                <ReviewWrapper />
            </AnimatedView>
            <AnimatedView>
                <ContactoComp />
            </AnimatedView>
            <Footer />
        </>
    )
}

export default memo(Landing)
