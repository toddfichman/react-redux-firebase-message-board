import React from "react";
import moment from "moment";
import {Link} from 'react-router-dom'

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card notifications">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications-list">
            {notifications &&
              notifications.map(notification => {
                if (notification.content === 'Added new post') {
                  return (
                    <li className="notification" key={notification.id}>
                      <Link to={`/posts/${notification.postId}`}>
                        <span className="blue-text lighten-3">{notification.user} </span>
                        <span className="black-text">{notification.content} </span>
                        <div className="grey-text">{moment(notification.time.toDate()).fromNow()}</div>
                      </Link>
                    </li>
                  )  
                } else {
                  return (
                    <li className="notification" key={notification.id}>
                        <span className="blue-text lighten-3">{notification.user} </span>
                        <span className="black-text">{notification.content} </span>
                        <div className="grey-text">{moment(notification.time.toDate()).fromNow()}</div>
                    </li>
                  )
                }
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
