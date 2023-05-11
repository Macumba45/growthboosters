import { MotionProps, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ElementType, FC, ReactNode, memo } from 'react'

type AnimatedComponentChild = {
    element?: ElementType
}

type AnimatedComponentProps = MotionProps & {
    children: ReactNode & AnimatedComponentChild
    element?: ElementType
}

const AnimatedTitle: FC<AnimatedComponentProps> = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                delay: 2.2,
                ease: 'easeInOut',
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <motion.div animate={{ x: 100 }} transition={{ delay: 1 }}>
            {children}
        </motion.div>
    )
}

export default memo(AnimatedTitle)
