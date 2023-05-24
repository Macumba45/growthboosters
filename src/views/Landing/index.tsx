import { FC, memo } from 'react'
import AnimatedView from '../../animations/AnimatedContainer'
import HeaderComp from '../../componets/Header'
import ServicesComp from '../../componets/Services'
import WorkWithUs from '../../componets/WorkWithUs'
import ReviewWrapper from '../../componets/Reviews'
import ContactoComp from '../../componets/Contacto'
import WarrantyBanner from '../../componets/WarrantyBanner'
import FacturacionesComp from '../../componets/Facturaciones'
import PartnerBanner from '../../componets/PartnerBanner'
import Footer from '../../componets/Footer'
import { CssBaseline } from '@mui/material'
import PageTransition from '../../animations'

const Landing: FC = () => {
    return (
        <PageTransition>
            <HeaderComp />
            <AnimatedView>
                <PartnerBanner />
            </AnimatedView>
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
                <WarrantyBanner />
            </AnimatedView>
            <AnimatedView>
                <ReviewWrapper />
            </AnimatedView>
            <AnimatedView>
                <ContactoComp />
            </AnimatedView>
            <Footer />
        </PageTransition>
    )
}

export default memo(Landing)
