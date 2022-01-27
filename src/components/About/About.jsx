import React from 'react'
import './about.css'
import Certificado from './../../img/certificado.png'
import { tecnologies } from '../../data'

const About = () => {
    const goToCertificate = () => {
        window.open(
            'https://certificates.soyhenry.com/cert?id=555b6ca6-be48-4d58-bdb7-9e7d74b88180'
        );
    }

    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card">
                    <h1 className="a-title">Stack de Tecnologías</h1>
                    <div className='tecnologies'>
                        {
                            tecnologies.map(item => (
                                <img
                                    key={item.id}
                                    src={item.img}
                                    alt={item.name}
                                    className="a-img"
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="a-rigth">
                <h1 className="a-title">Sobre Mi</h1>
                <p className="a-sub">
                    Soy un joven programador nacido y criado en Argentina. Me considero un
                    desarrollador autodidacta y, aunque conozco el stack PERN (PostgreSQL,
                    Express, React y Node) disfruto mucho mas del Front.
                </p>
                <p className="a-desc">
                    Conozco y uso las siguientes tecnologías: JavasScript, HTML, CSS, Node Js,
                    React Js, Redux, PostgreSQL, Express y TypeScript
                </p>
                <div className="a-award">
                    <img src={Certificado} alt="" className="a-award-img" onClick={goToCertificate} />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Full Stack Web Developer Graduado de Henry</h4>
                        <p className="a-award-desc">
                            Completé mis estudios en el Bootcamp de Soy Henry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
