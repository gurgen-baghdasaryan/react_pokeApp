import React, { useState, useEffect } from "react";
import {DebounceInput} from 'react-debounce-input';
import PokeCard from '../PokeCard';
import axios from "axios";



const Main = () => {

  const [pokemons, setPokemon] = useState([]) 

  const [search, setSearch] = useState('') 

  useEffect (()=>{
    if(search.length !== 0){ 
      axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
          .then(res => { 
            setPokemon([...pokemons,res.data])
          })
          .catch(error => console.log(error))
    }


  }, [search]) 

 
  const renderPokemons = ()=>{
    return pokemons.map((e,i)=>{
      return <PokeCard key={i} data={e}/>
    })  
  }

  return (

    
      <div>
        <DebounceInput
          minLength={1}
          debounceTimeout={300}
          onChange={event => {setSearch(event.target.value)}} /> 
          {renderPokemons()}
      </div>
      

  );

};

export default Main;
