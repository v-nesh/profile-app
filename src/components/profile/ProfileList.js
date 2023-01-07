import React from "react";
import style from "../profile/profilelist.module.css";
import { profiles } from "../../data-list";
import Profile from "./Profile";
const ProfileList = () => {
  return (
    <section className={style.center}>
      <div>
        <h1>Team Members</h1>
        <div className={style["profile-container"]}>
          {profiles.map((profile, index) => {
            const { img, name, job, company, link } = profile;
            return (
              <Profile
                key={index}
                img={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
