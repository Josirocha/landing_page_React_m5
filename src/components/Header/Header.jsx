import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Title title='uma seleção de produtos' subtitle='especial para você' />
            <p className={styles.p}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
            <div className={styles.containerButton}>
                <Button text='Conheça a Linx ' />
                <Button text='Ajude o algorítimo' />
                <Button text='Seus produtos' />
                <Button text='Compartilhe' />
            </div>
        </header>
    )
}

export default Header