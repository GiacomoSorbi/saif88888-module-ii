import React from "react";
import "./style.css";

const Profile = () => {
  return (
    <div className="profile_skills">
      <div className="container">
        <div className="profile">
          <h2 className="profile-title">
            <span>My </span>Profile
          </h2>
          <ul className="profile-list">
            <li className="profile-item">
              <span>Name</span>
              Sayif Said
            </li>
            <li className="profile-item">
              <span>Birthday</span>
              11/03
            </li>
            <li className="profile-item">
              <span>Address</span>
              London
            </li>
            <li className="profile-item">
              <span>Phone</span>
              00447474409091
            </li>
            <li className="profile-item">
              <span>Email</span>
              saif_saeed_cs@yahoo.com
            </li>
            <li className="profile-item">
              <span>Website</span>
              <span className="web">www.mywebsite.com</span>
            </li>
          </ul>
        </div>

        <div className="skills">
          <h2 className="skills-title">
            Some <span>skills</span>
          </h2>
          <p className="skills-desc">
            I use creative and software engineering/programing skills to design,
            build and improve websites. I understand user experience and are
            able to build websites that are easy to understand, navigate and
            use, and adhere to design standards and specifications.
          </p>
          <div className="bar">
            <span className="title">Visual Design</span>
            <span className="perc">100%</span>
            <div className="parent">
              <span className="sp1"></span>
            </div>
          </div>

          <div className="bar">
            <span className="title">CMS</span>
            <span className="perc">90%</span>
            <div className="parent">
              <span className="sp2"></span>
            </div>
          </div>

          <div className="bar">
            <span className="title">Programming Languages</span>
            <span className="perc">80%</span>
            <div className="parent">
              <span className="sp3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
