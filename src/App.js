import { async } from 'jshint/src/prod-params';
import './App.css';
import { useEffect } from 'react';
import SearchIcon from "./search.svg";

const API_KEY = "M16Lq6_PG8dyMKB-2iGV7-e4lMIpv8dWU46Wn36GVwY";
const API_URL = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${API_KEY}`;

const pixs1 = {
  "id": "dIMJWLx1YbE",
  "slug": "dIMJWLx1YbE",
  "created_at": "2018-09-03T07:02:42Z",
  "updated_at": "2023-07-18T00:04:41Z",
  "promoted_at": "2018-09-04T16:06:10Z",
  "width": 3605,
  "height": 4806,
  "color": "#262626",
  "blur_hash": "LPEyoM9Ft8R%_NRit7kCNsM{ozt7",
  "description": null,
  "alt_description": "MacBook Pro",
  "breadcrumbs": [],
  "urls": {
      "raw": "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3",
      "full": "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3&q=85",
      "regular": "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA&ixlib=rb-4.0.3&q=80&w=200",
      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1535957998253-26ae1ef29506"
  },
  "links": {
      "self": "https://api.unsplash.com/photos/dIMJWLx1YbE",
      "html": "https://unsplash.com/photos/dIMJWLx1YbE",
      "download": "https://unsplash.com/photos/dIMJWLx1YbE/download?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA",
      "download_location": "https://api.unsplash.com/photos/dIMJWLx1YbE/download?ixid=M3w0NzU0MDB8MHwxfHNlYXJjaHw3fHxvZmZpY2V8ZW58MHx8fHwxNjg5Njk3NzQ0fDA"
  },
  "likes": 2287,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {
      "business-work": {
          "status": "approved",
          "approved_on": "2020-04-06T14:20:15Z"
      }
  },
  "user": {
      "id": "wtg3a4xlj2w",
      "updated_at": "2023-07-08T02:18:45Z",
      "username": "olenkasergienko",
      "name": "Olena Sergienko",
      "first_name": "Olena",
      "last_name": "Sergienko",
      "twitter_username": null,
      "portfolio_url": "https://www.behance.net/olenkasergienko",
      "bio": "🇺🇦 From Kyiv with love 📸🖖\r\n🇵🇱 Currently in Warsaw DM me for brand content | thanks for the PayPal donation",
      "location": "Warszawa",
      "links": {
          "self": "https://api.unsplash.com/users/olenkasergienko",
          "html": "https://unsplash.com/@olenkasergienko",
          "photos": "https://api.unsplash.com/users/olenkasergienko/photos",
          "likes": "https://api.unsplash.com/users/olenkasergienko/likes",
          "portfolio": "https://api.unsplash.com/users/olenkasergienko/portfolio",
          "following": "https://api.unsplash.com/users/olenkasergienko/following",
          "followers": "https://api.unsplash.com/users/olenkasergienko/followers"
      },
      "profile_image": {
          "small": "https://images.unsplash.com/profile-1630491198015-3d997fe8db72image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          "medium": "https://images.unsplash.com/profile-1630491198015-3d997fe8db72image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          "large": "https://images.unsplash.com/profile-1630491198015-3d997fe8db72image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      "instagram_username": "olenka_sergienko",
      "total_collections": 1,
      "total_likes": 238,
      "total_photos": 809,
      "accepted_tos": true,
      "for_hire": true,
      "social": {
          "instagram_username": "olenka_sergienko",
          "portfolio_url": "https://www.behance.net/olenkasergienko",
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
          "type": "landing_page",
          "title": "laptop",
          "source": {
              "ancestry": {
                  "type": {
                      "slug": "wallpapers",
                      "pretty_slug": "HD Wallpapers"
                  },
                  "category": {
                      "slug": "desktop",
                      "pretty_slug": "Desktop"
                  },
                  "subcategory": {
                      "slug": "laptop",
                      "pretty_slug": "Laptop"
                  }
              },
              "title": "Hd laptop wallpapers",
              "subtitle": "Download free laptop wallpapers",
              "description": "Choose from a curated selection of laptop wallpapers for your mobile and desktop screens. Always free on Unsplash.",
              "meta_title": "Laptop Wallpapers: Free HD Download [500+ HQ] | Unsplash",
              "meta_description": "Choose from hundreds of free laptop wallpapers. Download HD wallpapers for free on Unsplash.",
              "cover_photo": {
                  "id": "7TGVEgcTKlY",
                  "slug": "7TGVEgcTKlY",
                  "created_at": "2017-07-20T06:16:22Z",
                  "updated_at": "2023-07-17T13:01:45Z",
                  "promoted_at": "2017-07-20T15:42:14Z",
                  "width": 5130,
                  "height": 3425,
                  "color": "#597340",
                  "blur_hash": "LAD,i29I0O.M^%IWjK-o4:RkxXr_",
                  "description": "Red Fox in a Field",
                  "alt_description": "red fox standing on grass field",
                  "breadcrumbs": [],
                  "urls": {
                      "raw": "https://images.unsplash.com/photo-1500531359996-c89a0e63e49c?ixlib=rb-4.0.3",
                      "full": "https://images.unsplash.com/photo-1500531359996-c89a0e63e49c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                      "regular": "https://images.unsplash.com/photo-1500531359996-c89a0e63e49c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                      "small": "https://images.unsplash.com/photo-1500531359996-c89a0e63e49c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                      "thumb": "https://images.unsplash.com/photo-1500531359996-c89a0e63e49c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1500531359996-c89a0e63e49c"
                  },
                  "links": {
                      "self": "https://api.unsplash.com/photos/7TGVEgcTKlY",
                      "html": "https://unsplash.com/photos/7TGVEgcTKlY",
                      "download": "https://unsplash.com/photos/7TGVEgcTKlY/download",
                      "download_location": "https://api.unsplash.com/photos/7TGVEgcTKlY/download"
                  },
                  "likes": 1652,
                  "liked_by_user": false,
                  "current_user_collections": [],
                  "sponsorship": null,
                  "topic_submissions": {
                      "wallpapers": {
                          "status": "approved",
                          "approved_on": "2020-04-06T14:20:09Z"
                      }
                  },
                  "premium": false,
                  "plus": false,
                  "user": {
                      "id": "UT41ainZxFI",
                      "updated_at": "2023-07-17T02:58:18Z",
                      "username": "nathananderson",
                      "name": "Nathan Anderson",
                      "first_name": "Nathan",
                      "last_name": "Anderson",
                      "twitter_username": "nathanworking",
                      "portfolio_url": "https://kunack.us/follow?source=unsplash",
                      "bio": "Prints now available at Kunack.us",
                      "location": "Knoxville, TN",
                      "links": {
                          "self": "https://api.unsplash.com/users/nathananderson",
                          "html": "https://unsplash.com/@nathananderson",
                          "photos": "https://api.unsplash.com/users/nathananderson/photos",
                          "likes": "https://api.unsplash.com/users/nathananderson/likes",
                          "portfolio": "https://api.unsplash.com/users/nathananderson/portfolio",
                          "following": "https://api.unsplash.com/users/nathananderson/following",
                          "followers": "https://api.unsplash.com/users/nathananderson/followers"
                      },
                      "profile_image": {
                          "small": "https://images.unsplash.com/profile-1676320214445-e3fec6f7b87cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                          "medium": "https://images.unsplash.com/profile-1676320214445-e3fec6f7b87cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                          "large": "https://images.unsplash.com/profile-1676320214445-e3fec6f7b87cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                      },
                      "instagram_username": "kunack.us",
                      "total_collections": 9,
                      "total_likes": 1224,
                      "total_photos": 1330,
                      "accepted_tos": true,
                      "for_hire": true,
                      "social": {
                          "instagram_username": "kunack.us",
                          "portfolio_url": "https://kunack.us/follow?source=unsplash",
                          "twitter_username": "nathanworking",
                          "paypal_email": null
                      }
                  }
              }
          }
      },
      {
          "type": "landing_page",
          "title": "computer",
          "source": {
              "ancestry": {
                  "type": {
                      "slug": "wallpapers",
                      "pretty_slug": "HD Wallpapers"
                  },
                  "category": {
                      "slug": "desktop",
                      "pretty_slug": "Desktop"
                  },
                  "subcategory": {
                      "slug": "computer",
                      "pretty_slug": "Computer"
                  }
              },
              "title": "Hd computer wallpapers",
              "subtitle": "Download free computer wallpapers",
              "description": "Choose from a curated selection of computer wallpapers for your mobile and desktop screens. Always free on Unsplash.",
              "meta_title": "Computer Wallpapers: Free HD Download [500+ HQ] | Unsplash",
              "meta_description": "Choose from hundreds of free computer wallpapers. Download HD wallpapers for free on Unsplash.",
              "cover_photo": {
                  "id": "wyEinDRV88I",
                  "slug": "wyEinDRV88I",
                  "created_at": "2016-11-18T21:01:40Z",
                  "updated_at": "2023-07-16T14:01:08Z",
                  "promoted_at": "2016-11-18T21:01:40Z",
                  "width": 7952,
                  "height": 5304,
                  "color": "#c0c0c0",
                  "blur_hash": "LhF$CS?bRjRj~p%LV@WCSiWWWBof",
                  "description": null,
                  "alt_description": "woman taking photo of buildings",
                  "breadcrumbs": [],
                  "urls": {
                      "raw": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3",
                      "full": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                      "regular": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                      "small": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                      "thumb": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1479502806991-251c94be6b15"
                  },
                  "links": {
                      "self": "https://api.unsplash.com/photos/wyEinDRV88I",
                      "html": "https://unsplash.com/photos/wyEinDRV88I",
                      "download": "https://unsplash.com/photos/wyEinDRV88I/download",
                      "download_location": "https://api.unsplash.com/photos/wyEinDRV88I/download"
                  },
                  "likes": 584,
                  "liked_by_user": false,
                  "current_user_collections": [],
                  "sponsorship": null,
                  "topic_submissions": {
                      "wallpapers": {
                          "status": "approved",
                          "approved_on": "2020-04-06T14:20:09Z"
                      }
                  },
                  "premium": false,
                  "plus": false,
                  "user": {
                      "id": "WylEZk6e2xA",
                      "updated_at": "2023-07-12T04:21:00Z",
                      "username": "thoughtcatalog",
                      "name": "Thought Catalog",
                      "first_name": "Thought",
                      "last_name": "Catalog",
                      "twitter_username": "thoughtcatalog",
                      "portfolio_url": "http://thoughtcatalog.com/?utm_campaign=platform-link&utm_source=unsplash&utm_medium=profile",
                      "bio": "We're a digital magazine based in Brooklyn. We use Unsplash to share with the world some of our best in-house photography.",
                      "location": "New York",
                      "links": {
                          "self": "https://api.unsplash.com/users/thoughtcatalog",
                          "html": "https://unsplash.com/@thoughtcatalog",
                          "photos": "https://api.unsplash.com/users/thoughtcatalog/photos",
                          "likes": "https://api.unsplash.com/users/thoughtcatalog/likes",
                          "portfolio": "https://api.unsplash.com/users/thoughtcatalog/portfolio",
                          "following": "https://api.unsplash.com/users/thoughtcatalog/following",
                          "followers": "https://api.unsplash.com/users/thoughtcatalog/followers"
                      },
                      "profile_image": {
                          "small": "https://images.unsplash.com/profile-1479502385647-8aa0d0e9a87b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                          "medium": "https://images.unsplash.com/profile-1479502385647-8aa0d0e9a87b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                          "large": "https://images.unsplash.com/profile-1479502385647-8aa0d0e9a87b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                      },
                      "instagram_username": "thoughtcatalog",
                      "total_collections": 5,
                      "total_likes": 12,
                      "total_photos": 173,
                      "accepted_tos": true,
                      "for_hire": true,
                      "social": {
                          "instagram_username": "thoughtcatalog",
                          "portfolio_url": "http://thoughtcatalog.com/?utm_campaign=platform-link&utm_source=unsplash&utm_medium=profile",
                          "twitter_username": "thoughtcatalog",
                          "paypal_email": null
                      }
                  }
              }
          }
      }
  ]
};

const pixs2 = {
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

  const searchPhotos = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.results);
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
        <div className='pics'>
          <div>
            <img src={pixs1.urls.small} alt={pixs1.meta_title} />
          </div>
          <div>
            <span>{pixs1.tags.title}</span>
          </div>
        </div>
        <div className='pics'>
          <div>
            <img src={pixs2.urls.small} alt={pixs2.meta_title} />
          </div>
          <div>
            <span>{pixs2.tags.title}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
