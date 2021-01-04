import React from 'react'
import '../App.css'

export default function StarCard(props) {
    return (
        <div>
            <img className="card" src={props.card} alt=""></img>
        </div>
    )
}
