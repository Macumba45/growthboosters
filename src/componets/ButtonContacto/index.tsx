import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'
import { Link } from 'react-scroll'

const ButtonContacto: FC<Props> = ({ title }) => {
    return (
        <Link to="contacto" smooth={true}>
            <Button
                sx={{
                    borderColor: '#FF9900',
                    color: '#FF9900',
                    marginBottom: '1rem',
                    marginRight: '1rem',
                    marginLeft: '1rem',
                    width: '300px',

                    '&:hover': {
                        borderColor: '#FF6600',
                    },
                }}
                variant="outlined"
            >
                {title}
            </Button>
        </Link>
    )
}

export default memo(ButtonContacto)
