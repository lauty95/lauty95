import React from 'react'
import './project.css'

const Project = ({ props }) => {
    const { id, img, link } = props
    return (
        <div className='p' key={id}>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel='noreferrer' >
                <img src={img} alt="imagen del proyecto" className="p-img" />
            </a>
        </div>
    )
}

export default Project
