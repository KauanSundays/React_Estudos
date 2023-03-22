import React from 'react'
import Item from './Item.js'

function List() {
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca= 'Kauan'/>
            <Item marca= 'Mahomes'/>
        </ul>
        </>
    )
}

export default List