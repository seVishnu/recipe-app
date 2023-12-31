import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const { type } = useParams();

  useEffect(()=>{
    getCuisine(type);
  }, [type])
  const getCuisine = async (name) =>{
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipe = await api.json();
    setCuisine(recipe.results);
  }
  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration:0.5}}>
      {
        cuisine.map((cuisine) => (
         <Card key={cuisine.id}>
          <Link to={'/recipe/'+cuisine.id}>
          <img src={cuisine.image} alt={cuisine.title} />
          <h4>{cuisine.title}</h4>
          </Link>
         </Card>
        ))
      }
    </Grid>
  )
}

export default Cuisine

const Grid = styled(motion.div)`
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