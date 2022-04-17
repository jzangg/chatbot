import React from "react";
import "./avatar.css";
import botavatar from "./images/alex_long_face.png";
import useravatar from "./images/jeffrey_face.png"

function BotAvatar() {
  return <img src={botavatar} className="my-avatar" alt=""/>;
}

function UserAvatar() {
  return <img src={useravatar} className="my-avatar" alt=""/>;
}

export { BotAvatar, UserAvatar };