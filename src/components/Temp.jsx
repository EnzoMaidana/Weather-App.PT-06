import React from 'react'
import s from '../styles/Temp.module.css';

export default function Temp({label, value}) {
  return (
    <div className={s.temp}>
      <p className={s.label}>{label}</p>
      <p className={s.value}>{value}</p>
    </div>
        
  )
}
