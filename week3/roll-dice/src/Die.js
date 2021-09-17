import React from 'react'
import './Die.css'

const Die = ({face, rolling}) =>{
    return  <i className = {`die fas fa-dice-${face} ${rolling}`}/>
}
export default Die