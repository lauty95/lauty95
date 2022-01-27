import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from './../../img/wsp.png'
import Email from './../../img/email.png'
import LinkedIn from './../../img/linkedin.png'
import Github from './../../img/github.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
    const service_id = process.env.REACT_APP_SERVICE_ID
    const template_id = process.env.REACT_APP_TEMPLATE_ID
    const user_id = process.env.REACT_APP_USER_ID
    const formRef = useRef()

    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    var styles = {
        backgroundColor: darkMode ? "#333" : "white"
    }

    const goTo = (place) => {
        window.open(
            place,
            '_blank'
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(service_id, template_id, formRef.current, user_id)
            .then((result) => {
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Si quieres contactarme...</h1>
                    <div className="c-info">
                        <div className="c-info-item" onClick={() => goTo('https://wa.me/5493492587791?text=Hola Lauty! Me contacto desde tu sitio web')}>
                            <img src={Phone} alt="icono de telefono" className="c-icon" />
                            +54 9 3492 587791
                        </div>
                        <div className="c-info-item" onClick={() => goTo('mailto:lautaroJ95@gmail.com')}>
                            <img src={Email} alt="icono de telefono" className="c-icon" />
                            lautaroJ95@gmail.com
                        </div>
                        <div className="c-info-item" onClick={() => goTo('https://www.linkedin.com/in/lauty95/')}>
                            <img src={LinkedIn} alt="icono de telefono" className="c-icon" />
                            LinkedIn.com/in/lauty95
                        </div>
                        <div className="c-info-item" onClick={() => goTo('https://github.com/lauty95')}>
                            <img src={Github} alt="icono de telefono" className="c-icon" />
                            Github.com/lauty95
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Puedes contactarme por cualquiera de mis redes sociales.
                        También puedes completar este formulario y recibiré tu mensaje por correo.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className={done && 'c-finish'}>
                        <div className="c-input-wrapper">
                            <input style={styles} type="text" placeholder='Nombre' name="name" />
                            <input style={styles} type="text" placeholder='Asunto' name="subject" />
                        </div>
                        <input style={styles} type="email" placeholder='correo@email.com' name="email" />
                        <textarea style={styles} rows="5" placeholder="Mensaje" name='message' />
                        <button>Enviar</button>
                    </form>
                    <div className={`c-thanks ${!done && 'c-finish'}`}>
                        <h1>Gracias por escribir!</h1>
                        <h3>Pronto me pondré en contacto contigo. Saludos!</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
