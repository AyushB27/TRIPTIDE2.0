import Login from './Login.jsx';
import Dashboard from './dashboard.jsx';
import LocnDetails from './details.jsx';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'



function App() 
{
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/explore" element={<Dashboard/>}/>
        <Route path="/details/:loc" element={<LocnDetails/>}/>
      </Routes>
    </Router>
    
    

    </>
  );
}

export default App
