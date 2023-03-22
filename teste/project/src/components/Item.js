import React from 'react'
import styles from './frase.module.css';

function Item(props) {
    return (
        <>
            <li className={styles.fraseContent}>{props.marca}</li>
        </>
    )
}

export default Item