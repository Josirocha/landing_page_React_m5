import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, name, type }) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor={name}>{label}</label><br />
            <input className={styles.input} type={type} name={name} />
        </div>
    )
}

export default Input