import React from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react' 
import { NavBar } from '../components/NavBar'
import { PokemonCard } from '../components/PokemonCard/'
import { Skeletons } from '../components/Skeleton' 

export const Home = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    let endPoints = []
    for (let i = 1; i <=150; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    axios.all(endPoints.map((endPoint) => axios.get(endPoint)))
    .then((res) => setPokemons(res))

  }
  

  const pokemonFilter = (name) => {
    let filteredPokemons = []

    if(name === "") {
      getPokemons()
    }

    for (let i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)

  }

  return (
    <>
      <NavBar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.length === 0 ? <Skeletons /> : 
          
          pokemons.map((pokemon) => 
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <PokemonCard name={pokemon.data.name} img={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
            </Grid>

          )
        }
        
        </Grid>
      </Container>
    </>
  )
}
