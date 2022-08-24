import React from 'react'
import styles from './CardButton.module.css'

const CardButton = ({ text }) => {
    return (
        <button className={styles.button}>{text}</button>
    )
}

export default CardButton