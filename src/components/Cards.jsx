import React from 'react';
import Card from './Card';
import s from '../styles/Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
  return (
  cities.map(function(e){
    return <div className={s.divCard}>
      <Card
      key={e.id}
      id={e.id}
      max={e.max}
      min={e.min}
      name={e.name}
      img={e.img}
      onClose={() => onClose(e.id)}
      />
    </div>
  })
  )
} else {
  return (
    <div>No hay ciudades</div>
  )
}
};