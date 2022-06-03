import React, {useState} from 'react';
import './App.css';

import { Input } from './Input';
import { CardList } from './CardList';


function App() {
  const [citiesList, setCitiesList] = useState([]);
  return (
    <div className='Main'>
      <Input setCitiesList={setCitiesList}/>
      <CardList citiesList={citiesList}/>
      {/* <CardList citiesList={citiesList}/> */}
    </div>
  );
}

export default App;
