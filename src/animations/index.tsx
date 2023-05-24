import { AnimatePresence, motion } from 'framer-motion'

const PageTransition = ({ children }: any) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: -1000, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition
