import React from 'react'
import styles from "./Input.module.css"
export default function Input({ label, type, value, name, onChange, error, onBlur }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input onBlur={onBlur} id={name} type={type} name={name} className={styles.input} onChange={onChange} value={value} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
