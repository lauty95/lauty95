import React from 'react'
import Project from '../Project/Project'
import './projects.css'
import { projects } from '../../data'

const Projects = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Proyectos en los que he trabajado</h1>
                <p className="pl-desc">
                    Estos son los proyectos en los que me desempeñé. Algunos son
                    académicos, otros proyectos personales y otros pedidos por
                    clientes/amigos.
                </p>
                <p className="pl-desc">
                    En todos ellos trabajé con el Stack PERN.
                    También usé tecnologías como Bootstrap, Cloudinary y experimenté con Sanity.
                </p>
            </div>
            <div className="pl-list">
                {projects.map(item => (
                    <Project props={item} />
                ))}
            </div>
        </div>
    )
}

export default Projects
