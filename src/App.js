import { async } from 'jshint/src/prod-params';
import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from "./search.svg";
import PicsComponent from './pics';

const API_KEY = "M16Lq6_PG8dyMKB-2iGV7-e4lMIpv8dWU46Wn36GVwY";
const API_URL = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${API_KEY}`;


function App() {

  const [photos, setPhotos] = useState([]);

  const searchPhotos = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setPhotos(data.results);
  };

  useEffect(()=>{
    searchPhotos('love');
  }, []);

  return (
    <div className="app">
      <h1>Pixisland</h1>

      <div className="search">
        <input placeholder='Search for your favorite pictures' 
        value="love"
        onChange={ ()=> {}}/>

        <img src={SearchIcon} alt="search"/>

      </div>
      {
        photos?.length > 0
        ? (
            <div className='container'>
              {photos.map((photo) => (
                <PicsComponent photo={photo}/>
              ))}
            </div>
        ) : (
            <div>
              <div className='empty'>
                  <h2>No photos found</h2>
              </div>
            </div>
        )
      } 
    
    </div>
  );
}

export default App;
