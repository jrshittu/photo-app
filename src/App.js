import { async } from 'jshint/src/prod-params';
import './App.css';
import { useEffect } from 'react';
import SearchIcon from "./search.svg";

const API_KEY = "M16Lq6_PG8dyMKB-2iGV7-e4lMIpv8dWU46Wn36GVwY";
const API_URL = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${API_KEY}`;

const pixs1 = {
  "id": "5U_28ojjgms",
  "slug": "5U_28ojjgms",
  "created_at": "2019-09-20T15:40:25Z",
  "updated_at": "2023-07-17T17:09:14Z",
  "promoted_at": "2019-09-22T08:01:59Z",
  "width": 4821,
  "height": 2712,
  "color": "#262626",
  "blur_hash": "LSF=m#~qE1Z~_3-;xFV@E1RjofR*",
  "description": "Collaborative Meeting",
  "alt_description": "people sitting on chair",
  "breadcrumbs": [],
  "urls": {
      "raw": "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNjg5NjgzMzk5fDA&ixlib=rb-4.0.3",
      "full": "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNjg5NjgzMzk5fDA&ixlib=rb-4.0.3&q=85",
      "regular": "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNjg5NjgzMzk5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNjg5NjgzMzk5fDA&ixlib=rb-4.0.3&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNjg5NjgzMzk5fDA&ixlib=rb-4.0.3&q=80&w=200",
      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1568992687947-868a62a9f521"
  },
  "links": {
      "self": "https://api.unsplash.com/photos/5U_28ojjgms",
      "html": "https://unsplash.com/photos/5U_28ojjgms",
      "download": "https://unsplash.com/photos/5U_28ojjgms/download?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNjg5NjgzMzk5fDA",
      "download_location": "https://api.unsplash.com/photos/5U_28ojjgms/download?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNjg5NjgzMzk5fDA"
  },
  "likes": 1159,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {
      "business-work": {
          "status": "approved",
          "approved_on": "2021-08-23T15:13:05Z"
      }
  },
  "user": {
      "id": "Q9Ig7Srx2OI",
      "updated_at": "2023-07-15T03:06:28Z",
      "username": "raddfilms",
      "name": "Redd F",
      "first_name": "Redd",
      "last_name": "F",
      "twitter_username": null,
      "portfolio_url": "https://www.raddfilms.com/",
      "bio": "Photographer & Filmmaker\r\n",
      "location": "Edmonton, Alberta",
      "links": {
          "self": "https://api.unsplash.com/users/raddfilms",
          "html": "https://unsplash.com/@raddfilms",
          "photos": "https://api.unsplash.com/users/raddfilms/photos",
          "likes": "https://api.unsplash.com/users/raddfilms/likes",
          "portfolio": "https://api.unsplash.com/users/raddfilms/portfolio",
          "following": "https://api.unsplash.com/users/raddfilms/following",
          "followers": "https://api.unsplash.com/users/raddfilms/followers"
      },
      "profile_image": {
          "small": "https://images.unsplash.com/profile-1651635111298-b88086877026image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          "medium": "https://images.unsplash.com/profile-1651635111298-b88086877026image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          "large": "https://images.unsplash.com/profile-1651635111298-b88086877026image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      "instagram_username": "radd.films",
      "total_collections": 0,
      "total_likes": 244,
      "total_photos": 636,
      "accepted_tos": true,
      "for_hire": true,
      "social": {
          "instagram_username": "radd.films",
          "portfolio_url": "https://www.raddfilms.com/",
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
          "type": "landing_page",
          "title": "people",
          "source": {
              "ancestry": {
                  "type": {
                      "slug": "images",
                      "pretty_slug": "Images"
                  },
                  "category": {
                      "slug": "people",
                      "pretty_slug": "People"
                  }
              },
              "title": "People images & pictures",
              "subtitle": "Download free people images",
              "description": "Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
              "meta_title": "People Pictures [HQ] | Download Free Images on Unsplash",
              "meta_description": "Choose from hundreds of free people pictures. Download HD people photos for free on Unsplash.",
              "cover_photo": {
                  "id": "PmNjS6b3XP4",
                  "slug": "PmNjS6b3XP4",
                  "created_at": "2017-04-20T22:04:07Z",
                  "updated_at": "2023-07-14T07:01:28Z",
                  "promoted_at": "2017-04-21T16:00:49Z",
                  "width": 4630,
                  "height": 3087,
                  "color": "#a6d9d9",
                  "blur_hash": "LjI=x%:QUbv#NHWVa}kCt7jFjZfQ",
                  "description": "Summer in France with baby",
                  "alt_description": "woman carrying baby while walking",
                  "breadcrumbs": [],
                  "urls": {
                      "raw": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3",
                      "full": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                      "regular": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                      "small": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                      "thumb": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492725764893-90b379c2b6e7"
                  },
                  "links": {
                      "self": "https://api.unsplash.com/photos/PmNjS6b3XP4",
                      "html": "https://unsplash.com/photos/PmNjS6b3XP4",
                      "download": "https://unsplash.com/photos/PmNjS6b3XP4/download",
                      "download_location": "https://api.unsplash.com/photos/PmNjS6b3XP4/download"
                  },
                  "likes": 2715,
                  "liked_by_user": false,
                  "current_user_collections": [],
                  "sponsorship": null,
                  "topic_submissions": {
                      "current-events": {
                          "status": "approved",
                          "approved_on": "2021-03-01T12:52:57Z"
                      }
                  },
                  "user": {
                      "id": "7S_pCRiCiQo",
                      "updated_at": "2023-07-02T21:53:04Z",
                      "username": "thedakotacorbin",
                      "name": "Dakota Corbin",
                      "first_name": "Dakota",
                      "last_name": "Corbin",
                      "twitter_username": "thedakotacorbin",
                      "portfolio_url": null,
                      "bio": "Husband | Father | Creator",
                      "location": "Utah, United States",
                      "links": {
                          "self": "https://api.unsplash.com/users/thedakotacorbin",
                          "html": "https://unsplash.com/@thedakotacorbin",
                          "photos": "https://api.unsplash.com/users/thedakotacorbin/photos",
                          "likes": "https://api.unsplash.com/users/thedakotacorbin/likes",
                          "portfolio": "https://api.unsplash.com/users/thedakotacorbin/portfolio",
                          "following": "https://api.unsplash.com/users/thedakotacorbin/following",
                          "followers": "https://api.unsplash.com/users/thedakotacorbin/followers"
                      },
                      "profile_image": {
                          "small": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                          "medium": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                          "large": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                      },
                      "instagram_username": "thedakotacorbin",
                      "total_collections": 0,
                      "total_likes": 1,
                      "total_photos": 44,
                      "accepted_tos": true,
                      "for_hire": true,
                      "social": {
                          "instagram_username": "thedakotacorbin",
                          "portfolio_url": null,
                          "twitter_username": "thedakotacorbin",
                          "paypal_email": null
                      }
                  }
              }
          }
      }
  ]
}
function App() {

  const searchPhotos = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.results);
  };

  useEffect(()=>{
    searchPhotos('mountain');
  }, []);

  return (
    <div className="app">
      <h1>Pixisland</h1>

      <div className="search">
        <input placeholder='Search for your favorite pictures' 
        value="mountain"
        onChange={ ()=> {}}/>

        <img src={SearchIcon} alt="search"/>

      </div>
      <div className='container'>
        <div className='pics'>
          <div>
            <img src={pixs1.urls.small} alt={pixs1.alt_description} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
