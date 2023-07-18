import { async } from 'jshint/src/prod-params';
import './App.css';
import { useEffect } from 'react';

const API_KEY = "M16Lq6_PG8dyMKB-2iGV7-e4lMIpv8dWU46Wn36GVwY";
const API_URL = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${API_KEY}`;

function App() {

  const searchPhotos = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(()=>{
    searchPhotos('mountain');
  }, []);

  return (
    <div className="App">

      <h1>Photo App</h1>

    </div>
  );
}

export default App;
