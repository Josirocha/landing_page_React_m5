import React from 'react'
import ButtonForm from '../ButtonForm/ButtonForm'
import Input from '../Input/Input'
import PreText from '../PreText/PreText'
import Radio from '../Radio/Radio'
import styles from './Form.module.css'


const Form = () => {
    return (
        <div className={styles.container}>
            <PreText />
            <form className={styles.form}>
                <Input label='Seu Nome:' type='text' />
                <Input label='E-mail:' type='email' />
                <Input label='CPF:' type='text' />
                <div className={styles.radioContainer}>
                    <Radio value="masculino" name="sexo" label="Masculino" />
                    <Radio value="feminino" name="sexo" label="Feminino" />
                </div>
                <div className={styles.button}>
                <ButtonForm text='enviar' />
                </div>


            </form>
        </div>
    )
}

export default Form