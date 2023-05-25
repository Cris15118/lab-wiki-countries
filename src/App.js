

import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  
  return (
    <div className="App">
     
      <Navbar/>
      <div className='container'>
        <div className='row'>
      <CountriesList />

      <Routes>
    
    <Route path='/:alpha3Code' element={<CountryDetails/>}/>

      </Routes>
</div>
</div>
    </div>
  );
}

export default App;
