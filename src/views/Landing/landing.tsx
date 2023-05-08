import { FC, memo } from 'react'
import HeaderComp from '../../componets/Header'
import ServicesComp from '../../componets/Services'

const Landing: FC = () => {
    return (
        <>
            <HeaderComp />
            <ServicesComp />
        </>
    )
}

export default memo(Landing)
