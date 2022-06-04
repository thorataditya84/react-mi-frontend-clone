import './App.css';
import data from './data/data.json';
import {BrowserRouter as Router} from 'react-router-dom';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';


function App() {
    return (
        <Router>
            <PreNavbar />
            <Navbar />
        </Router>
    );
}

export default App;