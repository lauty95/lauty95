import React, { useContext } from 'react'
import './toggle.css'
import Sun from './../../img/sun.png'
import Moon from './../../img/moon.png'
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }

    var styles = {
        left: theme.state.darkMode ? "0" : "25px"
    }

    return (
        <div className='t'>
            <img src={Sun} alt="Sol" className="t-icon" />
            <img src={Moon} alt="Luna" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={styles}></div>
        </div>
    )
}

export default Toggle
