
import './App.css';
import Homepage from './components/homepage';
import { Route,  Routes } from 'react-router-dom';
import Title from './components/title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
             <Routes>
                <Route  path="/" element={<Title />} />
                <Route path="/home" element={<Homepage/> } />
            </Routes>
    
        
        
      
 
     
     
      </header>
      
    </div>
  );
}

export default App;
