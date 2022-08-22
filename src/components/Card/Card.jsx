import React from 'react'
import styles from './Card.module.css'

const Card = ({ name, description, oldPrice, price, installments }) => {
    return (
        <div>
            <div className={styles.img}></div>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>De:{oldPrice}</h4>
            <h5>Por:{price}</h5>
            <p>ou {installments.count} de {installments.value}</p>
        </div>
    )
}

export default Card