import { FC, memo } from 'react'
import HeaderComp from '../../componets/Header'
import ServicesComp from '../../componets/Services'
import WorkWithUs from '../../componets/WorkWithUs'
import ReviewWrapper from '../../componets/Reviews'
import BottomBar from '../../componets/BottomBar'
import ContactoComp from '../../componets/Contacto'

const Landing: FC = () => {
    return (
        <>
            <HeaderComp />
            <ServicesComp />
            <WorkWithUs />
            <ReviewWrapper />
            <ContactoComp />
            {/* <BottomBar /> */}
        </>
    )
}

export default memo(Landing)
