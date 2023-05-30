import { FC, memo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { AnimatePresence, motion } from 'framer-motion'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'
import ButtonConsulta from '../ButtonConsultoria'
import { ImgLogo, MainContainer } from './styles'
import HoverMotion from '../../animations/hover'

const logo = require('../../assets/logos/3_PNG.png')

const NavBarComp: FC = () => {
    const pages = [
        { label: '¿Quienes somos?', route: '/QuienesSomos' },
        { label: 'Para particulares', route: '/ParaParticulares' },
    ]
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const ButtonStyles = {
        backgroundColor: '#ef9018',
        color: '#F7F7F7',
        marginBottom: '1rem',
        fontSize: '0.5rem',
        width: '100%',
        zIndex: 9999,

        opacity: 0,
        '&:hover': {
            backgroundColor: '#FF6600',
        },
    }

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
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
        // <AnimatePresence>
        //     <motion.div
        //         initial="hidden"
        //         animate={inView ? 'visible' : 'hidden'}
        //         exit="exit"
        //         variants={containerVariants}
        //         ref={ref}
        //     >
        <MainContainer>
            <AppBar
                style={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                }}
                position="static"
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {
                                        xs: 'block',
                                        md: 'none',
                                    },
                                }}
                            >
                                {window.location.pathname === '/QuienesSomos' ||
                                    ('/ParaParticulares' && (
                                        <ButtonConsulta
                                            style={ButtonStyles}
                                            title="Agendar Consultoría"
                                        />
                                    ))}
                                {pages.map((page) => (
                                    <MenuItem
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingLeft: '1rem',
                                            paddingRight: '1rem',
                                        }}
                                        key={page.label}
                                        onClick={() => navigate(page.route)}
                                    >
                                        <HoverMotion key={page.label}>
                                            <Typography
                                                key={page.label}
                                                textAlign="center"
                                            >
                                                {page.label}
                                            </Typography>
                                        </HoverMotion>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <a href="/">
                            <ImgLogo src={logo} alt="Logo" />
                        </a>
                        {/* <ImgLogoMobile
                                    src={logo}
                                /> */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            {pages.map((page) => (
                                <HoverMotion key={page.label}>
                                    <Button
                                        key={page.label}
                                        onClick={() => navigate(page.route)}
                                        style={{
                                            color: 'white',
                                        }}
                                    >
                                        {page.label}
                                    </Button>
                                </HoverMotion>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </MainContainer>
        //     </motion.div>
        // </AnimatePresence>
    )
}
export default memo(NavBarComp)
