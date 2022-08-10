import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Recipe = () => {
    const [details, setDetails] = useState({});
    const [active, setActive] = useState('instructions');
    const { id } = useParams();
    useEffect(()=>{
        fetchRecipe(id);
    }, [id])

    const fetchRecipe = async (id) =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        setDetails(data);
    }
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
        </div>
        <Info>
            <Button className={active === 'instructions' ? 'active' : ''} onClick={()=> setActive('instructions')}>Instructions</Button>
            <Button className={active === 'ingredients' ? 'active' : ''} onClick={()=> setActive('ingredients')}>Ingredients</Button>
            {active === 'instructions' && (
            <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}} />
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}} />
            </div>
            )}
            {active === 'ingredients' && (
            <ul>
                {details.extendedIngredients.map((item) => (
                    <li key={item.id}>{item.original}</li>
                ))}
            </ul>
            )}
        </Info>
    </DetailWrapper>
  )
}

export default Recipe

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }
    h3 {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
`
const Info = styled.div`
    margin-left: 10rem;
`