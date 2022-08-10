import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Searched = () => {
    const [cuisine, setCuisine] = useState([]);
    const { search } = useParams();
    useEffect(()=>{
        getSearched(search);
    }, [search]);

    const getSearched = async (name) =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipe = await api.json();
        setCuisine(recipe.results);
      }

  return (
    <Grid>
      {
        cuisine.map((cuisine) => (
         <Card key={cuisine.id}>
          <img src={cuisine.image} alt={cuisine.title} />
          <h4>{cuisine.title}</h4>
         </Card>
        ))
      }
    </Grid>
  )
}

export default Searched

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`