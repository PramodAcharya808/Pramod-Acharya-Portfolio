import React, { useState } from "react";
import userImg from "./Assets/mydp.jpg";
import * as FaIcons from "react-icons/fa";
import "./UserCard.css";

function UserCard() {
  const [detailActive, setDetailActive] = useState(false);
  return (
    <div className="main center">
      <div className="box center">
        <img src={userImg} alt="" />
        <div>
          <p className="user_name">Pramod Acharya</p>
          <p className="skill">Full Stack MERN Developer</p>
          <p className="skill"></p>
        </div>
        <div
          className="arr_container center"
          onClick={() => setDetailActive(true)}
        >
          <FaIcons.FaArrowRight className="fas" />
        </div>

        <div
          className={
            detailActive ? "left_container active " : "left_container off "
          }
        >
          <p className="head">Under Development ⚠️</p>
          <div className="skills">
            <div className="content">
              <p>
                Iam working on my website. Trying to revamp the look and feel
                with my newly acquired skills.
              </p>
            </div>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com"
              target="_blank"
              className="fab"
              rel="noopener noreferrer"
            >
              <FaIcons.FaLinkedin className="fab" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              className="fab"
              rel="noopener noreferrer"
            >
              <FaIcons.FaGithub className="fab" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              className="fab"
              rel="noopener noreferrer"
            >
              <FaIcons.FaInstagram className="fab" />
            </a>
          </div>
          <div className="cancel center" onClick={() => setDetailActive(false)}>
            <FaIcons.FaTimes className="fas" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
