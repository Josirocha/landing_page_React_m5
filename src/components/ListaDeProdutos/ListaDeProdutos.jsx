import React from 'react'
import { useState, useEffect } from 'react'
import ButtonForm from '../ButtonForm/ButtonForm'
import Card from '../Card/Card'
import TextLine from '../TextLine/TextLine'
import styles from './ListaDeProdutos.module.css'
import Input from '../Input/Input'

export const ListaDeProdutos = () => {

    const [produtos, setProdutos] = useState([])
    const [page, setPage] = useState(1)

    async function handleRequisicao() {
        const response = await fetch(
            `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
        );

        const json = await response.json()
        setProdutos([...produtos, ...json.products])
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        handleRequisicao()
    }, [page])

    return (
        <div >
            <div className={styles.cards}>
                {produtos.length && produtos.map((item, index) => {
                    console.log({ item })
                    return (
                        <Card
                            key={index}
                            img={item.image}
                            name={item.name}
                            description={item.description}
                            oldPrice={item.oldPrice}
                            price={item.price}
                            count={item.installments.count}
                            value={item.installments.value}
                        />
                    )
                })}
            </div>
            <div className={styles.containerButton}>
                <ButtonForm onClick={nextPage} text='Ainda mais produtos aqui!' />
            </div>

            <div>
                <TextLine text='Compartilhe a novidade' />
            </div>

            <div>
                <p className={styles.p}>
                    Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
                </p>
            </div>

            <div className={styles.inputContainer}>
                <Input type='text' label='Nome do seu amigo:' />
                <Input type='email' label='E-mail:' />
            </div>
            <div className={styles.divButtom}>
                <ButtonForm text='Enviar Agora'/>
            </div>
        </div>

    )

}