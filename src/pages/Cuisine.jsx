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
    <div>Cuisine</div>
  )
}

export default Cuisine