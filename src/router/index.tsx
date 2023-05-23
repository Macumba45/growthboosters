import { FC, memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../views/Landing/landing'
import QuienesSomos from '../views/QuienesSomos/quienesSomos'

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/QuienesSomos" element={<QuienesSomos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default memo(Router)
