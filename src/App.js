import "./App.css";
import image1 from "./assets/Oval.png";
import image2 from "./assets/Oval2.png";
import image3 from "./assets/Oval3.png";
import image4 from "./assets/Oval4.png";
import image5 from "./assets/Oval5.png";
import image6 from "./assets/Oval6.png";
import image7 from "./assets/Oval7.png";
import comment from "./assets/comment.png";
import React, { useState } from 'react';



function App() {
  const [isRead, setIsRead] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const handleMarkAsRead = () => {
    setIsRead(true);
    setNotificationCount(0);
  };
  return (
    <div className="App">
      <div className="card">
        <header >
          <div className="left-header">
            <h2>Notifications</h2>
            <div className="numberDiv">
              <p className="number" >
              {notificationCount}
              </p>
            </div>
          </div>
          <p className="mark" onClick={handleMarkAsRead}>Mark all as read</p>
        </header>
        <div className="notifications">
          <div className="notification" style={{ backgroundColor: isRead ? '' : '#f7fafd' }} >
            <img src={image1} className="image"></img>
            <div className="notification-description">
              <p className="description">
                <span className="name">Jacob Thompson</span> reacted to your
                recent post
                <span className="news">My first tournament today!</span>
                <span className="red" style={{ backgroundImage: isRead ? 'none' : '' }}></span>
              </p>
              <p className="time">1m ago</p>
            </div>
          </div>
          <div className="notification" style={{ backgroundColor: isRead ? '' : '#f7fafd' }}>
            <img src={image3} className="image"></img>
            <div className="notification-description">
              <p className="description">
                <span className="name">Angela Gray</span> followed you
                <span className="red" style={{ backgroundImage: isRead ? 'none' : '' }}></span>
              </p>
              <p className="time">1 day ago</p>
            </div>
          </div>
          <div className="notification" style={{ backgroundColor: isRead ? '' : '#f7fafd' }}>
            <img src={image2} className="image"></img>
            <div className="notification-description">
              <p className="description">
                <span className="name">Mark Webber</span> has joined your group
                <span className="activity">Chess Club</span>
                <span className="red" style={{ backgroundImage: isRead ? 'none' : '' }}></span>
              </p>
              <p className="time">1 day ago</p>
            </div>
          </div>
          <div className="notification">
            <img src={image4} className="image"></img>
            <div className="notification-description">
              <p className="description">
                <span className="name">Rizky Hasanuddin</span> sent you a
                private message
              </p>
              <p className="time">5 days ago</p>
              <div className="message">
                <p className="text">
                  Hello, thanks for setting up the Chess Club. I’ve been a
                  member for a few weeks now and I’m already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </div>
          <div className="notification">
            <img src={image5} className="image"></img>
            <div className="notification-description">
              <p className="description">
                <span className="name">Kimberly Smith</span> commented on your
                picture
              </p>
              <p className="time">1 week ago</p>
            </div>
            <img src={comment} className="image2"></img>
          </div>
          <div className="notification">
            <img src={image6} className="image"></img>
            <div className="notification-description">
              <p className="description">
                <span className="name">Nathan Peterson</span> reacted to your
                recent post{" "}
                <span className="news">
                  5 end-game strategies to increase your win rate
                </span>
              </p>
              <p className="time">2 weeks ago</p>
            </div>
          </div>
          <div className="notification">
            <img src={image7} className="image"></img>
            <div className="notification-description">
              <p className="description">
                <span className="name">Anna Kim</span> left the group
                <span className="activity">Chess Club</span>
              </p>
              <p className="time">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



