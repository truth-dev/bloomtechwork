import React, {useState,} from 'react';
import './App.css';
import './dashboard.css';
import './desktop.css';
import './sidebar.css';
import headerImage from './bookphotos/book-case1.png'
import headerImageTwo from './bookphotos/book-case2.png';
import headerImageThree from './bookphotos/book-case3.png';



const Dashboard = () => {
  
return (
  <div className='container'>
 
  </div>
 
)
}

const Sidebar = ({ isOpen }) => {
  return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <ul>
              <li>Create a Story</li>
              <li>Find an Awesome Story</li>
              <li>Profile</li>
              <li>Setting</li>
             
          </ul>
      </div>
  );
}



function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <button onClick={() => setIsOpen(!isOpen)}>
      
        </button>
   <Dashboard />
    <Desktop />
    <Sidebar isOpen={isOpen} /> 
   
        
    </div>
    
  );
}


const Desktop = () => {
  
  
  return (

    <div className="desktop">
 
 
 
 
  
      <div className="div">
        <div className="overlap">
          <img className="book-case" alt="Book case" src={headerImageThree} />
          <img className="img" alt="Book case" src={headerImage} />
          <div className="forge-your-story">&nbsp;&nbsp;Forge Your&nbsp;&nbsp;Story</div>
          <img className="book-case-2" alt="Book case" src={headerImageTwo} />
        </div>
        <div className="links">
          <div className="overlap-group">
            <div className="text-wrapper">Sign-in/Log-in</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Create A Story</div>
          </div>
          <div className="overlap-2">
            <div className="ellipse" />
            <div className="text-wrapper-3">Home</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
