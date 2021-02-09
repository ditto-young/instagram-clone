import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"hiyoung",
      caption:"Wow it works",
      imageUrl:"https://www.freecodecamp.org/news/content/images/size/w1000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username:"hiyoung",
      caption:"Wow it works",
      imageUrl:"https://www.freecodecamp.org/news/content/images/size/w1000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    }
  ]);

  useEffect(() => {
    //this is where the code runs
  }, [posts]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
          />
      </div>

      <h1>Hello let's build and instagram clone with react</h1>
      
      {
        posts.map(post => (
          <Post usename={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
