import React from 'react'
import styles from './frase.module.css';
import  './frase.module.css'

function Pessoa (props) {
    return (
        <div className={styles.fraseContent}>
        <h1>Nome: {props.nome}</h1>
        <p>Idade: {props.idade}</p>
        <p>Profissao: {props.profissao}</p>
        <p className={styles.fraseContent}>Este é um exemplo</p>
        </div>
    )
}

export default Pessoa