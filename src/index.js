import React from 'react'
import styles from './styles.module.css'

const Button = (props) => {
  return  (
    <button {...props} className= {`${styles.btn} ${styles[props.type]}`}> {props.text} </button>
  )
}

export default Button