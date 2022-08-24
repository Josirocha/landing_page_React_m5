import React from 'react'
import CardButton from '../CardButton/CardButton'
import styles from './Card.module.css'

const Card = ({ img, name, description, oldPrice, price, count, value }) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={img} alt="produto" />
            </div>
            <h3 className={styles.text}>{name}</h3>
            <p className={styles.text}>{description}</p>
            <h4 className={styles.text}>De:{oldPrice},00</h4>
            <h5 className={styles.text}>Por:{price},00</h5>
            <p className={styles.text}>ou {count}x de {value}</p>
            <div className={styles.container}>
            <CardButton text='Comprar'/>
            </div>
        </div>
    )
}

export default Card