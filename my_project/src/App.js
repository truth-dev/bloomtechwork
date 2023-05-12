//react router 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/**
 *  ..... -> HOME
 * /CATS -> CATS 
 * /ABOUT -> ABOUT
 */

//Home screen 
const style = {margin: '1rem', padding: '0.5rem', border: '2px solid black'}
function Home(props){
 return <h2 style={{...style, borderColor:'gold'}}>Home Screen</h2>
}

//the cat Screen 
function Cats(props){
  return <h2 style={{...style, borderColor:'blue'}}>The Cats Screen</h2>
 }

//the about screen 
 function About(props){
  return <h2 style={{...style, borderColor:'green'}}>The About Screen</h2>
 }

export default function App(){
  return (
    <BrowserRouter>
    <h1>My App!</h1>
    <nav>
      <Link to="/">Home</Link>&nbsp;
      <Link to="cats">Cats </Link>&nbsp;
      <Link to="about">About </Link>&nbsp;
    </nav>
    
    <Routes> 
      <Route path="/" element={<Home />}/>
      <Route path="cats" element={<Cats />}/>
      <Route path="about" element={<About />}/>
    </Routes>

  </BrowserRouter>
  )
}

/**
 * nbsp makes a space 
 * routing links to their designating pages! 
 * works taking the client when hitting a link will take them where they need
 * to go! ~navigation url~
 * 
 */
