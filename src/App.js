import './App.css';
import data from './data/data.json';
import {BrowserRouter as Router} from 'react-router-dom';
import PreNavbar from './components/PreNavbar';


function App() {
    return (
        <Router>
            <PreNavbar />
        </Router>
    );
}

export default App;