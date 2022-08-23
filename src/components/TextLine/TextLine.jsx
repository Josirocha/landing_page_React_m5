import React from 'react'
import styles from './TextLine.module.css'

const TextLine = ({text}) => {
    return (
        <div className={styles.textLine}>
            <div>
                <hr />
            </div>
            <h3>{text}</h3>
            <div>
                <hr />
            </div>
        </div>
    )
}

export default TextLine