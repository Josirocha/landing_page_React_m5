import React from 'react'
import style from './Title.module.css'

const Title = ({ title,subtitle }) => {
    return (
        <div>
            <h2 className={style.h2}>{title}</h2>
            <h1>{subtitle}</h1>
        </div>
    )
}

export default Title