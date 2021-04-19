import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Characters.css";

function Characters() {
  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */
  
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    searchCharacter()
  }, []);

  const handleInputChange = function (e) {
    searchCharacter(e.target.value);
  }

  const searchCharacter = async (value = '') => {
    setIsLoading(true);
    {
      const data = await fetch(`https://breakingbadapi.com/api/characters?name=${value}`);
      // const data = await fetch(`https://breakingbadapi.com/api/characters?name=${input.search}`);
      const character = await data.json();
      // console.log(character)
      setCharacters(character);
      setIsLoading(false);
    }
  }
  

  return (
    <div className="Characters">
      <h1>List of Characters</h1>

      {/*
        Aquí vamos a definir el buscador de personajes.
        Debemos crear una SearchBar que contenga un form controlado
      */}
      <input type="text" name="search" onChange={handleInputChange} autoComplete="off" />

      <ul className="Characters__list">
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
        {isLoading ? (
          <Spinner />
        ) : (
            characters.map(character => (
              <li key={character.char_id}>
                <Link key={character.char_id} to={`/characters/${character.char_id}`}>
                  {character.name}
                </Link>
              </li>
            ))
        )}
      </ul>
    </div>
  );
}

export default Characters;
