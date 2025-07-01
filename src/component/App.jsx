import Login from './Login.jsx';
import Dashboard from './dashboard.jsx';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'



function App() 
{
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dash" element={<Dashboard/>}/>
      </Routes>
    </Router>
    
    

    </>
  );
}

export default App
