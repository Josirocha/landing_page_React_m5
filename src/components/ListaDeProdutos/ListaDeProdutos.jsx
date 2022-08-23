import React from 'react'
import { useState, useEffect } from 'react'
import ButtonForm from '../ButtonForm/ButtonForm'
import Card from '../Card/Card'
import TextLine from '../TextLine/TextLine'
import styles from './ListaDeProdutos.module.css'

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
        setPage(pagina + 1)
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
                <ButtonForm text='Ainda mais produtos aqui!' />
            </div>

            <div>
                <TextLine text='Compartilhe a novidade' />
            </div>

        </div>




    )

}