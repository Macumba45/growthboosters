import { FC, memo } from 'react'
import HeaderComp from '../../componets/Header'
import ServicesComp from '../../componets/Services'
import WorkWithUs from '../../componets/WorkWithUs'
import ReviewWrapper from '../../componets/Reviews'
import ContactoComp from '../../componets/Contacto'
import Footer from '../../componets/Footer'

const Landing: FC = () => {
    return (
        <>
            <HeaderComp />
            <ServicesComp />
            <WorkWithUs />
            <ReviewWrapper />
            <ContactoComp />
            <Footer />
        </>
    )
}

export default memo(Landing)
