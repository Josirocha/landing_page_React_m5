import React from 'react'
import styles from './ButtonForm.module.css'

const ButtonForm = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>{text}</button>
    )
}

export default ButtonForm