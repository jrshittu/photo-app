import { async } from 'jshint/src/prod-params';
import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from "./search.svg";
import PicsComponent from './pics';

const API_KEY = "M16Lq6_PG8dyMKB-2iGV7-e4lMIpv8dWU46Wn36GVwY";


function App() {

  const [photos, setPhotos] = useState([]);
  const [search, setSearchPhoto] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  const fetchPhotos = async (title, page) => {
    const API_URL = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${API_KEY}`;
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setPhotos(data.results);
  };

  const searchPhotos = (title) => {
    setCurrentPage(1);
    fetchPhotos(title, 1);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    fetchPhotos(search, currentPage + 1);
  };

const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      fetchPhotos(search, currentPage - 1);
    }
  };

  useEffect(() => {
    fetchPhotos('blue sky', currentPage);
  }, [currentPage]);


  return (
    <div className="app">
      <h1>Pixisland</h1>

      <div className="search">
        <input placeholder='Search for your favorite pictures' 
        value={search}
        onChange={ (e)=> setSearchPhoto(e.target.value)}/>

        <img src={SearchIcon} alt="search" 
         onClick={() => searchPhotos(search)}
        />

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
      <div className='pagination'>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    
    </div>
  );
}

export default App;
