import { async } from 'jshint/src/prod-params';
import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from "./search.svg";
import PicsComponent from './pics';

const API_KEY = "M16Lq6_PG8dyMKB-2iGV7-e4lMIpv8dWU46Wn36GVwY";
const API_URL = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${API_KEY}`;
const pix1 = {
  "id": "eHD8Y1Znfpk",
  "slug": "eHD8Y1Znfpk",
  "created_at": "2017-06-13T15:14:07Z",
  "updated_at": "2023-07-18T03:01:37Z",
  "promoted_at": null,
  "width": 2301,
  "height": 1536,
  "color": "#404040",
  "blur_hash": "LQDl~9_NS%fkV?s-t7t74.M{xtxu",
  "description": "Spacious boardroom",
  "alt_description": "photo of dining table and chairs inside room",
  "breadcrumbs": [],
  "urls": {
      "raw": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3",
      "full": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3&q=85",
      "regular": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3&q=80&w=200",
      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1497366811353-6870744d04b2"
  },
  "links": {
      "self": "https://api.unsplash.com/photos/eHD8Y1Znfpk",
      "html": "https://unsplash.com/photos/eHD8Y1Znfpk",
      "download": "https://unsplash.com/photos/eHD8Y1Znfpk/download?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA",
      "download_location": "https://api.unsplash.com/photos/eHD8Y1Znfpk/download?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA"
  },
  "likes": 2531,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {
      "current-events": {
          "status": "approved",
          "approved_on": "2020-04-21T20:37:06Z"
      },
      "business-work": {
          "status": "approved",
          "approved_on": "2020-04-29T09:32:31Z"
      },
      "interiors": {
          "status": "approved",
          "approved_on": "2020-11-20T13:58:51Z"
      }
  },
  "user": {
      "id": "8JndoHx8RCw",
      "updated_at": "2023-07-12T15:40:47Z",
      "username": "sunday_digital",
      "name": "Nastuh Abootalebi",
      "first_name": "Nastuh",
      "last_name": "Abootalebi",
      "twitter_username": null,
      "portfolio_url": "http://sunday.digital",
      "bio": null,
      "location": "Munich",
      "links": {
          "self": "https://api.unsplash.com/users/sunday_digital",
          "html": "https://unsplash.com/@sunday_digital",
          "photos": "https://api.unsplash.com/users/sunday_digital/photos",
          "likes": "https://api.unsplash.com/users/sunday_digital/likes",
          "portfolio": "https://api.unsplash.com/users/sunday_digital/portfolio",
          "following": "https://api.unsplash.com/users/sunday_digital/following",
          "followers": "https://api.unsplash.com/users/sunday_digital/followers"
      },
      "profile_image": {
          "small": "https://images.unsplash.com/profile-1553072872488-7bc864ac59f0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          "medium": "https://images.unsplash.com/profile-1553072872488-7bc864ac59f0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          "large": "https://images.unsplash.com/profile-1553072872488-7bc864ac59f0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      "instagram_username": "prsn.kitty",
      "total_collections": 1,
      "total_likes": 1,
      "total_photos": 12,
      "accepted_tos": true,
      "for_hire": true,
      "social": {
          "instagram_username": "prsn.kitty",
          "portfolio_url": "http://sunday.digital",
          "twitter_username": null,
          "paypal_email": null
      }
  },
  "tags": [
      {
          "type": "search",
          "title": "office"
      },
      {
          "type": "search",
          "title": "business"
      },
      {
          "type": "search",
          "title": "work"
      }
  ]
};


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
      <div className='container'>
        <PicsComponent pix1={pix1}/>
      </div>
    
    </div>
  );
}

export default App;
