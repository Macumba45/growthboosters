import { FC, memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../views/Landing'
import QuienesSomos from '../views/QuienesSomos'
import ParaParticulares from '../views/Particulares'
import PageTransition from '../animations'
import { AnimatePresence } from 'framer-motion'

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/QuienesSomos" element={<QuienesSomos />} />
                <Route
                    path="/ParaParticulares"
                    element={<ParaParticulares />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default memo(Router)
