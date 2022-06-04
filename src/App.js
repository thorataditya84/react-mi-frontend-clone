import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Slider from './components/Slider'

import packageInfo from './data/data.json';
const banner = packageInfo.banner;

function App() {
    return (
        <Router>
            <PreNavbar />
            <Navbar />
            <Slider start={banner.start}/>
        </Router>
    );
}

export default App;
