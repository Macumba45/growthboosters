import { FC, memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import {
    Container,
    Form,
    MainContainer,
    SentMessage,
    SubTitleContainer,
    SubTitleServices,
    TitleContainer,
    TitleServices,
} from './styles'
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@material-ui/core'

const ConsultaQuienesSomos: FC = () => {
    const options = [
        { value: 'Facebook', label: 'Facebook' },
        { value: 'Instagram', label: 'Instagram' },
        { value: 'Tiktok', label: 'Tiktok' },
        { value: 'Google', label: 'Google' },
        { value: 'Youtube', label: 'Youtube' },
        { value: 'A friend/coworker', label: 'A friend/coworker' },
        { value: 'Ads', label: 'Ads' },
        { value: 'LinkedIn', label: 'LinkedIn' },
        { value: 'Podcast', label: 'Podcast' },
        { value: 'Flip Your Future Book', label: 'Flip Your Future Book' },
        { value: 'Other', label: 'Other' },
    ]

    const [modalOpen, setModalOpen] = useState(false)

    const navigate = useNavigate()

    // const sendEmail = async (e: any) => {

    //     // e.preventDefault()
    //     // const data = {
    //     //     id: "growthbooster",
    //     //     name: e.target.Nombre.value,
    //     //     apellidos: e.target.Apellidos.value,
    //     //     email: e.target._replyto.value,
    //     //     phoneNumber: e.target['Número de móvil'].value,
    //     //     comoNosConociste: e.target['¿Cómo nos has conocido?'].value,
    //     // }

    //     // const response = await fetch(
    //     //     // 'https://ubiquitous-entremet-1a2ba6.netlify.app/.netlify/functions/api/api/sendemail',
    //     //     // 'http://localhost:5001/api/sendemail',
    //     //     // 'https://vercel.com/macumba45/backend-email-node-mailer/A1EKksG996835zQuvFWGSngV4eWt',
    //     //     // 'https://backend-email-node-mailer-e80txw5i1-macumba45.vercel.app/',
    //     //     // 'https://vercel.com/macumba45/backend-email/H9YWMPMcqKF5TBx1RhZ4RT95eJeS',
    //     //     // 'https://backend-email-node-mailer.vercel.app/',
    //     //     "https://backend-email-node-mailer-5giqnpbkz-macumba45.vercel.app/api/sendemail",
    //     //     {
    //     //         method: 'POST',
    //     //         headers: {
    //     //             'Content-Type': 'application/json',
    //     //         },
    //     //         body: JSON.stringify(data),
    //     //     }
    //     // )
    //     // if (response.ok) {
    //     //     setModalOpen(true)
    //     // }
    //     // console.log(response)
    //     // const responseData = await response.json()
    //     // console.log(data)
    //     // console.log(responseData)
    // }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const form = e.target
        const nombre = form.Nombre.value
        const apellidos = form.Apellidos.value
        const email = form._replyto.value
        const telefono = form['Número de móvil'].value
        const comoNosConociste = form['¿Cómo nos has conocido?'].value

        const subject = 'Nuevo mensaje Growthbooster'
        const body = `Nombre: ${nombre}\nApellidos: ${apellidos}\nEmail: ${email}\nNúmero de móvil: ${telefono}\n¿Cómo nos has conocido?: ${comoNosConociste}`

        const mailtoUrl = `mailto:info@growthboosters.eu?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`

        window.location.href = mailtoUrl
    }

    const handleClose = () => {
        setModalOpen(false)
        navigate('/')
    }

    return (
        <MainContainer id="contacto">
            <Container>
                <TitleContainer>
                    <TitleServices>CONTÁCTANOS</TitleServices>
                </TitleContainer>
                <SubTitleContainer>
                    <SubTitleServices>
                        No te quedes con dudas, ¡Escríbenos!
                    </SubTitleServices>
                </SubTitleContainer>
            </Container>

            <Form
                // action="https://formspree.io/f/xbjewjlk"
                // method="POST"
                onSubmit={handleSubmit}
            >
                <Grid container direction="column" spacing={2}>
                    <Grid style={{ fontFamily: 'poppins' }} item>
                        <TextField
                            label="Nombre"
                            name="Nombre"
                            variant="outlined"
                            required
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid style={{ fontFamily: 'poppins' }} item>
                        <TextField
                            label="Apellidos"
                            variant="outlined"
                            name="Apellidos"
                            required
                            type="text"
                            fullWidth
                        />
                    </Grid>
                    <Grid style={{ fontFamily: 'poppins' }} item>
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            name="_replyto"
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid style={{ fontFamily: 'poppins' }} item>
                        <TextField
                            label="Número de móvil"
                            variant="outlined"
                            name="Número de móvil"
                            required
                            fullWidth
                            type="number"
                        />
                    </Grid>
                    <Grid style={{ fontFamily: 'poppins' }} item>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="select-label">
                                ¿Cómo nos has conocido?
                            </InputLabel>
                            <Select
                                labelId="select-label"
                                name="¿Cómo nos has conocido?"
                                label="¿Cómo nos has conocido?"
                                required
                                defaultValue={'Facebook'}
                            >
                                {options.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                fontFamily: 'poppins',
                                backgroundColor: '#ef9018',
                                color: 'white',
                                width: '350px',
                            }}
                            startIcon={<SendIcon />}
                        >
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Form>
            <Dialog open={modalOpen} onClose={handleClose}>
                <DialogTitle>¡Mensaje enviado!</DialogTitle>
                <DialogContent>
                    <SentMessage>
                        Tu mensaje ha sido enviado con éxito.
                    </SentMessage>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </MainContainer>
    )
}

export default memo(ConsultaQuienesSomos)
