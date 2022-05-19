import React from "react";

import icon_followers from "./img/icon_followers.png";
import icon_following from "./img/icon_following.png";
import "./styles.css";

const Person = ({ user }) => {
  const { login, name, followers, following, avatar_url, html_url } = user;
  return (
    <div className="person">
      <div className="person__avatar">
        <img src={avatar_url} />
      </div>
      <div className="person__name">{name}</div>
      <a target="_blank" className="person__link" href={html_url}>
        <div className="person__login">{login}</div>
      </a>
      <div className="person__group group">
        <div className="group__followers">
          <div className="group__icon">
            <img src={icon_followers} alt={"icon_followers"} />
          </div>
          <div className="group__description">{followers}</div>
        </div>
        <div className="group__following">
          <div className="group__icon">
            <img src={icon_following} alt={"icon_following"} />
          </div>
          <div className="group__description">{following}</div>
        </div>
      </div>
    </div>
  );
};

export default Person;
