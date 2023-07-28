
import React from 'react';
import './App.css';
import fblogo from './images/fblogo.jpg';
// import profileHome from './images/profile-home.png';
import notification from './images/notification.png';
import search from './images/search.png';
import cartman from './images/cartman.png';
import inbox from './images/inbox.png';
import video from './images/video.png';
import friends from './images/friends.png';
import livevideo from './images/livevideo.png';
import watch from './images/watch.png';
import marketplace from './images/marketplace.png';
import events from './images/events.png';
import group from './images/group.png';
import pages from './images/pages.png';
import upload from './images/upload.png';
import southpark from './images/southpark.jpg'

function App() {
  return ( 
<>
    <div>
      <nav>
        <div className="navBar-left">
          <img src={fblogo} alt="" className="logo" />
          <div className="searchBox">
          <img src={search} alt="" /> 
            <input type="text" placeholder='Seacrch...'></input>
          </div>
          <div className="navUserImg">
          <img src={cartman} alt="" />
          </div>
          <ul>
            <li> <img src={notification} alt="" /> </li>
            <li> <img src={inbox} alt="" /> </li>
            <li> <img src={video} alt="" /> </li>
          </ul>

        </div>

      </nav>

      <div className="container">
  
        <div className="leftcontainer">

        <div className="links">
        <a href="#"><img src={friends} alt="" />Friends</a>
        <a href="#"><img src={livevideo} alt=""  />Live</a>
        <a href="#"><img src={watch} alt=""  />Watch videos</a>
        <a href="#"><img src={marketplace} alt=""  />Marketplace</a>
        <a href="#"><img src={events} alt=""  />Events</a>
        <a href="#"><img src={group} alt=""  />Groups</a>
        <a href="#"><img src={pages} alt=""  />Pages</a>
        <a href="#"> See More</a>
        </div>
        
        </div>

        <div className="maincontainer">
          <div className='maincont'>
          <div className='story'>
          <img src={upload} alt="" />
          <p> Post Story</p>
          </div>

          <div className='story'>
          <img src={upload} alt="" />
          <p> Post Story</p>
          </div>

          <div className='story'>
          <img src={upload} alt="" />
          <p> Post Story</p>
          </div>

          <div className='story'>
          <img src={upload} alt="" />
          <p> Post Story</p>
          </div>
          <div className='story'>
          <img src={upload} alt="" />
          <p> Post Story</p>
          </div>

          </div>
        </div>


        <div className="rightcontainer">
          <div className='eventTitle'>
        <h3>Events</h3>
        <a href="#"> See all</a>
        </div>

        <div className='event'>
          <div class="leftEve">
          <h3>28</h3>
          <span>July</span>
          </div>
          <div class="rightEve">
          <h3>South Park</h3>
          <p>welcome to South Park event</p>
          <a href='#'>More Info</a>

          </div>
          </div>

          <div className='event'>
          <div class="leftEve">
          <h3>12</h3>
          <span>August</span>
          </div>
          <div class="rightEve">
          <h3>South Park</h3>
          <p>welcome to South Park event</p>
          <a href='#'>More Info</a>
          </div>
          </div>

          <div> <img src={southpark} alt="" className='southparkImg' /> </div>
          </div>
      </div>
    </div>
    </>
  );
}


export default App;
