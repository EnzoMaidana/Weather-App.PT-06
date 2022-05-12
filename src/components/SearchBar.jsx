import React from 'react';
import s from '../styles/SearchBar.module.css';
import {IoSearchCircleOutline} from 'react-icons/io5';


export default function SearchBar({onSearch, name}) {
  // acá va tu código
  return <form className={s.searchBar}
             onSubmit={(e) => {
                e.preventDefault();

                const input = document.querySelector('#cityId');

                onSearch(input.value);
                input.value = '';
                    }}>
            <input id='cityId'placeholder='Ciudad...' value={name}></input>
            <button><IoSearchCircleOutline/></button>
        </form>
};