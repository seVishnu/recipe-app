import Pages from "./pages/Pages";
import Category from "./components/Category"
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'
function App() {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Fork Place</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
const Logo = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    font-size: 1.5rem;
    font-family: 'Lobster Two', cursive;
    cursor: pointer;
`

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
      font-size: 2rem;
    }
`
