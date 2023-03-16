import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';


const Description = () => {
    const routeParams = useParams();
    // console.log(routeParams);

   const [listPokemon, setListPokemon] = useState(routeParams);

    useEffect = () => {
        console.log(routeParams);

    }

    return (<h1>Descripción del pokemón</h1>);
}

export default Description;