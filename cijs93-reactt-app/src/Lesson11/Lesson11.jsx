import { useEffect, useState } from "react";
import axios from 'axios';

function Lesson11() {
	const [pokemons, setPokemons] = useState([])
	
	const handleFetchPokemon = async () => {
		// fetch('https://pokeapi.co/api/v2/pokemon')
		// 	.then((response) => {
    //     console.log(response);
		// 		return response.json()
		// 	}).then((data) => {
		// 		console.log(data)
		// 		setPokemons(data.results)
    //     console.log('In fetct', pokemons);
		// 	})

    // const response = await fetch('https://pokeapi.co/api/v2/pokemon');
		// const data = await response.json();
		// console.log(data);
    // setPokemons(data.results)

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
		console.log(response);
    setPokemons(response.data.results);

    console.log('Out fetch', pokemons);
	}

  useEffect(async () => {
		try {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon');
			const data = await response.json();
			console.log(data);
			setPokemons(data.results);
		}
		catch(err) {
      console.log(err);
		}
	}, [])

  return (
    <>
      <h1>Lesson 11</h1>

      <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
			<ul>
				{pokemons.map(pokemon => {
					return <li key={pokemon.url}>{pokemon.name}</li>
				})}
			</ul>
    </>
  )
}

export default Lesson11;