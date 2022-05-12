import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import s from './styles/App.module.css';
import {Route, Switch} from 'react-router-dom';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';

const apiKey = process.env.REACT_APP_APIKEY;

function App() {

  const [cities, setCities] = React.useState([]);

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          const exist = cities.find((c) => c.id === cities.id)
          if(!exist){
            setCities(oldCities => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return null;
      }
    }

   
  
  return (
    <div className={s.app}>
      <Nav onSearch={(ciudad) => onSearch(ciudad)}/>
      <Switch>
        <Route exact path='/'>
      <div className={s.main}>
        <section>
        {cities.length ? (<Card
          max={cities[cities.length - 1].max}
          min={cities[cities.length - 1].min}
          name={cities[cities.length - 1].name}
          img={cities[cities.length - 1].img}
        />
        ) : (<span className={s.default}>NO HAY CIUDADES</span>)}
        </section>
      </div>
      <div className={s.allCities}>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route
        path='/ciudad/:id'
        render={({match}) => <Ciudad city={onFilter(match.params.id)}/>}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
