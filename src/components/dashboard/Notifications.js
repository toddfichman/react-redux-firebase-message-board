import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card notifications">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications-list">
            {notifications && notifications.map(notification => {
                if (notification.content === "Added new post") {
                  return (
                    <Link
                      key={notification.id}
                      to={`/posts/${notification.postId}`}
                    >
                      <li className="notification-link hoverable grey darken-1">
                        <span className="chip">
                          {notification.user}{" "}
                        </span>
                        <span className="white-text">
                          {notification.content}{" "}
                        </span>
                        <div className="white-text">
                          {moment(notification.time.toDate()).fromNow()}
                        </div>
                      </li>
                    </Link>
                  );
                } else {
                  return (
                    <li className="notification-signup grey darken-1" key={notification.id}>
                      <span className="chip">
                        {notification.user}{" "}
                      </span>
                      <span className="white-text">
                        {notification.content}{" "}
                      </span>
                      <div className="white-text">
                        {moment(notification.time.toDate()).fromNow()}
                      </div>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
