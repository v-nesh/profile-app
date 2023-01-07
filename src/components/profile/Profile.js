import React from "react";
import style from "./profile.module.css";

import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import Card from "../ui/card/Card";

const Profile = ({ img, name, job, company, link }) => {
  return (
    <Card>
      <div className={style.profile}>
        <img src={img} alt="" />
        <div className={style["profile-content"]}>
          <h3>My profile</h3>
          <div className={style.text}>
            <p>Name: </p>
            <p>{name}</p>
          </div>
          <div className={style.text}>
            <p>Job: </p>
            <p>{job}</p>
          </div>
          <div className={style.text}>
            <p>Company: </p>
            <p>{company}</p>
          </div>
          <IconContext.Provider value={{ color: "#666 ", size: "30px" }}>
            <div className={style.icons}>
              <AiOutlineTwitter />
              <AiOutlineGithub />
              <AiOutlineGooglePlus />
            </div>
          </IconContext.Provider>
          <div className={style.btn}>
            <a href={link} target="_blank" rel="noreferrer">
              View profile
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
