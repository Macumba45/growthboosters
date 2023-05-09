import { FC, memo } from 'react'
import HeaderComp from '../../componets/Header'
import ServicesComp from '../../componets/Services'
import WorkWithUs from '../../componets/WorkWithUs'
import ReviewWrapper from '../../componets/Reviews'
import BottomBar from '../../componets/BottomBar'

const Landing: FC = () => {
    return (
        <>
            <HeaderComp />
            <ServicesComp />
            <WorkWithUs />
            <ReviewWrapper />
            <BottomBar />
        </>
    )
}

export default memo(Landing)
