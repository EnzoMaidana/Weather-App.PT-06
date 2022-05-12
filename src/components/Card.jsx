import React from 'react';
import Temp from './Temp';
import s from '../styles/Card.module.css';
import {Link} from 'react-router-dom';

export default function Card({max, min, name, img, onClose, id}) {
  // acá va tu código
  return (
    <div className={s.card}>
      <button  onClick={onClose} className={s.btn} >X</button>
      <Link to={`/ciudad/${id}`} >
      <span className={s.nombre}>{name}</span>
      </Link>
      <section className={s.middleDiv}>
         <Temp label='Min' value={min}/>
         <Temp label='Max' value={max}/>
        <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt='icono'/>
      </section>
  </div>
  );
  
};



